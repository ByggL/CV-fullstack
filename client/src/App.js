import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Formation from "./pages/Formation";
import Experience from "./pages/Experience";
import Competences from "./pages/Competences";
import Autres from "./pages/Autres";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/formation" element={<Formation />} />
				<Route path="/experience" element={<Experience />} />
				<Route path="/competences" element={<Competences />} />
				<Route path="/autres" element={<Autres />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
