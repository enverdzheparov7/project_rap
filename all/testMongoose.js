const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var Rapper = require('./models/rap.js').Rapper

var rapper = new Rapper({
    title: "Эминем",
    nick : "Eminem",
})

rapper.save();