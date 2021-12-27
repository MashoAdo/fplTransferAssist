import React from "react";
import "../styles/Top5Midfielders.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

function Top5Midfielders() {
	return (
		<section className="players-section top5Midfielders">
			<h2 className="category-heading">Midfielders</h2>
			<Swiper
				className="midfielders-container"
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
				<SwiperSlide>
					<div className="midfielders">
						<div className="midfielders-image"></div>
						<div className="player-info">
							<div className="player-name-container">
								<div className="info-name">
									<span>Name</span>
								</div>
								<div className="player-name">
									<span>De Bruyne</span>
								</div>
							</div>

							<div className="team-container">
								<div className="info-name">
									<span>Team</span>
								</div>
								<div className="info-stat">
									<span>MCL</span>
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
									<span>NEW(H)</span>
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
					<div className="midfielders">
						<div className="midfielders-image"></div>
						<div className="player-info">
							<div className="player-name-container">
								<div className="info-name">
									<span>Name</span>
								</div>
								<div className="player-name">
									<span>De Bruyne</span>
								</div>
							</div>

							<div className="team-container">
								<div className="info-name">
									<span>Team</span>
								</div>
								<div className="info-stat">
									<span>MCL</span>
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
									<span>NEW(H)</span>
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
					<div className="midfielders">
						<div className="midfielders-image"></div>
						<div className="player-info">
							<div className="player-name-container">
								<div className="info-name">
									<span>Name</span>
								</div>
								<div className="player-name">
									<span>De Bruyne</span>
								</div>
							</div>

							<div className="team-container">
								<div className="info-name">
									<span>Team</span>
								</div>
								<div className="info-stat">
									<span>MCL</span>
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
									<span>NEW(H)</span>
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
					<div className="midfielders">
						<div className="midfielders-image"></div>
						<div className="player-info">
							<div className="player-name-container">
								<div className="info-name">
									<span>Name</span>
								</div>
								<div className="player-name">
									<span>De Bruyne</span>
								</div>
							</div>

							<div className="team-container">
								<div className="info-name">
									<span>Team</span>
								</div>
								<div className="info-stat">
									<span>MCL</span>
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
									<span>NEW(H)</span>
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
					<div className="midfielders">
						<div className="midfielders-image"></div>
						<div className="player-info">
							<div className="player-name-container">
								<div className="info-name">
									<span>Name</span>
								</div>
								<div className="player-name">
									<span>De Bruyne</span>
								</div>
							</div>

							<div className="team-container">
								<div className="info-name">
									<span>Team</span>
								</div>
								<div className="info-stat">
									<span>MCL</span>
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
									<span>NEW(H)</span>
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
			</Swiper>
		</section>
	);
}

export default Top5Midfielders;
