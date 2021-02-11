import { useSelector } from "react-redux"
import { InputSearch } from "../InputSearch/InputSearch"
import style from './style.module.css'


export const Header = () => {
	const currentTitle = useSelector(state => state.sidebarSlice.currentTitle)
	return <div className={style.headerWrapper}>
		<h1>{currentTitle}</h1>
		<InputSearch />
	</div>
}