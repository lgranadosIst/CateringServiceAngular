var async = require('asyncawait/async');
var await = require('asyncawait/await');
var clienteModel = require(__base + 'server/model/cliente');

function getClientes() {
    var clientes = await(clienteModel.find({}));
    return clientes;
}

function getCliente(id) {
    var cliente = await(clienteModel.findOne({_id:id}));
    return cliente;
}

function deleteCliente(id) {
    console.log('Delete cliente',id);
    var cliente = await(clienteModel.remove({_id:id}));
    return cliente;
}

function updateCliente(clienteParam) {
    var cliente = await(clienteModel.update({_id:clienteParam._id},clienteParam));
    return cliente;
}

function addCliente(clienteParam) {
    var cliente = await(clienteModel.create(clienteParam));
    return cliente;
}

module.exports = {
    getClientes: async(getClientes),
    getCliente: async(getCliente),
    deleteCliente: async(deleteCliente),
    updateCliente: async(updateCliente),
    addCliente: async(addCliente)
};