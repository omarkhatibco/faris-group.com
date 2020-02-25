import { FormControl, FormLabel } from '@chakra-ui/core';
import { useEffect, useState } from 'react';
import { MultiSelect } from '~components';
import { wp } from '~utls';

export const FeaturesFilter = ({ value, onChange }) => {
	const [options, setOptions] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getCities = async () => {
		setIsLoading(true);

		const searchParams = new URLSearchParams();

		searchParams.append('per_page', '100');
		try {
			const data: any = await wp.get('property_features', { searchParams }).json();
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
			<FormLabel htmlFor='features' textAlign='right' paddingRight='0'>
				المزايا
			</FormLabel>
			<MultiSelect
				isMulti
				value={value}
				onChange={onChange}
				name='features'
				options={options}
				isLoading={isLoading}
				placeholder='اختر المزايا'
			/>
		</FormControl>
	);
};
