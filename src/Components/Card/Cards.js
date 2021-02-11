import { useCardsList } from '../../CustomHooks/useCardsList'
import style from './style.module.css'




export const Cards = () => {
	const list = useCardsList();
	return <div className={style.cardsWrapper}>
		{list.map((item, index) => <Card {...item} key={index} />)}
	</div>
}

const Card = ({ title, description, discountTitle, discountDescription, image }) => {
	return <div className={style.cardWrapper}>
		<h1>{title}</h1>
		<p>{description}</p>
		<div className={style.discountTitle}>{discountTitle}</div>
		<div className={style.discountDescription}>{discountDescription}</div>
		<div className={style.imageWrapper}><img src={image} alt="image" /></div>
	</div>
}