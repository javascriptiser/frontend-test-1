import { useSelector } from "react-redux"


export const Header = () => {
	const currentTitle = useSelector(state => state.sidebarSlice.currentTitle)
	return <div><h1>{currentTitle}</h1></div>
}