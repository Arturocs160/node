const usersRoutes = require('./users');
const productsRoutes = require('./products');

function routes(server){
    server.use('/users', usersRoutes);
}

function routes(server){
    server.use('/products', productsRoutes);
}

module.exports = routes;