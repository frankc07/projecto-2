const express = require("express");
const listEditRouter = express.Router();
const funTareasEditar = require("./listaTareas.js");

listEditRouter.post("/crear", (req, res) => {
  funTareasEditar.crearTarea(req.body);
  res.json({
    status: 200,
    message: "La tarea ha sido creada",
    data: req.body,
  });
});

listEditRouter.delete("/borrar/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const tareaExistente = funTareasEditar.buscarTareaPorId(id);
  if (tareaExistente) {
    funTareasEditar.eliminarTarea(id);
    res.json({
      message: `la tarea con id ${id} ha sido eliminada`,
    });
  }
});

listEditRouter.put("/actualizar/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const ExisteTarea = funTareasEditar.buscarTareaPorId(id);
  if (ExisteTarea) {
    funTareasEditar.actualizarTarea(id, req.body);
    res.json({
      status: 200,
      message: `la tarea con id ${req.params.id} fue editada exitosamente`,
    });
  }
});


module.exports = listEditRouter;