const body = document.getElementById("root");
console.log("working");

// fetching data from our server
// get  data(players, team, element_types)
async function fetchElements() {
	// fetch elements/players and events
	var response = await fetch("http://localhost:4001/fetchbootstrap");
	var data = await response.json();
	console.log(data);
	// players
	players = await data.elements;
	// events
	events = await data.events;
	// teams
	teams = await data.teams;

	console.log(events);

	// fetch all future/unplayed fixtures
	var responseFixtures = await fetch("http://localhost:4001/fixtures");
	var AllFixtures = await responseFixtures.json();
	console.log(AllFixtures);

	// get current event id
	var currentEventId = events.find((event) => event.is_next == true).id;

	// get players in each position and sort them based on form and get the first eight/ten players
	// goalkeepers
	var goalkeepers = players
		.filter((player) => player.element_type === 1)
		.sort((a, b) => {
			return b.form - a.form;
		})
		.slice(0, 10);
	goalkeepers = goalkeepers.sort(
		(a, b) => b.points_per_game - a.points_per_game
	);

	var defenders = players
		.filter((player) => player.element_type === 2)
		.sort((a, b) => {
			return b.form - a.form;
		})
		.slice(0, 10);
	// console.log(defenders);

	var midfielders = players
		.filter((player) => player.element_type === 3)
		.sort((a, b) => {
			return b.form - a.form;
		})
		.slice(0, 10);
	// console.log(midfielders);

	var strikers = players
		.filter((player) => player.element_type === 4)
		.sort((a, b) => {
			return b.form - a.form;
		})
		.slice(0, 10);
	// console.log(strikers);

	var longTermPlayers = players
		.sort((a, b) => {
			return b.form - a.form;
		})
		.slice(0, 20)
		.sort((a, b) => {
			return a.cumulativeOpponentStrength - b.cumulativeOpponentStrength;
		})
		.slice(0, 10);
	// console.log(longTermPlayers);
	// console.log(goalkeepers);
	// add the following properties to eack goalkeeper fixtre difficulty ranking of opponents, opponent Id, opponents strength, opponents name and combined fdr of next 3 opponents

	goalkeepers.forEach((gk) => {
		var FDR = [];
		var opponentsId = [];
		var opponentStrength = [];
		var opponentsName = [];
		var event = currentEventId;
		var cumulativeOpponentStrength;

		for (let i = event; i <= event + 2; i++) {
			// get all matches for current gameweek
			var currentGameWeekFixturesFunction = (i) => {
				return AllFixtures.filter((fixture) => fixture.event == i);
			};
			var currentGameWeekFixtures = currentGameWeekFixturesFunction(i);

			for (fixture of currentGameWeekFixtures) {
				// check if the fixture contains the goalkeepers team and add the opponents information into variables declared.
				if (fixture.team_a == gk.team) {
					FDR.push(fixture.team_h_difficulty);
					opponentsId.push(fixture.team_h);
					opponentStrength.push(
						teams.find((team) => team.id == fixture.team_h).strength
					);
					opponentsName.push(
						teams.find((team) => team.id == fixture.team_h).short_name
					);
				} else if (fixture.team_h == gk.team) {
					FDR.push(fixture.team_a_difficulty);
					opponentsId.push(fixture.team_a);
					opponentStrength.push(
						teams.find((team) => team.id == fixture.team_a).strength
					);
					opponentsName.push(
						teams.find((team) => team.id == fixture.team_a).short_name
					);
				} else continue;
			}
			cumulativeOpponentStrength = opponentStrength.reduce((a, b) => a + b);
		}
		// create properties and add the propeties to each goalkeeper
		gk["fdr"] = FDR;
		gk["opponentsId"] = opponentsId;
		gk["opponentStrength"] = opponentStrength;
		gk["totalOpponentStrength"] = cumulativeOpponentStrength;
		gk["opponentsName"] = opponentsName;
	});

	addProperties(goalkeepers);
	addProperties(defenders);
	addProperties(midfielders);
	addProperties(strikers);
	addProperties(longTermPlayers);
	console.log(strikers);
	console.log(defenders);
	console.log(midfielders);
	console.log(longTermPlayers);
}

fetchElements();
