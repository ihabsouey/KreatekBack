const ClientController = require('../controllers/ClientController');
const CommandeController = require('../controllers/CommandeController');
const ProduitController = require('../controllers/ProduitController');


module.exports =  (server) => {

    //Client
    server.get('/clients', ClientController.readAll);
    server.get('/client/:id', ClientController.read);
    server.post('/client', ClientController.create);
    server.put('/client/:id', ClientController.put);
    server.delete('/client/:id', ClientController.delete);

    //Produit
    server.get('/produits', ProduitController.readAll);
    server.get('/produit/:id', ProduitController.read);
    server.post('/produit', ProduitController.create);
    server.put('/produit/:id', ProduitController.put);
    server.delete('/produit/:id', ProduitController.delete);

    //Commande
    server.get('/commandes', CommandeController.readAll);
    server.get('/commande/:id', CommandeController.read);
    server.post('/commande', CommandeController.create);
    server.put('/commande/:id', CommandeController.put);
    server.delete('/commande/:id', CommandeController.delete);


}
