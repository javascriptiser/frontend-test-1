import { createSlice } from "@reduxjs/toolkit";


export const sidebarSlice = createSlice({
	name: 'sidebarSlice',
	initialState: {
		isActive: false
	},
	reducers: {
		toggleMenu(state) {
			state.isActive = !state.isActive
		}
	}
})
const { actions } = sidebarSlice;
export const { toggleMenu } = actions;


