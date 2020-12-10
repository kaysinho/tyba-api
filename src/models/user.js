const tableName = "users";
const mysql = require('../mysql/mysql')
const UserModel =  {

    save : async (user)=> {
        return new Promise((resolve, reject) => {

            const query = `INSERT INTO ${tableName} SET ?`;

            mysql.insert(query, user)
                .then((data) => {
                    resolve({ state: 'success' });
                },
                err => {
                    reject(err);
                });

        });
    },
    search : async (user)=> {

        return new Promise((resolve, reject) => {

            const query = `SELECT name, email FROM ${tableName} WHERE email='${user.email}' AND password='${user.password}'`;
            console.log(query)

            mysql.search(query)
                .then((data) => {
                    resolve(data);
                },
                err => {
                    reject(err);
                });

        });
    }
}

module.exports = UserModel;