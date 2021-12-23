import React, { useState } from "react";
import "../styles/Captains.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Thumbs } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Thumbs]);
function Captains() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	return (
		<section className="captains-section">
			<h1 className="section-heading">Top 3 Captains this Week</h1>
			<Swiper
				className="captains-container"
				slidesPerView={1.3}
				onSwiper={setThumbsSwiper}
				breakpoints={{
					// set breakpoints to enhance responsiveness
					// when window width is >= 750px
					750: {
						slidesPerView: 2,
					},
					// when window width is >= 950px
					950: {
						slidesPerView: 3,
					},
				}}
			>
				<SwiperSlide>
					<div className="captain">
						<div className="captain-image"></div>
						<div className="captain-info">
							<div className="player-name-container">
								<div className="info-name">
									<span>Name</span>
								</div>
								<div className="info-stat">
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
				<SwiperSlide tag="div">
					<div className="captain">
						<div className="captain-image"></div>
						<div className="captain-info">
							<div className="player-name-container">
								<div className="info-name">
									<span>Name</span>
								</div>
								<div className="info-stat">
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

				<SwiperSlide tag="div">
					<div className="captain">
						<div className="captain-image"></div>
						<div className="captain-info">
							<div className="player-name-container">
								<div className="info-name">
									<span>Name</span>
								</div>
								<div className="info-stat">
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
			</Swiper>
		</section>
	);
}

export default Captains;
