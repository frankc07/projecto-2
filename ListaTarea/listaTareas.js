let listaTareas = [
    { id: 1, descripcion: "limpiar", completada: false },
    { id: 2, descripcion: "cocinar", completada: false },
    { id: 3, descripcion: "programar", completada: false },
  ];
  
  function crearTarea(nuevaTarea) {
    listaTareas.push(nuevaTarea);
  }
  
  function buscarTareaPorId(id) {
    const tareaBuscada = listaTareas.find((tarea) => tarea.id === id);
    if (!tareaBuscada) {
      return `la tarea con id ${id} no existe`;
    }
    return tareaBuscada;
  }
  
  function verListaDetareasCompletas() {
    const completadas = listaTareas.filter((tarea) => tarea.completada === true);
    if (completadas.length === 0) {
      return "No hay resultado para tu busqueda";
    }
    const resultado = completadas.map(
      (tarea) =>
        `tarea completada: ID ${tarea.id} Descripcion ${tarea.descripcion}`
    );
    return resultado;
  }
  
  function verListaDetareasIncompletas() {
    const incompletas = listaTareas.filter((tarea) => tarea.completada === false);
    if (incompletas.length === 0) {
      return "No hay resultado para tu busqueda";
    }
    const resultado = incompletas.map(
      (tarea) =>
        `Tareas incompletas: ID ${tarea.id} Descripcion ${tarea.descripcion}`
    );
    return resultado;
  }
  
  function eliminarTarea(tareaId) {
    let nuevasTareas = listaTareas.filter((tarea) => tarea.id !== tareaId);
    listaTareas = nuevasTareas;
  }
  
  function actualizarTarea(id, nuevaTarea) {
    const index = listaTareas.findIndex((listaTareas) => listaTareas.id === id);
    if (index !== -1) {
      listaTareas[index] = { ...listaTareas[index], ...nuevaTarea };
      return `Tarea actualizada: ${listaTareas[index]}`;
    }
  }

  function imprimirTareasCompletas() {
    return listaTareas;
  }
  
  module.exports = {
    verListaDetareasCompletas,verListaDetareasIncompletas,crearTarea,eliminarTarea,
    actualizarTarea,imprimirTareasCompletas,buscarTareaPorId,
  };