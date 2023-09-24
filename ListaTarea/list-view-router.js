const express = require("express");
const listViewRouter = express.Router();
const funTareas = require("./listaTareas.js");

listViewRouter.get("/", (req, res) => {
  res.json(funTareas.imprimirTareasCompletas());
});

listViewRouter.get("/buscar/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(funTareas.buscarTareaPorId(id));
});

listViewRouter.get("/completas", (req, res) => {
  res.json(funcTareas.verListaDetareasCompletas());
});

listViewRouter.get("/incompletas", (req, res) => {
  res.json(funTareas.verListaDetareasIncompletas());
});

module.exports = listViewRouter;