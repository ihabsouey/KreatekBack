const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProduitSchema = new Schema({
    libelle: {
        type: String,
        required: true
    },
    prix_ttc :{
        type: Number,
        required: true
    },
    en_stock :{
        type: Boolean,
        default: false
    },
    is_gift :{
        type: Boolean,
        default: false
    },


});

const Produit = mongoose.model('produit', ProduitSchema);
module.exports = Produit;
