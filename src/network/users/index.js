const express = require('express');
const connection = require("../../../services/db");

const router = express.Router();

// router.get('/test/product', (req, res) =>{
//     res.send('Hola desde backend.!');
// })    //callback

//Mostrar datos
router.get('/', async(request, response) =>{
    const db = await connection;
    const [result, fields] = await db.query("SELECT * FROM usuarios");
    response.send(result); 
})

// Insertar datos
router.post('/', async (request, response)=>{
    const data = request.body;
    const db = await connection;
    const nombre_usuario = data.nombre_usuario;
    const contrasena = data.contrasena;
    const nombre_completo = data.nombre_completo;
    const correo_electronico = data.correo_electronico;
    const telefono = data.telefono;
    const rol = data.rol;


    const sql = 'INSERT INTO `usuarios`(`nombre_usuario`, `contrasena`, `nombre_completo`, `correo_electronico`, `telefono`, `rol`)' + 
    `VALUES ("${nombre_usuario}", "${contrasena}", "${nombre_completo}", "${correo_electronico}", "${telefono}", "${rol}")`;

    const [result, fields] = await db.query(sql);

    console.log(data);
    response.send(result);
})

//Actualizar datos
router.put('/', async (request, response) =>{
    const data = request.body;
    const db = await connection;
    const id = data.id;
    const nombre_usuario = data.nombre_usuario;
    const contrasena = data.contrasena;
    const nombre_completo = data.nombre_completo;
    const correo_electronico = data.correo_electronico;
    const telefono = data.telefono;
    const rol = data.rol;

    const sql = `UPDATE usuarios SET nombre_usuario = "${nombre_usuario}", contrasena = "${contrasena}", nombre_completo = "${nombre_completo}",` +  
    `correo_electronico = "${correo_electronico}", telefono = "${telefono}", rol = "${rol}" WHERE id = "${id}" LIMIT 1`;

    const [result, fields] = await db.query(sql);

    console.log(data);
    response.send(result);
})

//Eliminar datos
router.delete('/', async (request, response) =>{
    const data = request.body;
    const db = await connection;
    const id = data.id;


    const sql = `DELETE FROM usuarios WHERE id = "${id}" LIMIT 1`;

    const [result, fields] = await db.query(sql);

    console.log(data);
    response.send(result);
})

module.exports = router;