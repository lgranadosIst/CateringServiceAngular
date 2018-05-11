'use strict';
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var ClientesRsrc = require(__base + 'server/infrastructure/resources').cliente;

function getCliente(id) {
    var result;
    console.log('get Cliente by ' + id);
    try {
        if(id){
            result = await (ClientesRsrc.getCliente(id));
        } else {
            result = await (ClientesRsrc.getClientes());
        }
        //console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { cliente: result };
}

function updateCliente(cliente) {
    var result;
    console.log('update Cliente by ' + cliente._id);
    try {
        result = await (ClientesRsrc.updateCliente(cliente));
        //console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { cliente: result };
}

function deleteCliente(id) {
    var result;
    console.log('delete Cliente by ' + id);
    try {
        result = await (ClientesRsrc.deleteCliente(id));
        //console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { cliente: result };
}

function postCliente(cliente) {
    var result;
    console.log('post Cliente service');
    try {
        result = await (ClientesRsrc.addCliente(cliente));
       //console.log('result length ' + result.length);    
    } catch(error) {
        throw error;
    }
    return { cliente: result };
}

module.exports.getCliente = async(getCliente);
module.exports.updateCliente = async(updateCliente);
module.exports.deleteCliente = async(deleteCliente);
module.exports.postCliente = async(postCliente);