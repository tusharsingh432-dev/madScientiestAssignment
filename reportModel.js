const mongoose = require('mongoose');

const reportSchema = mongoose.Schema({
    cardId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("reports", reportSchema);