const express = require("express");
const request = require("request");
const cors = require("cors");

const app = express();
var corsOptions = {
	origin: "http://127.0.0.1:5500/client/public/index.html",
};
app.use(cors());

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.get("/test", (req, res) => {
	res.json({ msg: "connected to backend" });
});

app.get("/fetchbootstrap", (req, res) => {
	request(
		"https://fantasy.premierleague.com/api/bootstrap-static/",
		function (error, response, body) {
			if (error || response.statusCode !== 200) {
				return res.status(500).json({ type: "error", message: error.message });
			}

			res.send(body);
		}
	);
});

app.get("/fixtures", (req, res) => {
	request(
		"https://fantasy.premierleague.com/api/fixtures/?future=1",
		(error, response, body) => {
			if (error || response.statusCode !== 200) {
				return res.status(500).json({ typer: "error", message: error.message });
			}
			res.send(body);
		}
	);
});

app.listen(4001, () => {
	console.log("server is running at port 4001");
});
