const express = require("express");
const path = require("path");
const request = require("request");
const cors = require("cors");
const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, "/client/build")));

//First two API endpoints gives priority to our data being fetched by the native request module.
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

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(PORT, () => {
	console.log(`server is running at port ${[PORT]}`);
});
