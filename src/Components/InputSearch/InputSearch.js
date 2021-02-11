import { Input, InputLabel, InputAdornment, TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import style from "./style.module.css";

export const InputSearch = () => {
	return <div className={style.inputWrapper}>
		<SearchIcon className={style.searchIcon} />
		<input
			type="text"
			className={style.input}
			placeholder={'Какой магазин вам нужен?'}
		/>
	</div>
}