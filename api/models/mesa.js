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

    get(mestre){
      return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM mesas WHERE mestre=${mestre}`;
        connection.query(sql, null, (error, results) => {
            if(error){
              console.log(error);
              reject(error);
            } else{
              resolve(results);
            }
        });
      });
    }

    getById(id){
      return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM mesas WHERE id=${id}`;
        connection.query(sql, null, (error, results) =>{
          if(error) {
            reject(error);
          } else {
            resolve(results[0]);
          }
        })
      })
    }

    delete(id){
      return new Promise((resolve, reject) => {
        const sql = `DELETE from mesas WHERE id=${id}`;
        connection.query(sql, null, (error, results) => {
          if(error){
            reject(error);
          } else {
            resolve(results);
          }
        });
      })
    }

    patch(id, fields){
      return new Promise((resolve, reject) => {
        const sql = `UPDATE mesas set ? WHERE id=${id}`;
        connection.query(sql, fields, (error, results) => {
          if(error){
            console.log(error)
            reject(error);
          } else{
            resolve(results);
          }
        });
      });
    }
}

module.exports = new Mesa();
