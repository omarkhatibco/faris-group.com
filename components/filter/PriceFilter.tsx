import { FormControl, FormLabel } from '@chakra-ui/core';
import { useState } from 'react';
import InputRange from 'react-input-range';

export const PriceFilter = ({ value, onChange }) => {
	const [val, setVal] = useState<any>({ min: 2, max: 10 });
	const [options, setOptions] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	return (
		<FormControl>
			<FormLabel htmlFor='location' textAlign='right' paddingRight='0'>
				السعر
			</FormLabel>
			<InputRange maxValue={20} minValue={0} value={val} onChange={value => setVal(value)} />
			);
		</FormControl>
	);
};
