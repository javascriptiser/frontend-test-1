import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit";
import { sidebarSlice } from "../Components/Sidebar/sidebarSlice";

const rootReducer = combineReducers({
	sidebarSlice: sidebarSlice.reducer
})

export const store = configureStore({
	reducer: rootReducer
})