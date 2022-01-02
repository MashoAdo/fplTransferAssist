import React from "react";
import "../styles/Top5Fowards.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

function Top5Fowards({ strikers }) {
	var top5Strikers = strikers
		.sort((a, b) => {
			return a.opponentStrength[0] - b.opponentStrength[0];
		})
		.slice(0, 5);
	return (
		<section className="players-section top5Fowards">
			<h2 className="category-heading">Fowards</h2>
			<Swiper
				className="fowards-container"
				slidesPerView={1.3}
				breakpoints={{
					// set breakpoints to enhance responsiveness
					// when window width is >= 600px
					600: {
						slidesPerView: 2,
					},
					// when window width is >= 750px
					750: {
						slidesPerView: 2.5,
					},
					// when window width is >= 900px
					900: {
						slidesPerView: 3.5,
						// spaceBetween: "even",
					},
					// when window width is >= 1000px
					1000: {
						slidesPerView: 4,
						// spaceBetween: "even",
					},
					// when window width is >= 1200px
					1200: {
						slidesPerView: 5,
						// spaceBetween: "even",
					},
				}}
			>
				{top5Strikers.map((striker, index) => {
					return (
						<SwiperSlide key={index}>
							<div className="foward">
								<div
									className="foward-image"
									style={{
										backgroundImage: `url(
											https://resources.premierleague.com/premierleague/photos/players/110x140/p${striker.imageString}.png
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
											<span>Name</span>
										</div>
										<div className="player-name">
											<span>{striker.web_name}</span>
										</div>
									</div>

									<div className="team-container">
										<div className="info-name">
											<span>Team</span>
										</div>
										<div className="info-stat">
											<span>{striker.teamName}</span>
										</div>
									</div>

									<div className="form">
										<div className="info-name">
											<span>Form</span>
										</div>
										<div className="info-stat">
											<span>{striker.form}</span>
										</div>
									</div>

									<div className="threat">
										<div className="info-name">
											<span>Threat</span>
										</div>
										<div className="info-stat">
											<span>{striker.threat}</span>
										</div>
									</div>

									<div className="opponent">
										<div className="info-name">
											<span>Opponent</span>
										</div>
										<div className="info-stat">
											<span>
												{striker.opponentsName[0]} ({striker.homeOrAway[0]} )
											</span>
										</div>
									</div>

									<div className="opponentStrength">
										<div className="info-name">
											<span>Opp. Strength</span>
										</div>
										<div className="info-stat">
											<span>{striker.opponentStrength[0]}</span>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
}

export default Top5Fowards;
