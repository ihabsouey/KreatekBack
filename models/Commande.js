const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommandeSchema = new Schema({
    client: {
        type: Schema.Types.ObjectId,
        ref: 'client'
    },
    produits: [{
        type: Schema.Types.ObjectId,
        ref: 'produit'
    }],
    date: {
        type: Date,
        default: Date.now
    },

});
const Commande = mongoose.model('commande', CommandeSchema);
module.exports = Commande;