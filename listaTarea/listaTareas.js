let listaTareas = [
  { id: 1, descripcion: "limpiar", completada: false },
  { id: 2, descripcion: "cocinar", completada: false },
  { id: 3, descripcion: "programar", completada: false },
];

function crearTarea(nuevaTarea) {
  if (!nuevaTarea || !nuevaTarea.descripcion) {
      return "La tarea no es válida";
  }

  nuevaTarea.id = listaTareas.length + 1;
  nuevaTarea.completada = false;
  listaTareas.push(nuevaTarea);
  return "Tarea creada exitosamente";
}

function buscarTareaPorId(id) {
  if (!id) {
      return "ID de tarea no válido";
  }

  const tareaBuscada = listaTareas.find((tarea) => tarea.id === id);
  if (!tareaBuscada) {
      return `La tarea con ID ${id} no existe`;
  }
  return tareaBuscada;
}

function verListaDeTareasCompletas() {
  const completadas = listaTareas.filter((tarea) => tarea.completada === true);
  if (completadas.length === 0) {
      return "No hay tareas completadas";
  }
  const resultado = completadas.map(
      (tarea) =>
      `Tarea completada: ID ${tarea.id} Descripción ${tarea.descripcion}`
  );
  return resultado;
}

function verListaDeTareasIncompletas() {
  const incompletas = listaTareas.filter((tarea) => tarea.completada === false);
  if (incompletas.length === 0) {
      return "No hay tareas incompletas";
  }
  const resultado = incompletas.map(
      (tarea) =>
      `Tarea incompleta: ID ${tarea.id} Descripción ${tarea.descripcion}`
  );
  return resultado;
}

function eliminarTarea(tareaId) {
  if (!tareaId) {
      return "ID de tarea no válido";
  }

  const index = listaTareas.findIndex((tarea) => tarea.id === tareaId);
  if (index !== -1) {
      listaTareas.splice(index, 1);
      return `Tarea con ID ${tareaId} eliminada exitosamente`;
  } else {
      return `La tarea con ID ${tareaId} no existe`;
  }
}

function actualizarTarea(id, nuevaTarea) {
  if (!id || !nuevaTarea || !nuevaTarea.descripcion) {
      return "ID de tarea o tarea no válidos";
  }

  const index = listaTareas.findIndex((tarea) => tarea.id === id);
  if (index !== -1) {
      listaTareas[index] = { ...listaTareas[index], ...nuevaTarea };
      return `Tarea con ID ${id} actualizada exitosamente`;
  } else {
      return `La tarea con ID ${id} no existe`;
  }
}

function imprimirTareasCompletas() {
  return listaTareas;
}

  
  module.exports = {
    verListaDeTareasCompletas,verListaDeTareasIncompletas,crearTarea,eliminarTarea,
    actualizarTarea,imprimirTareasCompletas,buscarTareaPorId,
  };