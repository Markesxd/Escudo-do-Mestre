const connection = require('../database/connection');

class Jogador {

  add(jogador){
    console.log(jogador)
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO jogadores SET ?`;
      connection.query(sql, jogador, (error, results) => {
        if(error){
          console.log(error);
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  get(param){
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM jogadores WHERE ?`;
      connection.query(sql, param, (error, results) => {
        if(error){
          reject(error);
        } else {
          resolve(results);
        }
      })
    })
  }

  mesa(mesa){
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM jogadores WHERE mesa=${mesa}`;
      connection.query(sql, null, (error, results) => {
        if(error){
          console.log(error);
          reject(error);
        } else {
          resolve(results);
        }
      })
    })
  }

  patch(id, fields){
    return new Promise((resolve, reject) => {
      const sql = `UPDATE jogadores set ? WHERE id=${id}`;
      connection.query(sql, fields, (error, results) => {
        if(error){
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  delete(id){
    return new Promise((resolve, reject) => {
      const sql = `DELETE from jogadores WHERE id=${id}`;
      connection.query(sql, null, (error, results) => {
        if(error){
          console.log(error);
          reject(error);
        } else {
          resolve(results);
        }
      })
    });
  }
}

module.exports = new Jogador();
