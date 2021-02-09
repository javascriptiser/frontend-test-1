import { useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import { useSidebarList } from '../../CustomHooks/useSidebarList'
import style from './style.module.css'



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
		<SidebarList list={list} />
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

const SidebarItem = ({ title, link }) => {
	return <Link to={link}>
		{title}
	</Link>
}