import { useSelector } from "react-redux"
import style from './style.module.css'



const CardsWrapper = ({ children }) => {
	const { isActive } = useSelector(state => state.sidebarSlice)

	return <div>
		{children}
	</div>
}

export { CardsWrapper }