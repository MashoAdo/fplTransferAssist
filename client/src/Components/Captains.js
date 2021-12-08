import React from "react";
import "../styles/Captains.css";

function Captains() {
	return (
		<section className="captains-section">
			<div className="captain">
				<div className="captain-image"></div>
				<div className="captain-info">
					<div className="form">
						<div className="info-name">
							<span>Name</span>
						</div>
						<div className="info-stat">
							<span>T.Silva</span>
						</div>
					</div>

					<div className="form">
						<div className="info-name">
							<span>Team</span>
						</div>
						<div className="info-stat">
							<span>CHE</span>
						</div>
					</div>

					<div className="form">
						<div className="info-name">
							<span>Form</span>
						</div>
						<div className="info-stat">
							<span>8.0</span>
						</div>
					</div>

					<div className="threat">
						<div className="info-name">
							<span>Threat</span>
						</div>
						<div className="info-stat">
							<span>230</span>
						</div>
					</div>

					<div className="opponent">
						<div className="info-name">
							<span>Opponent</span>
						</div>
						<div className="info-stat">
							<span>NOR(H)</span>
						</div>
					</div>

					<div className="opponentStrength">
						<div className="info-name">
							<span>Opponent Strength</span>
						</div>
						<div className="info-stat">
							<span>3</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Captains;
