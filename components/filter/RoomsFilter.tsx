import { FormControl, FormLabel } from '@chakra-ui/core';
import { MultiSelect } from '..';

export const RoomsFilter = ({ value, onChange, types }) => {
	const options = types ? [...types]?.sort()?.map(type => ({ value: type, label: type })) : [];
	return (
		<FormControl>
			<FormLabel htmlFor='rooms' textAlign='right' paddingRight='0'>
				الغرف
			</FormLabel>
			<MultiSelect
				value={value}
				onChange={onChange}
				name='rooms'
				options={options}
				isLoading={!types}
				placeholder='اختر نوع الغرف'
			/>
		</FormControl>
	);
};
