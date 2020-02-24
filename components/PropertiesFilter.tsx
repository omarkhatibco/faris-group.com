import { Checkbox, CheckboxGroup, FormControl, FormLabel, Grid, Text } from '@chakra-ui/core';
import {
	CityFilter,
	FeaturesFilter,
	PriceFilter,
	SizeFilter,
	StatusesFilter,
	TypesFilter,
} from './filter';

export const PropertiesFilter = ({ filter, setFilter }) => {
	const handleFilter = e => {
		const key = e.target.id;
		const value = e.target.value;
		setFilter({
			...filter,
			[key]: value,
		});
	};

	return (
		<Grid gap={4}>
			<CityFilter value={filter?.location} onChange={handleFilter} />
			<TypesFilter value={filter?.location} onChange={handleFilter} />
			<StatusesFilter value={filter?.location} onChange={handleFilter} />
			<FeaturesFilter value={filter?.location} onChange={handleFilter} />
			<PriceFilter value={filter?.location} onChange={handleFilter} />
			<SizeFilter value={filter?.location} onChange={handleFilter} />

			<FormControl>
				<FormLabel textAlign='right' paddingRight='0'>
					مزايا المشروع
				</FormLabel>
				<CheckboxGroup variantColor='green'>
					<Checkbox value='installment'>
						<Text as='span' pr={1}>
							قابل للتقسيط
						</Text>
					</Checkbox>
					<Checkbox value='is_help_in_citizenship'>
						<Text as='span' pr={1}>
							مؤهل للجنسية التركية 🇹🇷
						</Text>
					</Checkbox>
				</CheckboxGroup>
			</FormControl>
		</Grid>
	);
};
