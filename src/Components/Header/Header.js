import { useSelector } from "react-redux"
import { InputSearch } from "../InputSearch/InputSearch"


export const Header = () => {
	const currentTitle = useSelector(state => state.sidebarSlice.currentTitle)
	return <div>
		<h1>{currentTitle}</h1>
		<InputSearch />
	</div>
}