var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    nombre: { type: String, require: true },
    descripcion: { type: String, require: true },
    precio: { type: Number, require: true }
    //,
    //nombreImg: { type: String, require: false }
}, {
    versionKey: false
});

module.exports = mongoose.model('platillo', schema);
