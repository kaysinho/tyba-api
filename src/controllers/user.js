const userModel = require('../models/user')
const UserController = {

    login: async (user) => {
        return new Promise((resolve, reject) => {

            userModel.search(user)
                .then((data) => {
                    resolve(data);
                },
                    err => {
                        reject(err);
                    });

        });
    },
    signIn: async (user) => {
        return new Promise((resolve, reject) => {

            userModel.save(user)
                .then((data) => {
                    resolve({ state: 'success' });
                },
                    err => {
                        reject(err);
                    });

        });
    }
}

module.exports = UserController;