const mysql = require('mysql');
const connection = mysql.createConnection({
    connectionLimit: 10,
    host: '192.168.64.2',
    user: 'root',
    password: '',
    database: 'jplata'
});

connection.connect((err) => {
    if (err) {
        console.log('Error conectando la base de datos', err.stack);
        return;
    }

    console.log('Conexion exitosa a la base de datos!')
});

const Query =  async(query) => {
    return new Promise((resolve, reject)=>{

        connection.query(query, function (error, results, fields) {
            if (error) reject(error);
                
            resolve(results);
          });
    })
}

module.exports = Query;