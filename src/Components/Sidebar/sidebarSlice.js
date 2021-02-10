import { createSlice } from "@reduxjs/toolkit";


export const sidebarSlice = createSlice({
	name: 'sidebarSlice',
	initialState: {
		currentTitle: 'Каталог',
		isActive: false
	},
	reducers: {
		toggleMenu(state) {
			state.isActive = !state.isActive
		},
		setCurrentTitle(state, action) {
			state.currentTitle = action.payload;
		}
	}
})
const { actions } = sidebarSlice;
export const { toggleMenu, setCurrentTitle } = actions;


