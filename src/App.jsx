import { useState } from "react";
import { BrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./assets/Footer";
import Header from "./assets/Header";
import Searchbar from "./assets/Searchbar";
import Views from "./assets/Views";

function App() {
	return (
		<BrowserRouter>
			<Views />
			<div className="App">
				<Header />
				<Searchbar />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
