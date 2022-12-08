import { useState } from "react";
import "./App.css";
import Footer from "./assets/Footer";
import Header from "./assets/Header";
import Searchbar from "./assets/Searchbar";

function App() {
	return (
		<div className="App">
			<Header />
			<Searchbar />
			<Footer />
		</div>
	);
}

export default App;
