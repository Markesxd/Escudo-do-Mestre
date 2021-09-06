const connection = require('../database/connection');

class Mesa{
    add(mesa){
      return new Promise((resolve, reject) => {
        const sql = `INSERT INTO mesas SET ?`;
        connection.query(sql, mesa, (error, results) => {
          if(error){
            reject(error);
          } else{
            resolve(results);
          }
        });
      })
    }

    get(){
      return new Promise((resolve, reject) => {
        const sql = `Select * from mesas`;
        connection.query(sql, null, (error, results) => {
            if(error){
              reject(error);
            } else{
              resolve(results);
            }
        });
      });
    }
}

module.exports = new Mesa();
