const ProductController = require('../../controllers/controlProd');
const OrderCont = require('../../controllers/controlOrder');
const { upload } = require('../../controllers/controlProd');
const ActCont = require('../../controllers/controlingActivity');
const { upload2 } = require('../../controllers/controlingActivity');

module.exports = function (app) {
    app.post('/api/product', upload.single("pic"), ProductController.createProduct);
    app.get('/api/product', ProductController.getAllProducts);
    app.get('/api/productavailable', ProductController.getAllAvailable);
    app.get('/api/product/:id', ProductController.getProduct);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
    
    app.post('/api/order', OrderCont.createOrder);
    app.get('/api/order', OrderCont.getAllOrders);
    app.get('/api/order/:id', OrderCont.getOrder);
    app.put('/api/order/:id', OrderCont.updateOrder);
    app.delete('/api/order/:id', OrderCont.deleteOrder);

    app.post('/api/activity', upload2.single("pic"), ActCont.createActivity);
    app.get('/api/activity', ActCont.getAllActivitys);
    app.get('/api/activity/:id', ActCont.getActivity);
    app.put('/api/activity/:id', ActCont.updateActivity);
    app.delete('/api/activity/:id', ActCont.deleteActivity);

}
