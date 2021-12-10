import React from "react";

function HowToUse() {
	return (
		<section>
			<h1>How the players have been selected </h1>
			<div className="how-to-use-container">
				<p className="preamble">
					This Web App is intended to help fantasy premier league managers to
					make the best transfer decision based on data from fantasy premier
					league API. In all the categories the players have been selected based
					on their current form. This is the first and the main criteria for
					selection to ensure that only players who are performing at their
					highest level are selected.
				</p>

				<div>
					<h2> Goalkeepers</h2>
					<p>
						The goalkeeper in the first 11 selected has the highest form and
						lowest FDR(Fixture Difficulty Ranking) of the next opponent. The
						Goalkeepers in the Goalkeepers Category have been selected based on
						form(highest to lowest) then points per game earned (highest to
						lowest), this is to ensure that the goalkeepers with highest points
						are selected. Another reason for using this criteria is to prevent
						goalkeepers who are in form due to high number of saves made but
						still concede many goals due to poor defensive ability of the team.
						The final criteria for selection is based is FDR(Fixture Difficulty
						Ranking) of the next opponent.
					</p>
				</div>

				<div>
					<h2>Defenders</h2>
					<p>
						All the Defenders have been selected using three criteria; first
						based on form then sorted using threat criteria(highest to lowest)
						this criteria is used to get Defenders with highest probability to
						score or assist finally the FDR(Fixture Difficulty Ranking) of the
						next opponent.
					</p>
				</div>

				<div>
					<h2>Midfielders & Fowards</h2>
					<p>
						All the Midfielders and Fowards have been selected using three
						criteria; first based on form then sorted using threat
						criteria(highest to lowest) this is used to get Midfielders and
						Fowards with highest probability to score/assist and finally the
						FDR(Fixture Difficulty Ranking) of the next opponent.
					</p>
				</div>

				<div>
					<h2>Long Term Players</h2>
					<p>
						All players in this category have been selected based on
						form(Highest to Lowest). and cumulative FDR of their next three
						fixtures(Lowest to Highest).
					</p>
				</div>

				<div>
					<h2>Unavailable and Injured</h2>
					<p>
						The criterias(Form , Threat) used to select the all players will
						ensure all unavailable players are not selected since unavailable
						players will always have 0 for both . For the injured players,
						chance_of_palying_this_round criteria will be used to eliminate all
						players who have 75% or below for this criteria. But why not simply
						select players with 100% chance of playing next round ?
						Unfortunately from the data received some players have null value
						for this criteria despite them being not injured and most players
						with this value actually appear to take part in most games
					</p>
				</div>
			</div>
		</section>
	);
}

export default HowToUse;
