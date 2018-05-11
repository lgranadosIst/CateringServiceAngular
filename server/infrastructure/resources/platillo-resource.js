var async = require('asyncawait/async');
var await = require('asyncawait/await');
var platilloModel = require(__base + 'server/model/platillo');

function getPlatillos() {
    var platillos = await(platilloModel.find({}));
    return platillos;
}

function getPlatillo(id) {
    var platillo = await(platilloModel.findOne({_id:id}));
    return platillo;
}

function deletePlatillo(id) {
    var platillo = await(platilloModel.remove({_id:id}));
    return platillo;
}

function updatePlatillo(platilloParam) {
    var platillo = await(platilloModel.update({_id:platilloParam._id},platilloParam));
    return platillo;
}

function addPlatillo(platilloParam) {
    var platillo = await(platilloModel.create(platilloParam));
    return platillo;
}

module.exports = {
    getPlatillos: async(getPlatillos),
    getPlatillo: async(getPlatillo),
    deletePlatillo: async(deletePlatillo),
    updatePlatillo: async(updatePlatillo),
    addPlatillo: async(addPlatillo)
};