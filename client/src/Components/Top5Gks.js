import React from "react";
import "../styles/Top5Gks.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

function Top5Gks({ goalkeepers }) {
	// sort goalkeeper according to the points per game, opponents strength
	var top5Gks = goalkeepers
		.sort((a, b) => {
			return b.points_per_game - a.points_per_game;
		})
		.slice(0, 8)
		.sort((a, b) => {
			return a.opponentStrength[0] - b.opponentStrength[0];
		})
		.slice(0, 5);
	console.log(top5Gks);

	return (
		<section className="players-section top5GKs">
			<h2 className="category-heading">Goalkeepers</h2>
			<Swiper
				className="goalkeepers-container"
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
				{top5Gks.map((goalkeeper, index) => {
					return (
						<SwiperSlide key={index}>
							<div className="goalkeeper">
								<div
									className="goalkeeper-image"
									style={{
										background: `url(
											https://resources.premierleague.com/premierleague/photos/players/110x140/p${goalkeeper.imageString}.png
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
											<span>{goalkeeper.web_name}</span>
										</div>
									</div>

									<div className="team-container">
										<div className="info-name">
											<span>Team</span>
										</div>
										<div className="info-stat">
											<span>{goalkeeper.teamName}</span>
										</div>
									</div>

									<div className="form">
										<div className="info-name">
											<span>Form</span>
										</div>
										<div className="info-stat">
											<span>{goalkeeper.form}</span>
										</div>
									</div>

									<div className="opponent">
										<div className="info-name">
											<span>Opponent</span>
										</div>
										<div className="info-stat">
											<span>
												{goalkeeper.opponentsName[0]}({goalkeeper.homeOrAway[0]}
												)
											</span>
										</div>
									</div>

									<div className="opponentStrength">
										<div className="info-name">
											<span>Opp. Strength</span>
										</div>
										<div className="info-stat">
											<span>{goalkeeper.opponentStrength[0]}</span>
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

export default Top5Gks;
