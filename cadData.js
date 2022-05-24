const db = require('../infra/db.js')

exports.saveCadastro = function(cad){
    return db.one('insert into ti2.usuario (nome, departamento, cpf, email, telefone) values ($1, $2, $3, $4, $5) returning *', [cad.nome, cad.departamento, cad.cpf, cad.email, cad.telefone])
}

exports.readCadastro = function(){
    return db.query('select id, nome, departamento, cpf, email, telefone from ti2.usuario order by id asc')
}

exports.updateCadastro = function(id, cad){
    return db.none('update ti2.usuario set nome = $1, departamento = $2, cpf = $3, email = $4, telefone = $5 where id = $6', [cad.nome, cad.departamento, cad.cpf, cad.email, cad.telefone, id])
}

exports.deleteCadastro = function(id){
    return db.none('delete from ti2.usuario where id = $1', [id])
}