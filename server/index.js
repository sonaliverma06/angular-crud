const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {connection} = require("./src/connection/connection")
const StudentRouter = require("./src/components/userdetails/routs/student.router")

const app = express();

var corsOptions = {
  origin: "http://localhost:4800"
};

app.use(cors());

app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});


const PORT = process.env.PORT || 4800;
app.use("/api/user",StudentRouter)
connection.sync().then(() => {
  console.log("connected")
}).catch((err) => {
  console.log(err);
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});