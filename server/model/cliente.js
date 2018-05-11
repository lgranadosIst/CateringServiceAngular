var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    nombre: { type: String, require: true },
    apellidos: { type: String, require: true },
    telefono: { type: Number, require: true },
    correo: { type: String, require: true },
    direccion: { type: String, require: true }
},{ 
	versionKey: false 
});

module.exports = mongoose.model('cliente', schema);
