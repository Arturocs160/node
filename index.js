//import express from 'express' //Es modules
const express = require('express'); //CommonJS /transpillar
const app = express();
const routes = require('./src/network');


const port = 3001;
app.use(express.json())

routes(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
 