const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    title: {
        type: String,
        require: true
    },
    subtitle: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

module.exports = model('Card', schema);