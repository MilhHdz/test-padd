const connection = require('./../../../conexcionDB');


const getAllCliente = (req, res) => {
    const { sucursal } = req.params
    const sql = 'SELECT * FROM cliente' + sucursal + ' WHERE eliminado = false';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        else if (results.length > 0) res.json({'code':200, 'result':results});
        else res.json({'code':404, 'result':'No hay resultados'});
    });
}


const getCliente = (req, res) => {
    const { id, sucursal } = req.params
    const sql = `SELECT * FROM cliente${sucursal} WHERE id = ${id}`;

    connection.query(sql, (error, results) => {
        if (error) throw error;
        else if (results.length > 0) res.json({'code':200, 'result':results});
        else res.json({'code':404, 'result':'No hay resultados'});
    });
}


const saveCliente = (req, res) => {
    const { sucursal } = req.params
    const sql = 'INSERT INTO cliente' + sucursal+ ' SET ?';

    const clienteObj = {
        nombre: req.body.nombre,
        ape_pat: req.body.ape_pat,
        ape_mat: req.body.ape_mat,
        telefono: req.body.telefono,
        correo: req.body.correo
    }

    connection.query(sql, clienteObj, (error, results) => {
        if (error) res.json({'code':500, 'message':error});
        else res.json({'code':200, 'result':results.insertId, 'message':'Cliente creado'});
    });
}


const updateCliente = (req, res) => {
    const { id, sucursal } = req.params;
    const { nombre, ape_pat, ape_mat,
        telefono, correo } = req.body;

    const sql = `UPDATE cliente${sucursal} SET
        nombre = '${nombre}',
        ape_pat = '${ape_pat}',
        ape_mat = '${ape_mat}',
        telefono = '${telefono}',
        correo = '${correo}'
        WHERE id = ${id}`;

    connection.query(sql, error => {
        if (error) res.json({'code':500, 'message':error});
        else res.json({'code':200, 'message':'Cliente actualizado'});
    });
}


const deleteCliente = (req, res) => {
    
    const { id, sucursal } = req.params;
    const sql = `DELETE FROM cliente${sucursal} WHERE id = ${id}`

    connection.query(sql, error => {
        if (error) res.json({'code':500, 'message':error});
        else res.json({'code':200, 'message':'Cliente eliminado'});
    });
}

module.exports = {
    getAllCliente,
    getCliente,
    saveCliente,
    updateCliente,
    deleteCliente
}