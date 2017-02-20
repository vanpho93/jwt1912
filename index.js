let jwt = require('jsonwebtoken');

let obj = {name: 'Pho', age: 18};
const SECRET_KEY = '7e32nsjdg379de3efi';

jwt.verify(token, '3455', (err, decoded) => {
  if (err) return console.log(err);
  console.log(decoded);
});

let getToken = (obj) => jwt.sign(obj, SECRET_KEY, {expiresIn: 3});
