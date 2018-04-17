'use strict';

const jwt  = require('jsonwebtoken');

const API_USER     = 'user';
const API_PASSWORD = 'password';
const API_SECRET   = 'secret';
const API_ISSUER   = "mdmg.rest.api";

exports.verifyToken = function (req, authOrSecDef, token, callback) {
  function sendError() {
    return req.res.status(403).json({ message: 'Error: Access Denied' });
  }

  if (token && token.indexOf("Bearer") === 0) {
    var tokenString = token.split(' ')[1];

    jwt.verify(tokenString, API_SECRET, function (verificationError, decodedToken) {
      if (verificationError === null) {
        if (API_USER !== decodedToken.username) {
          return callback(sendError());
        }

        req.auth = decodedToken;
        return callback(null);
      } else {
        return callback(sendError());
      }
    })
  } else {
    return callback(sendError());
  }
}

exports.getToken = function (username, password) {
  var token = null;

  if (username === API_USER && password === API_PASSWORD) {
    token = jwt.sign({ username: username, iss: API_ISSUER }, API_SECRET);
  }

  return token;
}
