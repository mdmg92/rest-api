'use strict';

var server = require('../../config/server')();
const axios = require('axios');

const url = "https://my-json-server.typicode.com/mdmg92/rest-api/posts/";


module.exports = { findAll, findById, create, destroy, update };

//GET /post
function findAll(req, res, next) {
  axios
    .get(url)
    .then(response => {
        res.json({ posts: response.data });
      })
      .catch(error => {
        res.status(404).json({ message: error.response.statusText });
      });
}

//POST /post
function create(req, res, next) {
  var post = req.body;

  // Como la aplicacion esta desarrollada con motivos de pruebas
  // se generan numeros aleatorios para el id del post y el usuario
  post.id     = Math.floor(Math.random() * (100 - 1) + 1);
  post.userId = Math.floor(Math.random() * (100 - 1) + 1);

  axios
    .post(url, post)
    .then(response => {
      // res.json({ success: response.data, description: "El post fue agregado exitosamente" });
      res.json(response.data);
    })
    .catch(error => {
        res.status(422).json({ message: error.response.statusText });
    });
}

//GET /posts/{id}
function findById(req, res, next) {
  var id = req.swagger.params.id.value;

  if (id) {
    axios
      .get(url + id)
      .then(response => {
        res.json(response.data);
      })
      .catch(error => {
        res.status(404).json({ message: error.response.statusText });
      });
  }
}

//PUT /posts/{id}
function update(req, res, next) {
  var id = req.swagger.params.id.value;

  var post = req.body;

  axios
    .put(url + id, post)
    .then(response => {
        res.json({ success: 1, description: "Post actualizado" });
      })
      .catch(error => {
        res.status(422).json({ message: error.response.statusText });
      });
}

//DELETE /posts/{id}
function destroy(req, res, next) {
  var id = req.swagger.params.id.value;

  axios
    .delete(url + id)
    .then(response => {
      res.json({ success: 1, description: "Post eliminado" });
    })
    .catch(error => {
      res.status(422).json({ message: error.response.statusText });
    });
}
