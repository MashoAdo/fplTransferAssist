import React from "react";
import "../styles/Footer.css";

function Footer() {
	// get current year
	var currentYear = new Date().getFullYear();

	return (
		<footer>
			<div>
				<p>
					Developed By Masho Ado, A Tech Enthusiast and a Religous Football Fan
				</p>

				<div className="contacts">
					<span>Reach Me through</span>
					<div className="socials">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://twitter.com/Xnache"
						>
							twitter
						</a>

						<a href="mailto:mashoado@gmail.com" rel="noreferrer" subject="fpl">
							email
						</a>
					</div>
				</div>

				<p>All Copy Rights Reseved @ {currentYear}</p>

				<p>For The Love of The Game</p>
			</div>
		</footer>
	);
}

export default Footer;
