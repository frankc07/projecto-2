const express = require("express");
const app = express();
const port = 3000;
const listEditRouter = require("./list-edit-router");
const listViewRouter = require("./list-view-router");

app.use(express.json());
app.use("/editartareas", listEditRouter);
app.use("/listadetareas", listViewRouter);


app.get("/" , (req, res) =>{
  res.send("Hola Bienvenido")
})


app.listen(port, () => {
  console.log(`el servidor inicio correctamente en el port ${port}`);
});
