import catalogDefault from '../Assets/icon/default/catalog.png'
import healthDefault from '../Assets/icon/default/health.png'
import beautyDefault from '../Assets/icon/default/beauty.png'
import enjoiDefault from '../Assets/icon/default/enjoy.png'
import carDefault from '../Assets/icon/default/car.png'

import catalogActive from '../Assets/icon/active/catalog.png'
import healthActive from '../Assets/icon/active/health.png'
import beautyActive from '../Assets/icon/active/beauty.png'
import enjoiActive from '../Assets/icon/active/enjoy.png'
import carActive from '../Assets/icon/active/car.png'
const list = [
	{
		title: 'Каталог',
		link: '/Catalog',
		iconDefault: catalogDefault,
		iconActive: catalogActive
	}, {
		title: 'Здоровье',
		link: '/Health',
		iconDefault: healthDefault,
		iconActive: healthActive
	}, {
		title: 'Красота',
		link: '/Beauty',
		iconDefault: beautyDefault,
		iconActive: beautyActive
	}, {
		title: 'Развлечения',
		link: '/Enjoi',
		iconDefault: enjoiDefault,
		iconActive: enjoiActive
	}, {
		title: 'Авто',
		link: '/Car',
		iconDefault: carDefault,
		iconActive: carActive
	}
]
export const useSidebarList = () => {
	return list
}
