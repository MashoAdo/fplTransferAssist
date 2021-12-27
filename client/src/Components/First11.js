import React from "react";
import "../styles/First11.css";

function First11() {
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
							<div className="goalkeeper-container">
								<div className="goalkeeper">
									<img src="" alt="" />
									<div className="f11-player-info">
										<div className="f11-player-name">Mendy</div>
										<div className="f11-next-opponent">WHU(A)</div>
									</div>
								</div>
							</div>
						</div>
						<div className="defender-container">
							<div className="defender">
								<img src="" alt="" />
								<div className="f11-player-info">
									<div className="f11-player-name">Cancelo</div>
									<div className="f11-next-opponent">WHU(A)</div>
								</div>
							</div>

							<div className="defender">
								<img src="" alt="" />
								<div className="f11-player-info">
									<div className="f11-player-name">James</div>
									<div className="f11-next-opponent">WHU(A)</div>
								</div>
							</div>

							<div className="defender">
								<img src="" alt="" />
								<div className="f11-player-info">
									<div className="f11-player-name">Livramento</div>
									<div className="f11-next-opponent">WHU(A)</div>
								</div>
							</div>

							<div className="defender">
								<img src="" alt="" />
								<div className="f11-player-info">
									<div className="f11-player-name">Trent</div>
									<div className="f11-next-opponent">WHU(A)</div>
								</div>
							</div>
						</div>
						<div className="midfielders-container">
							<div className="midfielders">
								<img src="" alt="" />
								<div className="f11-player-info">
									<div className="f11-player-name">Gilmour</div>
									<div className="f11-next-opponent">WHU(A)</div>
								</div>
							</div>

							<div className="midfielders">
								<img src="" alt="" />
								<div className="f11-player-info">
									<div className="f11-player-name">Son</div>
									<div className="f11-next-opponent">WHU(A)</div>
								</div>
							</div>

							<div className="midfielders">
								<img src="" alt="" />
								<div className="f11-player-info">
									<div className="f11-player-name">Salah</div>
									<div className="f11-next-opponent">WHU(A)</div>
								</div>
							</div>

							<div className="midfielders">
								<img src="" alt="" />
								<div className="f11-player-info">
									<div className="f11-player-name">Gallagher</div>
									<div className="f11-next-opponent">WHU(A)</div>
								</div>
							</div>
						</div>
						<div className="fowards-container">
							<div className="fowards">
								<img src="" alt="" />
								<div className="f11-player-info">
									<div className="f11-player-name">Vardy</div>
									<div className="f11-next-opponent">WHU(A)</div>
								</div>
							</div>

							<div className="fowards">
								<img src="" alt="" />
								<div className="f11-player-info">
									<div className="f11-player-name">Jimenez</div>
									<div className="f11-next-opponent">WHU(A)</div>
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
