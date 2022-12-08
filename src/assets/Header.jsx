import React from "react";
import profile from "./Images/pp.png";

const Header = () => {
	return (
		<div className="header">
			<div className="user-details">
				<img src={profile} className="profile-img" alt="" />
				<div className="name-title">
					<h3>Miguel Angelo Villanueva</h3>
					<p>Role: Requestor</p>
				</div>
			</div>
			<div className="approval-div">
				<h3>For Approval</h3>
				<h3>|</h3>
				<h3>Approved</h3>
			</div>
		</div>
	);
};
export default Header;
