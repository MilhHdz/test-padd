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
        else res.json({'mensaje':'No hay resulltados'})
    });
});


// Obtener un producto
app.get('/product/:id', (req, res) => {
    const { id } = req.params
    const sql = `SELECT * FROM productos WHERE id = ${id}`;

    conecction.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) res.json(results);
        else res.json({'mensaje':'No hay resulltados'})
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
        res.json({'mensaje':'Producto creado'});

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
        res.json({'mensaje':'Producto actualizado'});
    });
});


// Eliminar un producto
app.delete('/product/:id', (req, res) => {
    
    const {id } = req.params;
    const sql = `DELETE FROM productos WHERE id = ${id}`

    conecction.query(sql, error => {
        if (error) throw error;
        res.json({'mensaje':'Producto eliminado'});
    });
});

// mysql://b443f318a9f91e:46259865@us-cdbr-east-03.cleardb.com/heroku_4bd69bbb2cbb271?reconnect=true

// MySQL
const conecction = mysql.createPool({
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'b443f318a9f91e',
    database: 'heroku_4bd69bbb2cbb271',
    password: '46259865'
});

conecction.query('select 1 + 1', (err, rows) => { /* */});


// conecction. (error => {
//     if (error) throw error;
//     console.log('Database server running!');
// });


app.listen(PORT, () => console.log(`server running on port ${PORT}`));