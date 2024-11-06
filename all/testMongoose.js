const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var schema = mongoose.Schema({ name: String })

schema.methods.yo = function(){
    console.log(this.name + " сказал йоу")
    }

const Rapper = mongoose.model('Rapper', schema);

const rapper = new Rapper({ name: 'Oxxxymiron' });
rapper.save().then(() => rapper.yo()); 