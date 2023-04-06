function nameChecker(name) {
    return /^[a-zA-Z]+$/.test(name);
}

function emailChecker(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function hoursChecker(numHours) {
    return numHours >= 0;
}

function userChecker(data) {
    if (!nameChecker(data.firstName) || !nameChecker(data.lastName)) {
        return "Name contains invalid characters.";
    } else if (!emailChecker(data.email)) {
        return "Invalid email address.";
    }
    return 1;
}

function animalChecker(data) {
    if (!nameChecker(data.name)) {
        return "Name contains invalid characters.";
    } else if (!hoursChecker(data.hoursTrained)) {
        return "Invalid number of hours entered.";
    }
    return 1;
}

export function trainingLogChecker(data) {
    if (!hoursChecker(data.hours)) {
        return {success: false, message: "Invalid number of hours entered."};
    }
    return { success: true, message: "Passed check successfully" };
}
