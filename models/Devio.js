const mongoose = require('mongoose');

const devioSchema = mongoose.Schema({
    github: String,
    name: String,
    email: String,
    branch: String,
    year: String,
    workshop: {type: String, default: "dev io"},
    attendeeId: {type: String, default: ""},
    status: {type: Number, default: 0} // 1: approved, 2: present
},{
    timestamps: true
});

module.exports = DevIO = mongoose.model('devio', devioSchema);