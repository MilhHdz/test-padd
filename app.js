const bodyParser = require('body-parser');
const express = require('express');
const conecction = require('./conexcionDB');
const cors = require('cors');

// Peticiones
const productos = require('./Routes/Productos');
const categorias = require('./Routes/Categorias');
const armadoras = require('./Routes/Armadoras');
const lineas = require('./Routes/Lineas');
const clientes = require('./Routes/Clientes');
const proveedores = require('./Routes/Proveedor');
const facturas = require('./Routes/Facturas');
const sagaji = require('./Routes/Sagaji');
const modelos = require('./Routes/Modelos');
const descripcion = require('./Routes/Descripcion');
const produc_coti = require('./Routes/ProductosCotizados');
const cotizacion = require('./Routes/Cotizaciones');


const PORT = process.env.PORT || 3050;

const app = express();

app.use(cors(), bodyParser.json());

// Rutas
app.get('/', (req, res) => {
    res.send('Welcome');
});


// PRODUCTOS
app.get('/product/', productos.getAllProducts);
app.get('/product/:id', productos.getProduct);
app.post('/product/', productos.saveProduct);
app.put('/product/:id', productos.updateProduct);
app.delete('/product/:id', productos.deleteProduct);


// CATEGORIAS
app.get('/category/', categorias.getAllCategories);
app.get('/category/:id', categorias.getCategory);
app.post('/category/', categorias.saveCategory);
app.put('/category/:id', categorias.updateCategory);
app.delete('/category/:id', categorias.deleteCategory);


// ARMADORAS
app.get('/armadora/', armadoras.getAllArmadora);
app.get('/armadora/:id', armadoras.getArmadora);
app.post('/armadora/', armadoras.saveArmadora);
app.put('/armadora/:id', armadoras.updateArmadora);
app.delete('/armadora/:id', armadoras.deleteArmadora);


// LINEAS
app.get('/linea/', lineas.getAllLinea);
app.get('/linea/:id', lineas.getLinea);
app.post('/linea/', lineas.saveLinea);
app.put('/linea/:id', lineas.updateLinea);
app.delete('/linea/:id', lineas.deleteLinea);


// CLIENTES
app.get('/cliente/', clientes.getAllCliente);
app.get('/cliente/:id', clientes.getCliente);
app.post('/cliente/', clientes.saveCliente);
app.put('/cliente/:id', clientes.updateCliente);
app.delete('/cliente/:id', clientes.deleteCliente);


// PROVEEDORES
app.get('/proveedor/', proveedores.getAllProveedor);
app.get('/proveedor/:id', proveedores.getProveedor);
app.post('/proveedor/', proveedores.saveProveedor);
app.put('/proveedor/:id', proveedores.updateProveedor);
app.delete('/proveedor/:id', proveedores.deleteProveedor);


// FACTURAS
app.get('/factura/', facturas.getAllFactura);
app.get('/factura/:id', facturas.getFactura);
app.post('/factura/', facturas.saveFactura);
app.put('/factura/:id', facturas.updateFactura);
app.delete('/factura/:id', facturas.deleteFactura);


// PRODUCTO COTIZADO
app.get('/producto-cotizado/', produc_coti.getAllProductoCotizado);
app.get('/producto-cotizado/:id', produc_coti.getProductoCotizado);
app.post('/producto-cotizado', produc_coti.saveProducto);
app.put('/producto-cotizado/:id', produc_coti.updateProductoCotizado);
app.delete('/producto-cotizado/:id', produc_coti.deleteProductoCotizado);


// COTIZACION
app.get('/cotizacion/', cotizacion.getAllCotizaciones);
app.get('/cotizacion/:id', cotizacion.getCotizaciones);
app.post('/cotizacion', cotizacion.saveCotizaciones);
app.put('/cotizacion/:id', cotizacion.updateCotizaciones);
app.delete('/cotizacion/:id', cotizacion.deleteCotizaciones);


// MODELOS
app.get('/modelo/', modelos.getAllModelos);


// DESCRIPCION
app.get('/descripcion/', descripcion.getAllDescription);


// SAGAJI
app.get('/sagaji/:tipo', sagaji.getSelect2);
app.get('/sagaji/:tipo/:primera', sagaji.getSelect3);
app.get('/sagaji/:tipo/:primera/:segunda', sagaji.getSelect4);
app.get('/sagaji/:tipo/:primera/:segunda/:tercera/:pagina', sagaji.searchProduct);


app.get('/aplicaciones/:clproducto', sagaji.getAplications);
app.get('/equivalentes/:clproducto', sagaji.getEquivalences);


// mysql://b443f318a9f91e:46259865@us-cdbr-east-03.cleardb.com/heroku_4bd69bbb2cbb271?reconnect=true

conecction.query('select 1 + 1', (err, rows) => { /* */ });


app.listen(PORT, () => console.log(`server running on port ${PORT}`));