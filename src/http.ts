import express from "express";
import { routes } from "./routes";

import { createServer } from "http";
import { Server, Socket } from "socket.io";

import path from "path";
import "./database";

const app = express();

const http = createServer(app); // Creating HTTP protocol
const io = new Server(http); // Creating ws protocol

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(express.json());

app.use(routes);

app.get("/pages/client", (req, res) => {
	return res.render("html/client.html");
});

app.get("/pages/admin", (req, res) => {
	return res.render("html/admin.html");
});

export { http, io };
