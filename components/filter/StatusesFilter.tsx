import { FormControl, FormLabel } from '@chakra-ui/core';
import { useEffect, useState } from 'react';
import { wp } from '~utls';
import { MultiSelect } from '../';

export const StatusesFilter = ({ value, onChange }) => {
	const [options, setOptions] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getCities = async () => {
		setIsLoading(true);

		const searchParams = new URLSearchParams();

		searchParams.append('per_page', '100');
		try {
			const data: any = await wp.get('property_statuses', { searchParams }).json();
			const options = data?.map(({ id, name, parent }, index) => ({
				value: id,
				label: parent === 0 ? name : `- ${name}`,
			}));
			setOptions(options);
		} catch (error) {}
		setIsLoading(false);
	};

	useEffect(() => {
		getCities();
	}, []);

	return (
		<FormControl>
			<FormLabel htmlFor='status' textAlign='right' paddingRight='0'>
				الحالة
			</FormLabel>
			<MultiSelect
				value={value}
				onChange={onChange}
				name='status'
				options={options}
				isLoading={isLoading}
				placeholder='اختر الحالة'
			/>
		</FormControl>
	);
};
