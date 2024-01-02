const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let todoShema = new Schema(
    {
        title: {
            type: String
        },
        description: {
            type: String
        },
        start_time: {
            type: Date
        },
        end_time: {
            type: Date
        },
    },
    {
        collection: "todo",
        versionKey: false
    }
);
module.exports = mongoose.model("todoShema", todoShema);