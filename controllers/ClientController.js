const Client = require('../models/Client');

module.exports = {
    
    readAll : (req, res) => {
        Client.find()
            .then(clients => res.json(clients))
            .catch(err => res.status(404).json({success: false}));
    },
    read(req, res) {
        Client.findById(req.params.id)
            .then(client => res.json(client))
            .catch(err => res.status(404).json({success: false}));
    },
    create(req, res) {
        Client.create(req.body)
            .then(client => res.json({msg: 'Client added successfully'}))
            .catch(err => res.status(400).json({success: false}));
    },
    put (req, res) {
        Client.findByIdAndUpdate(req
            .params.id, req.body)
            .then(client => res.json({msg: 'Updated successfully'}))
            .catch(err => res.status(400).json({success: false}));
    },
    delete (req, res) {
        Client.findByIdAndRemove(req.params.id)
            .then(client => res.json({msg: 'Client deleted successfully'}))
            .catch(err => res.status(404).json({success: false}));
    }
}

