import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import About from "./components/About";

export default function App() {
	return (
		<>
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} exact></Route>
					<Route path="/users" element={<Users />}></Route>
					<Route path="/about" element={<About />}></Route>
				</Routes>
			</Router>
		</>
	);
}
