import { Input, InputLabel, InputAdornment } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

export const InputSearch = () => {
	return <div>
		<Input startAdornment={
			<InputAdornment position={'start'}>
				<SearchIcon />
			</InputAdornment>
		}
		/>
	</div>
}