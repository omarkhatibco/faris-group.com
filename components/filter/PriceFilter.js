import { FormControl, FormLabel } from '@chakra-ui/core';
import { useState } from 'react';

export const PriceFilter = ({ value, onChange }) => {
	const [val, setVal] = useState({ min: 2, max: 10 });
	const [options, setOptions] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	return (
		<FormControl>
			<FormLabel htmlFor='location' textAlign='right' paddingRight='0'>
				السعر
			</FormLabel>
		</FormControl>
	);
};
