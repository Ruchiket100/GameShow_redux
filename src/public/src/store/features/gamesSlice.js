import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";
const initialState = {
	popular: [],
	upcoming: [],
	new: [],
	status: null
};

export const fetchGames = createAsyncThunk(
	"games/fetchPopularGames",
	async () => {
		const popularGames = await axios.get(popularGamesURL());
		const upcomingGames = await axios.get(upcomingGamesURL());
		const newGames = await axios.get(newGamesURL());
		return {
			popular: popularGames.data.results,
			upcoming: upcomingGames.data.results,
			new: newGames.data.results
		};
	}
);
const gamesSlice = createSlice({
	name: "games",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchGames.fulfilled, (state, action) => {
			state.popular = action.payload.popular;
			state.upcoming = action.payload.upcoming;
			state.new = action.payload.new;
		});
	}
});

export default gamesSlice.reducer;
