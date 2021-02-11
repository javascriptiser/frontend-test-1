import style from './style.module.css'

const MainWrapper = ({ children }) => {

	return <div className={style.wrapper}>
		{children}
	</div>
}

export { MainWrapper }