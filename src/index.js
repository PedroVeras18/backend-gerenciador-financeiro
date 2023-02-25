//routes => rotas para criar um usuario
//controllers -> controlar a chamada, tratar os erros
//repositories -> operações no banco de dados

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.json());;
app.use(cors());

require("./routes/index")(app);

app.listen(8000, () => {
    console.log("Server run port 8000.")
})