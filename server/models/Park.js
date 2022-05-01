const { Schema } = require('mongoose');

const parkSchema = new Schema({
    parkId: {
        type: String,
    },
    parkName: {
        type: String,
    },
    description: {
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
    },
    dateVisited: {
        type: String,
    }
});

module.exports = parkSchema;
