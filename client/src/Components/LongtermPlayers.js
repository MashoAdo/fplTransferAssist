import React from "react";
import "../styles/LongTermPlayers.css";

function LongtermPlayers({ longTermPlayers }) {
	// var finalLongtermPlayers = longtermPlayers.

	return (
		<section className="longTerm-players">
			<h1 className="section-heading">Long Term Players</h1>
			<table>
				<thead>
					<tr>
						<th>Player Name</th>
						<th>Player Team</th>
						<th>Form</th>
						<th>Next Opp</th>
						<th>Opps FDR</th>
						<th>Cumulative Opp. FDR</th>
					</tr>
				</thead>

				<tbody>
					{longTermPlayers.map((player, index) => {
						return (
							<tr key={index}>
								<td>{player.web_name}</td>
								<td>{player.teamName}</td>
								<td>{player.form}</td>
								<td>{player.opponentsName}</td>
								<td>{player.opponentStrength}</td>
								<td>{player.cumulativeOpponentStrength}</td>
							</tr>
						);
					})}
					{/* <tr>
						<td>Hazard</td>
						<td>9.0</td>
						<td>WHU(H),BUR(A),CRY(H)</td>
						<td>4,2,3</td>
						<td>9</td>
					</tr> */}
				</tbody>
			</table>
		</section>
	);
}

export default LongtermPlayers;
