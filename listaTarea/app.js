const express = require("express");
const app = express();
const port = 3000;
const listEditRouter = require("./list-edit-router");
const listViewRouter = require("./list-view-router");
const { solicitudPost, solicitudPut, manejoErrorListViewtRout } = require("./middleware");

app.use(express.json());
app.use("/editartareas", listEditRouter);
app.use("/listadetareas", listViewRouter);

app.get("/" , (req, res) =>{
  res.send("Hola Bienvenido")
})

//Middleware para validar los metodos http
app.use((req, res, next) => {
  const methods = ['GET', 'POST', 'PUT', 'DELETE'];
  if (!methods.includes(req.method)) {
    return res.status(400).json({ message: 'Método HTTP no válido' });
  }
  next();
});

//Middleware para validar metodo POST
listEditRouter.use(solicitudPost);

//Middleware para validar metodo PUT
listEditRouter.use(solicitudPut);

//Middleware Manejo errores para List-View-Router
list-view-router.use("/:id", manejoErrorListViewtRout);


app.listen(port, () => {
  console.log(`el servidor inicio correctamente en el port ${port}`);
});
