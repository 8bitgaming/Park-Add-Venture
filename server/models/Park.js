const { Schema } = require('mongoose');

const parkSchema = new Schema({
    parkId: {
        type: String,
    },
    parkName: {
        type: String,
    },
    image: {
        type: String,
    },
    link: {
        type: String,
    },
    visited: {
        type: Boolean,
        default: false
    },
    dateVisited: {
        type: String,
    }
});

module.exports = parkSchema;
