const { Schema, model } = require('mongoose');

const GraphicCardSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    manufacturer: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
});

module.exports = model('GraphicCard', GraphicCardSchema );