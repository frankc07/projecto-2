const express = require("express");
const listViewRouter = express.Router();
const funTareas = require("./listaTareas.js");

listViewRouter.get("/", (req, res) => {
    const tareasCompletas = funTareas.imprimirTareasCompletas();
    if (tareasCompletas.length === 0) {
    res.status(404).json({ message: "No hay tareas completas" });
    } else {
    res.json(tareasCompletas);
    }
});

listViewRouter.get("/buscar/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
    res.status(400).json({ message: "ID de tarea no válido" });
    } else {
    const tareaEncontrada = funTareas.buscarTareaPorId(id);
    if (!tareaEncontrada) {
    res.status(404).json({
        message: `La tarea con ID ${id} no existe`,
    });
    } else {
    res.json(tareaEncontrada);
    }
}
});

listViewRouter.get("/completas", (req, res) => {
    const tareasCompletas = funTareas.verListaDetareasCompletas();
    if (tareasCompletas.length === 0) {
    res.status(404).json({ message: "No hay tareas completas" });
    } else {
    res.json(tareasCompletas);
}
});

listViewRouter.get("/incompletas", (req, res) => {
    const tareasIncompletas = funTareas.verListaDetareasIncompletas();
    if (tareasIncompletas.length === 0) {
    res.status(404).json({ message: "No hay tareas incompletas" });
} else {
    res.json(tareasIncompletas);
}
});

list-view-router.get("/:id", (req, res) => {
    const id = req.validId;
});

module.exports = listViewRouter;
