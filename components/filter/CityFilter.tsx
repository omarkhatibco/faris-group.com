import { FormControl, FormLabel } from '@chakra-ui/core';
import { useEffect, useState } from 'react';
import { orderTaxonomyByParent, wp } from '~utls';
import { MultiSelect } from '../Multiselect';

export const CityFilter = ({ value, onChange }) => {
	const [options, setOptions] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getCities = async () => {
		setIsLoading(true);

		const searchParams = new URLSearchParams();

		searchParams.append('orderby', 'name');
		searchParams.append('per_page', '100');
		try {
			const data: any = await wp.get('property_locations', { searchParams }).json();
			const groupedTaxonomy = orderTaxonomyByParent(0, data);
			const orderdOptions = groupedTaxonomy.flatMap(({ id, name, parent, children }) => [
				{ parent, id, name },
				...children,
			]);
			const options = orderdOptions?.map(({ id, name, parent }, index) => ({
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
			<FormLabel htmlFor='location' textAlign='right' paddingRight='0'>
				المدينة
			</FormLabel>
			<MultiSelect
				value={value}
				onChange={onChange}
				name='location'
				options={options}
				isLoading={isLoading}
				placeholder='اختر المدينة'
			/>
		</FormControl>
	);
};
