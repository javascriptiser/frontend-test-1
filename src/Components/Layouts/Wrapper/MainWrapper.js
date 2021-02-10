import { useSelector } from "react-redux"
import style from './style.module.css'



const MainWrapper = ({ children }) => {
	const { isActive } = useSelector(state => state.sidebarSlice)

	return <div className={isActive ? `${style.wrapper} ${style.sidebarActive}` : style.wrapper}>
		{children}
	</div>
}

export { MainWrapper }