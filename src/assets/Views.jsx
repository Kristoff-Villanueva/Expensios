import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Form from "./Form";

const Views = () => {
	return (
		<Routes>
			<Route path="/home" element={<Footer />} />
			<Route path="/form" element={<Form />} />
			<Route index element={<div>Please login</div>} />
			<Route path="*" element={<div>404 Not Found</div>} />
		</Routes>
	);
};

export default Views;
