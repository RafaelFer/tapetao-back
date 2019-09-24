function AtletaDao(connection) {
    this._connection = connection;
}

AtletaDao.prototype.salva = function(atleta,callback) {
    this._connection.query('INSERT INTO atletas SET ?', atleta, callback);
}

AtletaDao.prototype.atualiza = function(pagamento,callback) {
    this._connection.query('UPDATE atletas SET status = ? where id = ?', [atleta.status, atleta.id], callback);
}

AtletaDao.prototype.lista = function(callback) {
    this._connection.query('select * from atletas',callback);
}

AtletaDao.prototype.buscaPorId = function (id,callback) {
    this._connection.query("select * from atletas where id = ?",[id],callback);
}

module.exports = function(){
    return AtletaDao;
};
