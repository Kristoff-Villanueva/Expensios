import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="footer-div">
			<Link to="/home/welcome" className="footer-icons">
				🏠
			</Link>
			<Link to="/home/inbox" className="footer-icons">
				✉️
			</Link>
			<Link to="/home/form" className="footer-icons">
				📝
			</Link>
			<Link to="/home/notifications" className="footer-icons">
				🔔
			</Link>
			<Link to="/home/settings" className="footer-icons">
				⚙️
			</Link>
		</div>
	);
};

export default Footer;
