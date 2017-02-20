let express = require('express');
let app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(require('cookie-parser')());

app.listen(3000, () => console.log('Server started'))
let {getObject, getToken} = require('./index.js');
let parser = require('body-parser').urlencoded({extended: false});

app.get('/', (req, res) => {
  res.cookie('token', 'da dang nhap');
  res.send('Hello');
});

app.get('/show', (req, res) => {
  console.log(req.cookies);
  res.send('xong');
});

app.get('/vaorap', (req, res) => {
  let token = req.cookies.t;
  getObject(token, (err, decoded) => {
    if(err) return res.send('Ban phai mua ve');
    if(decoded.daMuaVe === true) return res.send('Moi ban xem phim');
    res.send('Ban phai mua ve');
  })
})

app.get('/muave', (req, res) => {
  //Bam 1 cai token
  let token = getToken({daMuaVe: true});
  res.cookie('t', token);
  res.send('Ban da mua ve');
})

app.get('/giaodich', (req, res) => {
  getObject(req.cookies.token, (err, decoded) => {
    if(err) return res.send(err + '' + 'Ban can dang nhap');
    res.send('Chao ban ' + decoded.username);
  });
});

app.get('/dangnhap', (req, res) => {
  res.render('dangnhap');
});

app.post('/xulydangnhap', parser, (req, res) => {
  let {username, password} = req.body;
  if(username === 'pho' && password === '123') {
    let obj = {daDangNhap: true, username: username};
    res.cookie('token', getToken(obj));
    return res.send('Ban da dang nhap');
  }
  res.send('Sai thong tin dang nhap');
});
