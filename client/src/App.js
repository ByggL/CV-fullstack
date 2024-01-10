import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Heading } from "@chakra-ui/react";
import Home from "./pages/Home";
import Formation from "./pages/Formation";
import Experience from "./pages/Experience";
import Competences from "./pages/Competences";
import Autres from "./pages/Autres";
import "./App.css";

function App() {
	const [backendData, setBackendData] = useState([{}]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		fetch("/api")
			.then((response) => response.json())
			.then((data) => {
				setBackendData(data);
				setLoading(false);
				console.log(data.skills);
				console.log(Object.entries(data.skills));
			});
	}, []);

	if (isLoading) {
		return (
			<Heading className="App" size="7xl">
				Loading...
			</Heading>
		);
	}

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route
					path="/formation"
					element={<Formation data={backendData} />}
				/>
				<Route
					path="/experience"
					element={<Experience data={backendData} />}
				/>
				<Route
					path="/competences"
					element={<Competences data={backendData} />}
				/>
				<Route path="/autres" element={<Autres data={backendData} />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
