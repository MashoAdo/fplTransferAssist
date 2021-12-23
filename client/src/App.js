import React, { useEffect, useReducer } from "react";
import axios from "axios";
import First11 from "./Components/First11";
import Captains from "./Components/Captains";
import "./styles/ReusableStyles.css";

function App() {
	const initialState = {
		loading: true,
		teams: {},
		players: {},
		error: ``,
	};

	const reducer = (state, action) => {
		switch (action.type) {
			case "FETCH_SUCCESS":
				return {
					loading: false,
					teams: action.payload.teams,
					players: action.payload.elements,
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
		axios("http://localhost:4001/fetchbootstrap")
			.then((res) => {
				var data = res.data;
				dispatch({
					type: "FETCH_SUCCESS",
					payload: { teams: data.teams, elements: data.elements },
				});
			})
			.catch((err) => {
				dispatch({ type: "FETCH_ERROR", error: err });
			});
	}, []);

	const [state, dispatch] = useReducer(reducer, initialState);
	const { teams, players, loading, error } = state;
	console.log(state.players);

	return (
		<div className="App">
			{/* {error ? <h1>Error Occurred please refresh</h1> : null} */}
			{/* {loading ? "Loading" : <First11 />} */}
			<First11 />
			<Captains />
		</div>
	);
}

export default App;
