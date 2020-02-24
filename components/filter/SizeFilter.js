import { FormControl, FormLabel } from '@chakra-ui/core';
import { useState } from 'react';

export const SizeFilter = ({ value, onChange }) => {
	const [val, setVal] = useState({ min: 2, max: 10 });
	const [options, setOptions] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	return (
		<FormControl>
			<FormLabel htmlFor='location' textAlign='right' paddingRight='0'>
				المساحة
			</FormLabel>
			<InputRange
				direction='rtl'
				maxValue={20}
				minValue={0}
				value={val}
				onChange={value => setVal(value)}
			/>
		</FormControl>
	);
};
