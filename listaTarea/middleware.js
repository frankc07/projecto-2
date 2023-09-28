//Middleware para manejar errores en metodo POST
function solicitudPost(req, res, next) {
    if (req.method !== "POST") {
    return res.status(400).json({ mesage: "Metodo no aceptado" });
    }
    const nuevaTarea = req.body;
    if (!nuevaTarea || !nuevaTarea.descripcion) {
    return res.status(400).json({ message: "Datos de tarea no válidos" });
}
    next(); // Continuar con la ejecución normal si no hay errores
}

  //Middleware metodo PUT
function solicitudPut(req, res, next) {
    if (req.method === "PUT") {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        res.status(400).json({ message: "ID de tarea no válido" });
    } else {
        const tareaExistente = funTareasEditar.buscarTareaPorId(id);
        if (tareaExistente) {
        const nuevaTarea = req.body;
        if (!nuevaTarea || !nuevaTarea.descripcion) {
            res.status(400).json({ message: "Datos de tarea no válidos" });
        } else {
            next(); // Continuar con la ejecución normal si no hay errores
        }
        } else {
        res.status(404).json({ message: `La tarea con ID ${id} no existe` });
        }
    }
    } else {
      next(); // Continuar con la ejecución normal para otros métodos HTTP
    }
}

//Middleware Manejo errores para List-View-Router
function manejoErrorListViewtRout(req, res, next) {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id <= 0) {
    res.status(400).json({ message: "Parámetro de ID no válido" });
    } else {
    req.validId = id;
    next(); 
    }
}

module.exports =  {solicitudPost, solicitudPut, manejoErrorListViewtRout};