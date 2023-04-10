import { connectDB } from "../../server/mongodb";
import Animal from "server/mongodb/models/animal";
import User from "server/mongodb/models/user";

function nameChecker(name) {
    return /^[a-zA-Z]+$/.test(name);
}

function emailChecker(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function hoursChecker(numHours) {
    return numHours >= 0;
}

export function userChecker(data) {
    if (!nameChecker(data.firstName) || !nameChecker(data.lastName)) {
        return {success: false, message: "Name contains invalid characters."};
    } else if (!emailChecker(data.email)) {
        return {success: false, message: "Invalid email address."};
    }
    return { success: true, message: "Passed check successfully" };
}

export function animalChecker(data) {
    if (!nameChecker(data.name)) {
        return {success: false, message: "Name contains invalid characters."};;
    } else if (!hoursChecker(data.hoursTrained)) {
        return {success : false, message : "Invalid number of hours entered."};
    }
    return {success : true, message : "Passed check successfully"};
}

export async function trainingLogChecker(data) {
    if (!hoursChecker(data.hours)) {
        return {success: false, message: "Invalid number of hours entered."};
    }
    await connectDB();
    try {
        let animal = await Animal.findById(data.animal);
        let user = await User.findById(data.user);
        if (animal == null || user == null) {
            return { success: false, message: "Given animal or user does not exist in DB" };
        } else if (!animal.owner.equals(data.user)) {
            return { success: false, message: "Given animal not owned by given user" };
        }
        return { success: true, message: "Passed check successfully" };
    } catch(e) {
        return { success: false, message: e.message };
    }
}
