const express = require('express');
const connection = require("../../../services/db");

const router = express.Router();

// router.get('/test/product', (req, res) =>{
//     res.send('Hola desde backend.!');
// })    //callback

//Mostrar datos
router.get('/', async(request, response) =>{
    const db = await connection;
    const [result, fields] = await db.query("SELECT * FROM productos");
    response.send(result); 
})

// Insertar datos
router.post('/', async (request, response)=>{
    const data = request.body;
    const db = await connection;
    const nombre_producto = data.nombre_producto;
    const descripcion = data.descripcion;
    const precio = data.precio;
    const cantidad = data.cantidad;
    const categoria_id = data.categoria_id;
    const proveedor_id = data.proveedor_id;


    const sql = 'INSERT INTO `productos`(`nombre_producto`, `descripcion`, `precio`, `cantidad`, `categoria_id`, `proveedor_id`)' + 
    `VALUES ("${nombre_producto}", "${descripcion}", "${precio}", "${cantidad}", "${categoria_id}", "${proveedor_id}")`;

    const [result, fields] = await db.query(sql);

    console.log(data);
    response.send(result);
})

//Actualizar datos
router.put('/', async (request, response) =>{
    const data = request.body;
    const db = await connection;
    const id = data.id;
    const nombre_producto = data.nombre_producto;
    const descripcion = data.descripcion;
    const precio = data.precio;
    const cantidad = data.cantidad;
    const categoria_id = data.categoria_id;
    const proveedor_id = data.proveedor_id;

    const sql = `UPDATE productos SET nombre_producto = "${nombre_producto}", descripcion = "${descripcion}", precio = "${precio}",` +  
    `cantidad = "${cantidad}", categoria_id = "${categoria_id}", proveedor_id = "${proveedor_id}" WHERE id = "${id}" LIMIT 1`;

    const [result, fields] = await db.query(sql);

    console.log(data);
    response.send(result);
})

//Eliminar datos
router.delete('/', async (request, response) =>{
    const data = request.body;
    const db = await connection;
    const id = data.id;


    const sql = `DELETE FROM productos WHERE id = "${id}" LIMIT 1`;

    const [result, fields] = await db.query(sql);

    console.log(data);
    response.send(result);
})

module.exports = router;