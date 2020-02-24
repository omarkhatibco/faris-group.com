import { FormControl, FormLabel } from '@chakra-ui/core';
import { useState } from 'react';
import { RangeField } from '~components';

export const SizeFilter = ({ value, onChange, aggregation }) => {
	const [val, setVal] = useState({ min: 2, max: 10 });
	const [options, setOptions] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	return (
		<FormControl>
			<FormLabel htmlFor='size-min' textAlign='right' paddingRight='0'>
				المساحة
			</FormLabel>
			<RangeField name='size' min={aggregation?.min_size} max={aggregation?.max_size} />
		</FormControl>
	);
};
