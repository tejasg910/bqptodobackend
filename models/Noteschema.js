// import mongoose from "mongoose";
const mongoose = require('mongoose')

const NoteSchema  = new mongoose.Schema({
    title: {type: String, requied: true},
    content: {type: String, required: true}
})


module.exports = mongoose.model('Note', NoteSchema)