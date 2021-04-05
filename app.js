const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');



const PORT = process.env.PORT || 3050;

const app = express();

app.use(cors(), bodyParser.json());

// Rutas
app.get('/', (req, res) => {
    res.send('Welcome');
});

// Obtener lista de productos
app.get('/product/', (req, res) => {
    const sql = 'SELECT * FROM productos';

    conecction.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) res.json(results);
        else res.send('No hay resulltados')
    });
});


// Obtener un producto
app.get('/product/:id', (req, res) => {
    const { id } = req.params
    const sql = `SELECT * FROM productos WHERE id = ${id}`;

    conecction.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) res.json(results);
        else res.send('No hay resulltados')
    });
});


// Guardar un nuevo producto
app.post('/product/', (req, res) => {
    const sql = 'INSERT INTO productos SET ?';

    const productoObj = {
        nombre: req.body.nombre,
        unidadmedida: req.body.unidadmedida,
        tipo: req.body.tipo,
        idlinea: req.body.idlinea,
        idcategoria: req.body.idcategoria,
        parte: req.body.parte,
        precio: req.body.precio,
        uni_9na: req.body.uni_9na,
        uni_pan: req.body.uni_pan,
        uni_sup: req.body.uni_sup
    }

    conecction.query(sql, productoObj, error => {
        if (error) throw error;
        res.send('Producto creado');

    });
});


// Editar un producto
app.put('/product/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, unidadmedida, tipo,
        idlinea, idcategoria, parte,
        precio, uni_9na, uni_pan,
        uni_sup } = req.body;


    const sql = `UPDATE productos SET 
        nombre = '${nombre}',
        unidadmedida = '${unidadmedida}',
        tipo = '${tipo}',
        idlinea = '${idlinea}',
        idcategoria = '${idcategoria}',
        parte = '${parte}',
        precio = '${precio}',
        uni_9na = '${uni_9na}',
        uni_pan = '${uni_pan}',
        uni_sup = '${uni_sup}'
        WHERE id = ${id}`;

    conecction.query(sql, error => {
        if (error) throw error;
        res.send('Producto actualizado');
    });
});


// Eliminar un producto
app.delete('/product/:id', (req, res) => {
    
    const {id } = req.params;
    const sql = `DELETE FROM productos WHERE id = ${id}`

    conecction.query(sql, error => {
        if (error) throw error;
        res.send('Producto eliminado');
    });
});


// MySQL
const conecction = mysql.createConnection({
    host: 'bfb5bwi7b8jjeybhkecs-mysql.services.clever-cloud.com',
    user: 'uiqbxvyd79n587lj',
    password: 'AQU6eUtz7hhXVAUdbZfx',
    database: 'bfb5bwi7b8jjeybhkecs'
});


conecction.connect(error => {
    if (error) throw error;
    console.log('Database server running!');
});


app.listen(PORT, () => console.log(`server running on port ${PORT}`));