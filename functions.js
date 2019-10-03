const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    divide: (num1, num2) => num1 / num2,
    createUser: () => {
        return {
            firstName: 'Jessica',
            lastName: 'White'
        }
    },
    fetchUser: () => {
        return axios.get('https://jsonplaceholder.typicode.com/users/2')
            .then(res => res.data)
            .catch(err => console.log(err))
    }
}

module.exports = functions;