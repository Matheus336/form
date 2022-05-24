const data = require('../data/cadData.js')

exports.saveCadastro = function(cad){
    return data.saveCadastro(cad)
}

exports.readCadastro = function(){
    return data.readCadastro()
}

exports.updateCadastro = function(id, cad){
    return data.updateCadastro(id, cad)
}

exports.deleteCadastro = function(id){
    return data.deleteCadastro(id)
}