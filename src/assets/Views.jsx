import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";

import Header from "./Header";
import Searchbar from "./Searchbar";
import Footer from "./Footer";
import Form from "./Form";
import Welcome from "./Welcome";
import Inbox from "./Inbox";
import Notifications from "./Notifications";
import Settings from "./Settings";

const Views = () => {
	return (
		<Routes>
			<Route path="/home" element={<Main />}>
				<Route path="welcome" element={<Welcome />} />
				<Route path="inbox" element={<Inbox />} />
				<Route path="form" element={<Form />} />
				<Route path="notifications" element={<Notifications />} />
				<Route path="settings" element={<Settings />} />
			</Route>
			<Route index element={<div>Please login</div>} />
			<Route path="*" element={<div>404 Not Found</div>} />
		</Routes>
	);
};

const Main = () => {
	return (
		<div className="mainDiv">
			<Header />
			<Searchbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Views;
