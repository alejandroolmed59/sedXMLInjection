var mongoose = require('mongoose');

let Materia = new mongoose.Schema({
    nombre: String,
    uv: Number,
    descripcion: String,
    nota: {
        default:0,
        type: Number
    }
});

module.exports = mongoose.model('materia', Materia);