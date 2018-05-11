'use strict';
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var PlatillosRsrc = require(__base + 'server/infrastructure/resources').platillo;

function getPlatillo(id) {
    var result;
    console.log('get platillo by ' + id);
    try {
    	if(id){
        	result = await (PlatillosRsrc.getPlatillo(id));
        } else {
        	result = await (PlatillosRsrc.getPlatillos());
        }   
    } catch(error) {
        throw error;
    }
    return { platillo: result };
}

function updatePlatillo(platillo) {
    var result;
    console.log('update platillo by ' + platillo._id);
    try {
        result = await (PlatillosRsrc.updatePlatillo(platillo));
    } catch(error) {
        throw error;
    }
    return { platillo: result };
}

function deletePlatillo(id) {
    var result;
    console.log('delete platillo by ' + id);
    try {
        result = await (PlatillosRsrc.deletePlatillo(id));
    } catch(error) {
        throw error;
    }
    return { platillo: result };
}

function postPlatillo(platillo) {
    var result;
    console.log('post platillo');
    try {
        result = await (PlatillosRsrc.addPlatillo(platillo));
    } catch(error) {
        throw error;
    }
    return { platillo: result };
}

module.exports.getPlatillo = async(getPlatillo);
module.exports.updatePlatillo = async(updatePlatillo);
module.exports.deletePlatillo = async(deletePlatillo);
module.exports.postPlatillo = async(postPlatillo);