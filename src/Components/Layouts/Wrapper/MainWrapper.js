import mainWrapperStyle from './mainWrapperStyle.module.css'

const MainWrapper = ({ children }) => {

	return <div className={mainWrapperStyle.wrapper}>
		{children}
	</div>
}

export { MainWrapper }