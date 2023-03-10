const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

require("./routes/index")(app);

app.listen(8001, () => {
    console.log("Servidor rodando na porta 8001");
  });
