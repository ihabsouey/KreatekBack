const ClientController = require('../controllers/ClientController');
const ProduitController = require('../controllers/ProduitController');


module.exports =  (server) => {

    //Client
    server.get('/clients', ClientController.readAll);
    server.get('/clients/:id', ClientController.read);
    server.post('/client', ClientController.create);
    server.put('/clients/:id', ClientController.put);
    server.delete('/clients/:id', ClientController.delete);

    //Produit
    server.get('/produits', ProduitController.readAll);
    server.get('/produits/:id', ProduitController.read);
    server.post('/produit', ProduitController.create);
    server.put('/produits/:id', ProduitController.put);
    server.delete('/produits/:id', ProduitController.delete);

}
