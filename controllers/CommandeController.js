const Commande = require('../models/Commande');


module.exports = {
    readAll : (req, res) => {
        Commande.find()
            .then(commandes => res.json(commandes))
            .catch(err => res.status(404).json({success: false}));
    }
    ,
    read : (req, res) => {
        Commande.findById(req.params.id)
            .then(commande => res.json(commande))
            .catch(err => res.status(404).json({success: false}));
    }
    ,
    create : (req, res) => {
        Commande.create(req.body)
            .then(commande => res.json({msg: 'Commande added successfully'}))
            .catch(err => res.status(400).json({success: false}));
    }
    ,
    put : (req, res) => {
        Commande.findByIdAndUpdate(req
            .params.id, req.body)
            .then(commande => res.json({msg: 'Updated successfully'}))
            .catch(err => res.status(400).json({success: false}));
    }
    ,
    delete : (req, res) => {
        Commande.findByIdAndRemove(req.params.id)
            .then(commande => res.json({msg: 'Commande deleted successfully'}))
            .catch(err => res.status(404).json({success: false}));
    }

}



    