let jwt = require('jsonwebtoken');

let obj = {name: 'Pho', age: 18};
const SECRET_KEY = '7e32nsjdg379de3efi';

let token = jwt.sign(obj, SECRET_KEY, {expiresIn: 10});
console.log(token);
