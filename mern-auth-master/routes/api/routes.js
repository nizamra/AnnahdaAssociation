const ProductController = require('../../controllers/controlProd');
const { upload } = require('../../controllers/controlProd');
const ActCont = require('../../controllers/controlingActivity');
const { upload2 } = require('../../controllers/controlingActivity');
module.exports = function (app) {
    app.post('/api/product', upload.single("pic"), ProductController.createProduct);
    app.get('/api/product', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.getProduct);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);


    app.post('/api/activity', upload2.single("pic"), ActCont.createActivity);
    app.get('/api/activity', ActCont.getAllActivitys);
    app.get('/api/activity/:id', ActCont.getActivity);
    app.put('/api/activity/:id', ActCont.updateActivity);
    app.delete('/api/activity/:id', ActCont.deleteActivity);

}
