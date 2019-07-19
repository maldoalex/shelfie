const express = require("express");
const app = express();
const massive = require("massive");
const controller = require("./controller");
require("dotenv").config();

app.use(express.json());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    console.log("database connected");
  })
  .catch(console.log());

app.get("/api/products", controller.getAll);
app.post("/api/products/", controller.create);
app.get("/api/products/:id", controller.getOne);
app.put("/api/products/:id", controller.update);
app.delete("/api/products/:id", controller.delete);

const PORT = 3023;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
