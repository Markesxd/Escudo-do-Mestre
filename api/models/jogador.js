const connection = require('../database/connection');

class Jogador {

  add(jogador){
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO jogadores SET ?`;
      connection.query(sql, jogador, (error, results) => {
        if(error){
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
}

module.exports = new Jogador();
