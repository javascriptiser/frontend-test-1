import { useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import { useSidebarList } from '../../CustomHooks/useSidebarList'
import style from './style.module.css'
import sidebarHeader from '../../Assets/icon/sidebarHeader.png'



export const Sidebar = () => {
	const list = useSidebarList();
	const [isActive, setIsActive] = useState(false);
	const openMenu = () => {
		setIsActive(!isActive);
	}

	return <div className={isActive ? `${style.sidebar} ${style.active}` : style.sidebar}>
		<div className={style.toggleBtn} onClick={openMenu}>
			<span></span>
			<span></span>
			<span></span>
		</div>
		<SidebarHeader />
		<SidebarList list={list} />
	</div>
}
const SidebarHeader = () => {
	return <div className={style.sidebarHeaderWrapper}>
		<img src={sidebarHeader} alt="sidebarHeader" />
		<span className={style.sidebarHeaderText}>BECO</span>
	</div>
}

const SidebarList = ({ list }) => {
	return <ul>
		{
			list.map((item, index) => {
				return <li key={index}>
					<SidebarItem
						{...item}
					/>
				</li>
			})
		}
	</ul>
}

const SidebarItem = ({ title, link, iconDefault, iconActive }) => {
	const [isAcitve, setIsActive] = useState(false)
	const onMouseMoveHandler = (e) => {
		setIsActive(true)
	}
	const onMouseLeaveHandler = () => {
		setIsActive(false)
	}
	return <div onMouseMove={onMouseMoveHandler} onMouseLeave={onMouseLeaveHandler} className={style.sidebarItem}>
		{isAcitve
			? <img src={iconActive} alt="icondActive" height={'24px'} width={'24px'} />
			: <img src={iconDefault} alt="icondDefault" height={'24px'} width={'24px'} />}
		<Link to={link}>
			{title}
		</Link>
	</div>
}