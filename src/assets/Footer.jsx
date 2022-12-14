import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="footer-div">
			<p className="footer-icons">🏠</p>
			<p className="footer-icons">✉️</p>
			<p className="footer-icons">
				<Link to="/form">📝</Link>
			</p>
			<p className="footer-icons">🔔</p>
			<p className="footer-icons">🔖</p>
		</div>
	);
};

export default Footer;
