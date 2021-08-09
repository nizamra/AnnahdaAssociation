const PersonController = require('../controllers/controller');
const ProductController = require('../controllers/controlProd');
const { upload } = require('../controllers/controlProd');
const AuthCont = require('../controllers/controlingAuthors');
module.exports = function(app){
    app.get('/api', PersonController.index);
    app.post('/api/people', PersonController.createPerson);
    app.post('/api/product', upload.single("pic"), ProductController.createProduct);
    app.get('/api/product', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.getProduct);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
    

    app.post('/api/author', AuthCont.createAuthor);
    app.get('/api/author', AuthCont.getAllAuthors);
    app.get('/api/author/:id', AuthCont.getAuthor);
    app.put('/api/author/:id', AuthCont.updateAuthor);
    app.delete('/api/author/:id', AuthCont.deleteAuthor);
}
