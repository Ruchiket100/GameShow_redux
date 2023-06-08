import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./features/gamesSlice";
const store = configureStore({
	reducer: { games: gameReducer }
});

export default store;
