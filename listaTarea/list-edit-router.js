const express = require("express");
const listEditRouter = express.Router();
const funTareasEditar = require("./listaTareas.js");

listEditRouter.post("/crear", (req, res) => {
  const nuevaTarea = req.body;
  if (!nuevaTarea || !nuevaTarea.descripcion) {
      res.status(400).json({ message: "Datos de tarea no válidos" });
  } else {
      funTareasEditar.crearTarea(nuevaTarea);
      res.status(200).json({
          message: "La tarea ha sido creada",
          data: nuevaTarea,
      });
  }
});

listEditRouter.delete("/borrar/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
      res.status(400).json({ message: "ID de tarea no válido" });
  } else {
      const tareaExistente = funTareasEditar.buscarTareaPorId(id);
      if (tareaExistente) {
          funTareasEditar.eliminarTarea(id);
          res.json({
              message: `La tarea con ID ${id} ha sido eliminada`,
          });
      } else {
          res.status(404).json({ message: `La tarea con ID ${id} no 
          existe` });
      }
  }
});

listEditRouter.put("/actualizar/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
      res.status(400).json({ message: "ID de tarea no válido" });
  } else {
      const tareaExistente = funTareasEditar.buscarTareaPorId(id);
      if (tareaExistente) {
          const resultado = funTareasEditar.actualizarTarea(id, req.body);
          if (resultado) {
              res.status(200).json({
                  message: `La tarea con ID ${id} fue editada 
                  exitosamente`,
              });
          } else {
              res.status(500).json({ message: "Error al editar la tarea" });
          }
      } else {
          res.status(404).json({ message: `La tarea con ID ${id} no 
          existe` });
      }
  }
});


module.exports = listEditRouter;