import React from "react";
import "../styles/First11.css";

function First11() {
	return (
		<section className="first11-section">
			<h2 className="section-heading">Select Your Best 11</h2>
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
							<div className="goalkeeper-container">
								<div className="goalkeeper">
									<img src="" alt="" />
									<div className="player-info">
										<div className="player-name">Mendy</div>
										<div className="next-opponent">WHU(A)</div>
									</div>
								</div>
							</div>
						</div>
						<div className="defender-container">
							<div className="defender">
								<img src="" alt="" />
								<div className="player-info">
									<div className="player-name">Cancelo</div>
									<div className="next-opponent">WHU(A)</div>
								</div>
							</div>

							<div className="defender">
								<img src="" alt="" />
								<div className="player-info">
									<div className="player-name">James</div>
									<div className="next-opponent">WHU(A)</div>
								</div>
							</div>

							<div className="defender">
								<img src="" alt="" />
								<div className="player-info">
									<div className="player-name">Livramento</div>
									<div className="next-opponent">WHU(A)</div>
								</div>
							</div>

							<div className="defender">
								<img src="" alt="" />
								<div className="player-info">
									<div className="player-name">Trent</div>
									<div className="next-opponent">WHU(A)</div>
								</div>
							</div>
						</div>

						<div className="midfielders-container">
							<div className="midfielders">
								<img src="" alt="" />
								<div className="player-info">
									<div className="player-name">Gilmour</div>
									<div className="next-opponent">WHU(A)</div>
								</div>
							</div>

							<div className="midfielders">
								<img src="" alt="" />
								<div className="player-info">
									<div className="player-name">Son</div>
									<div className="next-opponent">WHU(A)</div>
								</div>
							</div>

							<div className="midfielders">
								<img src="" alt="" />
								<div className="player-info">
									<div className="player-name">Salah</div>
									<div className="next-opponent">WHU(A)</div>
								</div>
							</div>

							<div className="midfielders">
								<img src="" alt="" />
								<div className="player-info">
									<div className="player-name">Gallagher</div>
									<div className="next-opponent">WHU(A)</div>
								</div>
							</div>
						</div>
						<div className="fowards-container">
							<div className="fowards">
								<img src="" alt="" />
								<div className="player-info">
									<div className="player-name">Vardy</div>
									<div className="next-opponent">WHU(A)</div>
								</div>
							</div>

							<div className="fowards">
								<img src="" alt="" />
								<div className="player-info">
									<div className="player-name">Jimenez</div>
									<div className="next-opponent">WHU(A)</div>
								</div>
							</div>
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
