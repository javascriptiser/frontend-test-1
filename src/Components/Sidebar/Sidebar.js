import { Link } from 'react-router-dom'
import { useSidebarList } from '../../CustomHooks/useSidebarList'
import sidebarStyle from './sidebarStyle.module.css'
import sidebarHeaderLogo from '../../Assets/icon/sidebarHeader.png'



export const Sidebar = () => {
	const list = useSidebarList();
	return <div className={sidebarStyle.wrapper}>
		<SidebarHeader />
		<SidebarList list={list} />
	</div>
}
const SidebarHeader = () => {
	return <div className={sidebarStyle.logoWrapper}>
		<img src={sidebarHeaderLogo} alt="sidebarHeaderLogo" />
		<span>BECO</span>
	</div>
}

const SidebarList = ({ list }) => {
	return <ul>
		{
			list.map((item, index) => {
				return <li key={index} className={sidebarStyle.listItemWrapper}>
					<SidebarItem
						{...item}
					/>
				</li>
			})
		}
	</ul>
}

const SidebarItem = ({ title, link, iconDefault, iconActive }) => {
	return <div className={sidebarStyle.listItemInnerWrapper}>
		<img src={iconDefault} alt="icondDefault" />
		<Link to={link}>
			{title}
		</Link>
	</div>
}