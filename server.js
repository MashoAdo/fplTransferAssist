const express = require("express");
const path = require("path");
const request = require("request");
const cors = require("cors");
const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.resolve(__dirname, "/client/build")));

	//FIRST Api endpoints gives priority to our backend so that node serves data fetched from our request
	app.get("/fetchbootstrap", (req, res) => {
		request(
			"https://fantasy.premierleague.com/api/bootstrap-static/",
			function (error, response, body) {
				if (error || response.statusCode !== 200) {
					return res
						.status(500)
						.json({ type: "error", message: error.message });
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
					return res
						.status(500)
						.json({ typer: "error", message: error.message });
				}
				res.send(body);
			}
		);
	});
}

// All other GET requests not handled before will return our React app
app.get("/*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "/client/build/index.html"));
});

app.listen(PORT, () => {
	console.log(`server is running at port ${[PORT]}`);
});
