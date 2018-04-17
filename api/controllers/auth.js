const jwt  = require('jsonwebtoken');
const authHelper = require('../helpers/auth');

module.exports = { auth }

function auth(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  var token = authHelper.getToken(username,  password);
  if (token) {
    res.json({ success: true, message: 'Acceso Permitido', token: token });
  } else {
    res.status(403).json({ message: "Error: Credenciales incorrectas"})
  }
}
