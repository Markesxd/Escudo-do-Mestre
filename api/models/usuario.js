const connection = require('../database/connection');

class Usuario{

  login(info){
    const sql = `SELECT id FROM usuario WHERE login="${info.login}" AND senha="${info.password}"`;
    return new Promise ((resolve, reject) => {
      connection.query(sql,null, (error, results) => {
        if(error){
          reject(error);
        } else {
          if(results.length == 0) {
            resolve({message: 'usuario ou senha não existem', id: false});
          } else {
            resolve({message: 'login feito com sucesso', id: results[0].id});
          }
        }
      });
    })
  }

  singin(usuario){
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO usuario SET ?`;
      connection.query(sql, usuario, (error, results) =>{
        if(error){
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

}
module.exports = new Usuario();
