let {getToken, getObject} = require('./index.js');
// console.log(getToken({name: 'Pho'}))
let jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9leGFtcGxlLm9yZyIsImF1ZCI6Imh0dHA6XC9cL2V4YW1wbGUuY29tIiwiaWF0IjoxMzU2OTk5NTI0LCJuYmYiOjEzNTcwMDAwMDB9._Zwnra_oPlbKEpL0LThSR1dmCfbbDVcKwgO94S5qXDs'
getObject(jwt, (err, res) => {
    if(err) return console.log(err + '');
    console.log(res);
})