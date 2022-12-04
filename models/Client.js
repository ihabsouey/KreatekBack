const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    nom_complet: {
        type: String,

    },
    nbr_gifts: {
        type: Number,
        default: 0
    },
    remise_defaut :{
        type: Number,
        default: 0
    }
},{versionKey: false});

const Client = mongoose.model('client', ClientSchema);
module.exports = Client;

