import React, { useEffect, useReducer } from "react";
import axios from "axios";
import First11 from "./Components/First11";
import Captains from "./Components/Captains";
import "./styles/ReusableStyles.css";
import Top5Gks from "./Components/Top5Gks";
import Top5Defenders from "./Components/Top5Defenders";
import Top5Midfielders from "./Components/Top5Midfielders";
import Top5Fowards from "./Components/Top5Fowards";
import LongtermPlayers from "./Components/LongtermPlayers";
import HowToUse from "./Components/HowToUse";
import Footer from "./Components/Footer";

function App() {
	const initialState = {
		loading: true,
		teams: {},
		players: {},
		fixtures: {},
		evnts: {},
		error: ``,
	};

	const reducer = (state, action) => {
		switch (action.type) {
			case "FETCH_SUCCESS":
				return {
					loading: false,
					teams: action.payload.teams,
					players: action.payload.players,
					fixtures: action.payload.fixtures,
					events: action.payload.events,
					error: "",
				};
			case "FETCH_ERROR":
				return {
					loading: false,
					teams: {},
					players: {},
					error: `${action.error}`,
				};
			default:
				return state;
		}
	};

	// fetch data from our server
	useEffect(() => {
		axios
			.all([axios.get("/fetchbootstrap"), axios.get("/fixtures")])
			.then((responses) => {
				// destructure responses from the above two get requests
				var fetchbootstrapResponse = responses[0];
				var fixturesResponse = responses[1];
				var bootstrapData = fetchbootstrapResponse.data;
				var fixturesData = fixturesResponse.data;
				// console.log(bootstrapData.elements);

				dispatch({
					type: "FETCH_SUCCESS",
					payload: {
						teams: bootstrapData.teams,
						players: bootstrapData.elements,
						fixtures: fixturesData,
						events: bootstrapData.events,
					},
				});
			})
			.catch((err) => {
				dispatch({ type: "FETCH_ERROR", error: err });
			});
	}, []);

	const [state, dispatch] = useReducer(reducer, initialState);
	const { teams, players, loading, error, events, fixtures } = state;

	console.log(state);
	console.log(loading);

	if (loading === true) {
		console.log("loading");
	} else {
		console.log("completed");

		//add images string(used to fetch dynamic image for each player) and short team name to each player
		players.forEach((player) => {
			let imageString;
			let teamName;
			var imageStringJpg = player.photo;
			// use Regex to find unique number for each image and join into one string
			// console.log(imageStringJpg.match(/\d/g).join(""));
			imageString = imageStringJpg.match(/\d/g).join("");
			teamName = teams.find(
				(team) => player.team_code === team.code
			).short_name;

			player["imageString"] = imageString;
			player["teamName"] = teamName;
		});
		// console.log(players);

		// get players in each position and sort them based on form /threatand get the first eight/ten players
		// goalkeepers
		var goalkeepers = players
			.filter((player) => player.element_type === 1)
			.sort((a, b) => {
				return b.form - a.form;
			})
			.slice(0, 10);

		// defenders
		var defenders = players
			// get defenders
			.filter((player) => {
				if (
					player.chance_of_playing_this_round < 75 ||
					player.chance_of_playing_next_round < 75
				) {
					return null;
				} else {
					return player.element_type === 2;
				}
			})
			// sort based on form
			.sort((a, b) => {
				return b.form - a.form;
			})
			// get the top 10 based on form
			.slice(0, 10)
			// sort based on goal threat
			.sort((a, b) => {
				return b.threat - a.threat;
			})
			.slice(0, 8);

		// console.log(defenders);

		// midfielders
		var midfielders = players
			.filter((player) => player.element_type === 3)
			.sort((a, b) => {
				return b.form - a.form;
			})
			.slice(0, 10)
			.sort((a, b) => {
				return b.threat - a.threat;
			});
		// console.log(midfielders);

		// strikers
		var strikers = players
			.filter((player) => player.element_type === 4)
			.sort((a, b) => {
				return b.form - a.form;
			})
			.slice(0, 10)
			.sort((a, b) => {
				return b.threat - a.threat;
			})
			.slice(0, 8);

		// most suitable captains
		var captains = players
			.sort((a, b) => {
				return b.form - a.form;
			})
			.slice(0, 10)
			.sort((a, b) => {
				return b.threat - a.threat;
			})
			.slice(0, 7);

		// console.log(captains);
		// longterm players
		var longTermPlayers = players
			.sort((a, b) => {
				return b.form - a.form;
			})
			.slice(0, 25)
			.sort((a, b) => {
				return b.threat - a.threat;
			})
			.slice(0, 20)
			.sort((a, b) => {
				return a.cumulativeOpponentStrength - b.cumulativeOpponentStrength;
			})
			.slice(0, 15);

		console.log(longTermPlayers);
		// get current event id
		var currentEventId = events.find((event) => event.is_next === true).id;

		function addProperties(element) {
			element.forEach((individualElement) => {
				var FDR = [];
				var opponentId = [];
				var opponentStrength = [];
				var opponentsName = [];
				var homeOrAway = [];
				var event = currentEventId;
				var cumulativeOpponentStrength;

				for (let i = event; i <= event + 2; i++) {
					// get all matches for current gameweek
					var currentGameWeekFixturesFunction = (i) => {
						return fixtures.filter((fixture) => fixture.event === i);
					};
					var currentGameWeekFixtures = currentGameWeekFixturesFunction(i);

					for (let fixture of currentGameWeekFixtures) {
						// check if the fixture contains the goalkeepers team and add the opponents information into variables declared.
						if (fixture.team_a === individualElement.team) {
							homeOrAway.push("(H)");
							FDR.push(fixture.team_h_difficulty);

							// opponent strength
							var opponentDifficultyRating = teams.find(
								(team) => team.id === fixture.team_h
							).strength;
							// add the opponent strength player property
							opponentStrength.push(opponentDifficultyRating);

							opponentsName.push(
								teams.find((team) => team.id === fixture.team_h).short_name
							);
							opponentsName.push(`(H),`);
						} else if (fixture.team_h === individualElement.team) {
							homeOrAway.push("A");

							FDR.push(fixture.team_a_difficulty);

							opponentId.push(fixture.team_a);

							opponentStrength.push(
								teams.find((team) => team.id === fixture.team_a).strength
							);

							opponentsName.push(
								teams.find((team) => team.id === fixture.team_a).short_name
							);
							opponentsName.push(`(A),`);
						} else continue;
					}
				}
				cumulativeOpponentStrength = opponentStrength.reduce((a, b) => a + b);
				// create properties and add the propeties to each goalkeeper
				individualElement["fdr"] = FDR;
				individualElement["homeOrAway"] = homeOrAway;
				individualElement["opponentId"] = opponentId;
				individualElement["opponentStrength"] = opponentStrength;
				individualElement["cumulativeOpponentStrength"] =
					cumulativeOpponentStrength;
				individualElement["opponentsName"] = opponentsName;
			});
		}

		addProperties(goalkeepers);
		addProperties(defenders);
		addProperties(midfielders);
		addProperties(strikers);
		addProperties(longTermPlayers);
	}

	return (
		<div className="App">
			{error && <h1>Error Occurred please refresh</h1>}
			{loading ? (
				"Loading"
			) : (
				<>
					<First11
						goalkeepers={goalkeepers}
						defenders={defenders}
						midfielders={midfielders}
						strikers={strikers}
					/>
					<Captains captains={captains} />
					<h1 className="section-heading" style={{ margin: "2rem" }}>
						Top 5 Players in Every Category with Favourable Fixtures
					</h1>
					<Top5Gks goalkeepers={goalkeepers} />
					<Top5Defenders defenders={defenders} />
					<Top5Midfielders midfielders={midfielders} />
					<Top5Fowards strikers={strikers} />
					<LongtermPlayers longTermPlayers={longTermPlayers} />
					<HowToUse />
					<Footer />
				</>
			)}
		</div>
	);
}

export default App;
