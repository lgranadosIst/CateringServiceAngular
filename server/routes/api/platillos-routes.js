'use strict';
var await = require('asyncawait/await');
var async = require('asyncawait/async');
var handlers = require(__base + 'server/routes/router-handlers');
var service = require(__base + 'server/services');
var routes = require('express').Router();


function getPlatillos(request, response) {
    console.log('GET platillo',request.params.id);
    var result;
    try {
        result = await (service.platillosService.getPlatillo(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
    	console.log('error',error);
        return handlers.errorResponseHandler(response, error);
    }
}

function deletePlatillos(request, response) {
    console.log('DELETE platillo');
    var result;
    try {
        result = await (service.platillosService.deletePlatillo(request.params.id));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function updatePlatillos(request, response) {
    console.log('UPDATE platillo');
    var result;
    try {
        result = await (service.platillosService.updatePlatillo(request.body.platillo));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        return handlers.errorResponseHandler(response, error);
    }
}

function postPlatillos(request, response) {
    console.log('POST platillo');
    var result;
    try {
        result = await (service.platillosService.postPlatillo(request.body.platillo));
        return handlers.successResponseHandler(response, result);
    } catch (error) {
        if(error.code === 11000){
            return handlers.validationErrorHandler(response, error);
        }
        return handlers.errorResponseHandler(response, error);
    }
}

routes.get('/:id', async(getPlatillos));
routes.get('/', async(getPlatillos));
routes.delete('/:id', async(deletePlatillos));
routes.put('/:id', async(updatePlatillos));
routes.post('/', async(postPlatillos));

module.exports = routes;