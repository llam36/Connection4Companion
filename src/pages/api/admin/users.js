
import User from "../../../../server/mongodb/models/user";

export default async function handler(req, res) {
    let data = response.data;
    if (data.offset != 0) {
        
    }
}

async function getEntries(page_size, last_id) {
    let data;
    if (last_id == undefined) {
        if (page_size == undefined) {
            data = await User.find().limit(10);
        } else {
            data = await User.find().limit(page_size);
        }
    } else if (page_size == undefined) {
        data = await User.find({'_id': {'$gt': last_id}}).limit(10);
    }
    data.array.forEach(element => {
        delete element.password;
    });
    return data;
}
