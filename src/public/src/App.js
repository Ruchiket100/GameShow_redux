import { fetchGames } from "./store/features/gamesSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
export default function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchGames());
	});
	return (
		<div className="App">
			<GlobalStyles />
			<Home />
		</div>
	);
}
