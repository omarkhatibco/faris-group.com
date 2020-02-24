import { FormControl, FormLabel } from '@chakra-ui/core';
import { useState } from 'react';
import { RangeField } from '~components';

export const PriceFilter = ({ value, onChange }) => {
	const [val, setVal] = useState({ min: 2, max: 10 });
	const [options, setOptions] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	return (
		<FormControl>
			<FormLabel htmlFor='price-min' textAlign='right' paddingRight='0'>
				السعر
			</FormLabel>
			<RangeField name='price' placeholderMin='1' placeholderMax='2' />
		</FormControl>
	);
};
