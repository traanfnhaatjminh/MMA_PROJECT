const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    gender: { type: String },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, unique: true },
    avatar: { type: String },
    address: { type: String },
    pass: { type: String, required: true },
    roleID: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true }
});

module.exports = mongoose.model('User', userSchema);
