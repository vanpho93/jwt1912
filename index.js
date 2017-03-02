let jwt = require('jsonwebtoken');

let obj = {name: 'Pho', age: 18};
const SECRET_KEY = '7e32nsjdg379de3efi';

let getObject = (token, cb) => {
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return cb(err);
    return cb(undefined, decoded);
  });
}

let getToken = obj => jwt.sign(obj, SECRET_KEY, {expiresIn: 10000000});

let token1 = getToken(obj);

getObject(token1, (err, decoded) => {
  if(err) return console.log(err + '');
  console.log(decoded);
});

//pho 123
//chao ban + username

module.exports = {getToken, getObject};
