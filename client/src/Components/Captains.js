import React from "react";
import "../styles/Captains.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

function Captains({ captains }) {
	var finalCaptains = captains
		.sort((a, b) => {
			return a.opponentStrength[0] - b.opponentStrength[0];
		})
		.slice(0, 3);

	return (
		<section className="players-section">
			<h1 className="section-heading">Top 3 Captains this Week</h1>
			<Swiper
				className="captains-container"
				slidesPerView={1.25}
				breakpoints={{
					// set breakpoints to enhance responsiveness
					// when window width is >= 600px
					600: {
						slidesPerView: 1.5,
					},
					// when window width is >= 750px
					750: {
						slidesPerView: 2,
					},
					// when window width is >= 900px
					900: {
						slidesPerView: 2.5,
						// spaceBetween: "even",
					},
					// when window width is >= 100px
					1000: {
						slidesPerView: 3,
						// spaceBetween: "even",
					},
				}}
			>
				{finalCaptains.map((finalCaptain, index) => {
					return (
						<SwiperSlide key={index}>
							<div className="captain">
								<div
									className="player-image captain-image"
									style={{
										background: `url(
											https://resources.premierleague.com/premierleague/photos/players/110x140/p${finalCaptain.imageString}.png
										)`,
										height: "200px",
										width: " 100%",
										backgroundRepeat: " no-repeat",
										backgroundSize: " cover",
									}}
								></div>
								<div className="player-info">
									<div className="player-name-container">
										<div className="info-name">
											<span>Player Name</span>
										</div>
										<div className="player-name">
											<span>{finalCaptain.web_name}</span>
										</div>
									</div>

									<div className="team-container">
										<div className="info-name">
											<span>Team</span>
										</div>
										<div className="info-stat">
											<span>{finalCaptain.teamName}</span>
										</div>
									</div>

									<div className="form">
										<div className="info-name">
											<span>Form</span>
										</div>
										<div className="info-stat">
											<span>{finalCaptain.form}</span>
										</div>
									</div>

									<div className="threat">
										<div className="info-name">
											<span>Threat</span>
										</div>
										<div className="info-stat">
											<span>{finalCaptain.threat}</span>
										</div>
									</div>

									<div className="opponent">
										<div className="info-name">
											<span>Opponent</span>
										</div>
										<div className="info-stat">
											<span>
												{finalCaptain.opponentsName[0]} (
												{finalCaptain.homeOrAway[0]} )
											</span>
										</div>
									</div>

									<div className="opponentStrength">
										<div className="info-name">
											<span>Opp. Strength</span>
										</div>
										<div className="info-stat">
											<span>{finalCaptain.opponentStrength[0]}</span>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					);
				})}

				{/* <SwiperSlide>
					<div className="captain">
						<div className="player-image captain-image"></div>
						<div className="player-info">
							<div className="player-name-container">
								<div className="info-name">
									<span>Name</span>
								</div>
								<div className="player-name">
									<span>T.Silva</span>
								</div>
							</div>

							<div className="team-container">
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
									<span>Opp. Strength</span>
								</div>
								<div className="info-stat">
									<span>3</span>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className="captain">
						<div className="player-image captain-image"></div>
						<div className="player-info">
							<div className="player-name-container">
								<div className="info-name">
									<span>Name</span>
								</div>
								<div className="player-name">
									<span>T.Silva</span>
								</div>
							</div>

							<div className="team-container">
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
									<span>Opp. Strength</span>
								</div>
								<div className="info-stat">
									<span>3</span>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide> */}
			</Swiper>
		</section>
	);
}

export default Captains;
