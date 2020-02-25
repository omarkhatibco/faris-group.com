import { FormControl, FormLabel } from '@chakra-ui/core';
import { RangeField } from '~components';

export const RangeFilter = ({ title, name, value, onChange, min, max, handleFilter }) => {
	return (
		<FormControl>
			<FormLabel htmlFor='size-min' textAlign='right' paddingRight='0'>
				{title}
			</FormLabel>
			<RangeField
				value={value}
				onChange={onChange}
				name='size'
				min={min}
				max={max}
				handleFilter={handleFilter}
			/>
		</FormControl>
	);
};
