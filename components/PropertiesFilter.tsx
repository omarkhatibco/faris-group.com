import {
	Checkbox,
	CheckboxGroup,
	FormControl,
	FormLabel,
	Grid,
	Select,
	Text,
} from '@chakra-ui/core';
import { useContext } from 'react';
import { ConfigContext } from '~components';

export const PropertiesFilter = ({ filter, setFilter }) => {
	const { locations, amenities } = useContext<any>(ConfigContext);
	const selectedLocation = locations?.find(({ slug }) => slug === filter?.location);

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
			<FormControl>
				<FormLabel htmlFor='location' textAlign='right' paddingRight='0'>
					المدينة
				</FormLabel>
				<Select
					focusBorderColor='green.500'
					id='location'
					placeholder='اختار المدينة'
					onChange={handleFilter}>
					{locations?.map(({ slug, title }) => (
						<option value={slug}>{title}</option>
					))}
				</Select>
			</FormControl>
			<FormControl>
				<FormLabel htmlFor='sublocation' textAlign='right' paddingRight='0'>
					الحي
				</FormLabel>
				<Select
					focusBorderColor='green.500'
					id='sublocation'
					placeholder='اختار الحي'
					onChange={handleFilter}>
					{selectedLocation?.fgw_sublocations?.map(({ slug, title }) => (
						<option value={slug}>{title}</option>
					))}
				</Select>
			</FormControl>
			<FormControl>
				<FormLabel htmlFor='price' textAlign='right' paddingRight='0'>
					السعر
				</FormLabel>
			</FormControl>
			<FormControl>
				<FormLabel htmlFor='size' textAlign='right' paddingRight='0'>
					المساحة
				</FormLabel>
			</FormControl>
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
