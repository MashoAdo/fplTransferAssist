import React from "react";
import "../styles/First11.css";

function First11({ goalkeepers, defenders, midfielders, strikers }) {
	// sort goalkeeper according to the opponents strength
	goalkeepers.sort((a, b) => {
		return a.opponentStrength[0] - b.opponentStrength[0];
	});
	var fisrt11GKs = goalkeepers.slice(0, 5);

	var first11Defenders = defenders.slice(0, 5);

	var first11Midfielders = midfielders
		.sort((a, b) => {
			return a.opponentStrength[0] - b.opponentStrength[0];
		})
		.slice(0, 5);

	var first11Strikers = strikers
		.sort((a, b) => {
			return a.opponentStrength[0] - b.opponentStrength[0];
		})
		.slice(0, 2);

	return (
		<section className="first11-section">
			<h1 className="section-heading">Most in Form 11</h1>
			<div className="pitch-container">
				<div className="pitch">
					{/* first 11 container */}
					{/* <!-- the grass is green here --> */}

					<div className="lines">
						{/* <!-- the outside lines of the pitch --> */}
						<span className="corner corner-top-left">
							{/* <!-- the top left corner --> */}
						</span>
						<span className="corner corner-top-right">
							{/* <!-- the top right corner --> */}
						</span>

						<div className="goalBox">
							{/* <!-- the goal box goes here --> */}
							<div className="gk-container">
								<div className="gk">
									<img src="" alt="" />
									<div className="f11-player-info">
										{/* use bracket notation to get the first goalkeepers */}
										<div className="f11-player-name">
											{goalkeepers[0].web_name}
										</div>
										<div className="f11-next-opponent">
											{fisrt11GKs[0].opponentsName[0]} (
											{fisrt11GKs[0].homeOrAway[0]} )
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="def-container">
							{first11Defenders.map((defender, index) => {
								return (
									<div className="def" key={index}>
										<div className="f11-player-info">
											<div className="f11-player-name">{defender.web_name}</div>
											<div className="f11-next-opponent">
												{defender.opponentsName[0]}( {defender.homeOrAway[0]} )
											</div>
										</div>
									</div>
								);
							})}
						</div>

						<div className="mid-container">
							{first11Midfielders.map((midfielder, index) => {
								return (
									<div className="mid" key={index}>
										<div className="f11-player-info">
											<div className="f11-player-name">
												{midfielder.web_name}
											</div>
											<div className="f11-next-opponent">
												{midfielder.opponentsName[0]}({" "}
												{midfielder.homeOrAway[0]} )
											</div>
										</div>
									</div>
								);
							})}
						</div>

						<div className="fowards-container">
							{first11Strikers.map((striker, index) => {
								return (
									<div className="fowards" key={index}>
										<div className="f11-player-info">
											<div className="f11-player-name">{striker.web_name}</div>
											<div className="f11-next-opponent">
												{striker.opponentsName[0]}( {striker.homeOrAway[0]} )
											</div>
										</div>
									</div>
								);
							})}
						</div>

						<div className="half">
							{/* <!-- the half way point of the pitch is here --> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default First11;
