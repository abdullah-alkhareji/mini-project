import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MembersList from "./components/MembersList";
import MemberProfile from "./components/MemberProfile";

function App() {
	return (
		<div className='container-fluid'>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/members' element={<MembersList />} />
				<Route path='/members/:slug' element={<MemberProfile />} />
			</Routes>
		</div>
	);
}

export default App;
