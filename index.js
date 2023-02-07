import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.send("Tracker is running");
});

app.get("/track/email", (req, res) => {
	const { id } = req.query;

	console.log(id);
	res.sendFile("/resources/1x1.png", { root: process.cwd() });
});

app.get("/track/page", (req, res) => {
	const { id } = req.query;

	console.log(id);
	res.sendFile("/resources/1x1.png", { root: process.cwd() });
});

app.listen(port, () => {
	console.log("Server is running on port " + port);
});
