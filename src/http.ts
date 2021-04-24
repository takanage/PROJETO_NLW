import express  from "express";
import { request, response } from "express";
import { createServer } from "http";
import { Server, Socket } from 'socket.io';
import path from "path";

import "./database";
import { routes } from "./routes";

const app = express();

const http = createServer(app); // Criando protocolo http
const io = new Server(http); // Criando protocolo websocket (WS)

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(express.json());

app.use(routes);

app.get("/pages/client", (request, response)=>{
    return response.render("html/client.html")
})

app.get("/pages/admin", (request, response)=>{
    return response.render("html/admin.html")
})


io.on("connection", (socket: Socket) => {
  
});


export {http, io}; 