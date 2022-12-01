const Produit = require('../models/Produit');

module.exports = {
    readAll : (req, res) => {
        Produit.find()
            .then(produits => res.json(produits))
            .catch(err => res.status(404).json({success: false}));
    },
    read : (req, res) => {
        Produit.findById(req.params.id)
            .then(produit => res.json(produit))
            .catch(err => res.status(404).json({success: false}));
    },
    create : (req, res) => {
        Produit.create(req.body)
            .then(produit => res.json({msg: 'Produit added successfully'}))
            .catch(err => res.status(400).json({success: false}));
    },
    put : (req, res) => {
        Produit.findByIdAndUpdate(req
            .params.id, req.body)
            .then(produit => res.json({msg: 'Updated successfully'}))
            .catch(err => res.status(400).json({success: false}));
    },
    delete : (req, res) => {
        Produit.findByIdAndRemove(req.params.id)
            .then(produit => res.json({msg: 'Produit deleted successfully'}))
            .catch(err => res.status(404).json({success: false}));
    }

}