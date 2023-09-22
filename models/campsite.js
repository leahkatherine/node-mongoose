const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true // this field must be unique
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;