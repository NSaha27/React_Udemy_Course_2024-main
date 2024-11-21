import dotenv from "dotenv";
import express from "express";
import ReactDOM from "react-dom/client";

import Greet from "./components/Greet.js";

dotenv.config();

const host = process.env.HOST;
const port = process.env.PORT || "5000";

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const root = ReactDOM.createRoot(document.getElementById("root"));

const greet = "Good night Mr. Niladri!";
const locale = "EN-US";

root.render(Greet({greet: {greet}, locale: {locale}}));

app.get("/", (req, res, next) => {
  res.render("index.ejs");
})

app.listen(port, host, err => {
  if(!err){
    console.log(`server started at http://${host}:${port}`);
  }else{
    console.log("unable to start the server!");
  }
})

