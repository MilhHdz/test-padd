const request = require('request');


const getSelect2 = (req, res) => {
    const { tipo } = req.params;
    url = 'https://ecommerce.sagaji.com.mx/sagaji/MVC?id=CategoriaProductos&tipo=' + tipo;

    request(url, function (error, response, body) {
        res.json(JSON.parse(body));
    })
}


const getSelect3 = (req, res) => {
    const { tipo, primera } = req.params;
    url = 'https://ecommerce.sagaji.com.mx/sagaji/MVC?id=CategoriaProductos&tipo=' + tipo
        + '&primera=' + primera;

    request(url, function (error, response, body) {
        res.json(JSON.parse(body));
    })

}


const getSelect4 = (req, res) => {
    const { tipo, primera, segunda } = req.params;
    url = 'https://ecommerce.sagaji.com.mx/sagaji/MVC?id=CategoriaProductos&tipo=' + tipo
        + '&primera=' + primera + '&segunda=' + segunda;

    request(url, function (error, response, body) {
        res.json(JSON.parse(body));
    })

}


const searchProduct = (req, res) => {
    const { tipo, primera, segunda, tercera, pagina } = req.params;
    url = 'https://ecommerce.sagaji.com.mx/sagaji/MVC?id=BusquedaProductosCategoria&tipo=' + tipo
        + '&primera=' + primera + '&segunda=' + segunda
        + '&tercera=' + tercera
        + '&cuarta=&pagina=' + pagina;

    request(url, function (error, response, body) {
        res.json(JSON.parse(body));
    })

}


const getAplications = (req, res) => {
    const { clproducto } = req.params;
    url = 'https://ecommerce.sagaji.com.mx/sagaji/MVC?id=Aplicaciones&clproducto=' + clproducto;

    request(url,
        function (error, response, body) {
            res.json(JSON.parse(body));
        });
}


const getEquivalences = (req, res) => {
    const { clproducto } = req.params;
    url = 'https://ecommerce.sagaji.com.mx/sagaji/MVC?id=ProductosEquivalentes&clproducto=' + clproducto;

    request(url,
        function (error, response, body) {
            res.json(JSON.parse(body));
        });
}


module.exports = {
    getSelect2,
    getSelect3,
    getSelect4,
    searchProduct,
    getAplications,
    getEquivalences
}