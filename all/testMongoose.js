const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

const Rapper = mongoose.model('Rapper', { name: String });

const rapper = new Rapper({ name: 'Oxxxymiron' });
rapper.save().then(() => console.log('йоу'));