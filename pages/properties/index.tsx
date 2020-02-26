/**jsx @jsx */
import {
	Box,
	Checkbox,
	Flex,
	FormControl,
	FormLabel,
	Grid,
	Heading,
	Spinner,
	Text,
} from '@chakra-ui/core';
import ky from 'ky-universal';
import { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';
import {
	BgImage,
	CityFilter,
	ConfigContext,
	Container,
	CurrencyContext,
	FeaturesFilter,
	PropertyGrid,
	RangeFilter,
	RoomsFilter,
	StatusesFilter,
	TypesFilter,
} from '~components';
import { formatMoneyPart, wp } from '~utls';

const Properties: NextPage = () => {
	const [currency] = useContext<any>(CurrencyContext);
	const { properties, currency: currencyObj } = useContext<any>(ConfigContext);
	const [data, setData] = useState<any>(null);
	const [aggregation, setAggregation] = useState<any>(null);
	const [loading, setLoading] = useState<any>(false);
	const [location, setLocation] = useState<any>(null);
	const [types, setTypes] = useState<any>([]);
	const [status, setStatus] = useState<any>(null);
	const [roomTypes, setRoomTypes] = useState<any>(null);
	const [features, setFeatures] = useState<any>([]);
	const [price, setPrice] = useState<any>({ min: '', max: '' });
	const [size, setSize] = useState<any>({ min: '', max: '' });
	const [installment, setInstallment] = useState<any>(false);
	const [citizenship, setCitizenship] = useState<any>(false);
	const [hasVilla, setHasVilla] = useState<any>(false);
	const [hasDuplex, setHasDuplex] = useState<any>(false);
	const [hasPenthouse, setHasPenthouse] = useState<any>(false);

	const currencyName = formatMoneyPart(0, currency)?.find(({ type }) => type === 'currency')?.value;

	const getData = async () => {
		setLoading(true);
		const searchParams = new URLSearchParams();
		searchParams.append('_embed', '');
		searchParams.append('per_page', '500');
		console.log(price);
		console.log(size);
		if (location) {
			searchParams.append('property_locations', location?.value);
		}
		if (types?.length > 0) {
			searchParams.append('property_types', types?.map(({ value }) => value)?.toString());
		}
		if (status) {
			searchParams.append('property_statuses', status?.value);
		}
		if (features?.length > 0) {
			searchParams.append('property_features', features?.map(({ value }) => value)?.toString());
		}

		if (installment) {
			searchParams.append('filter[meta_query][0][key]', 'is_installment_available');
			searchParams.append('filter[meta_query][0][value]', '1');
		}

		if (citizenship) {
			searchParams.append('filter[meta_query][1][key]', 'is_help_in_citizenship');
			searchParams.append('filter[meta_query][1][value]', '1');
		}

		if (hasDuplex) {
			searchParams.append('filter[meta_query][2][key]', 'has_duplex');
			searchParams.append('filter[meta_query][2][value]', '1');
		}
		if (hasVilla) {
			searchParams.append('filter[meta_query][3][key]', 'has_villa');
			searchParams.append('filter[meta_query][3][value]', '1');
		}
		if (hasPenthouse) {
			searchParams.append('filter[meta_query][4][key]', 'has_penthouse');
			searchParams.append('filter[meta_query][4][value]', '1');
		}

		if (roomTypes) {
			searchParams.append('filter[meta_query][9][key]', 'rooms_type');
			searchParams.append('filter[meta_query][9][value]', roomTypes?.value);
			searchParams.append('filter[meta_query][9][compare]', 'Like');
		}

		// if (!!price?.min) {
		// 	searchParams.append('filter[meta_query][7][key]', 'min_price');
		// 	searchParams.append('filter[meta_query][7][value]', `${price?.min * currencyObj[currency]}`);
		// 	searchParams.append('filter[meta_query][7][compare]', '>=');
		// }
		// if (!!price?.max) {
		// 	searchParams.append('filter[meta_query][8][key]', 'max_price');
		// 	searchParams.append('filter[meta_query][8][value]', `${price?.max * currencyObj[currency]}`);
		// 	searchParams.append('filter[meta_query][8][compare]', '<=');
		// }

		if (!!size?.min) {
			searchParams.append('filter[meta_query][9][key]', 'min_size');
			searchParams.append('filter[meta_query][9][value]', size?.min);
			searchParams.append('filter[meta_query][9][compare]', '>=');
		}
		if (!!size?.max) {
			searchParams.append('filter[meta_query][10][key]', 'max_size');
			searchParams.append('filter[meta_query][10][value]', size?.max);
			searchParams.append('filter[meta_query][10][compare]', '<=');
		}

		try {
			const response: any = await wp
				.get('property', {
					searchParams,
				})
				.json();

			setData(response);
		} catch (error) {
			console.error({ error });
		}
		setLoading(false);
	};

	const getAggregation = async () => {
		try {
			const aggregation: any = await await ky.get('/api/aggregation').json();

			setAggregation(aggregation);
		} catch (error) {
			console.error({ error });
		}
	};

	useEffect(() => {
		getAggregation();
	}, []);

	useEffect(() => {
		getData();
	}, [
		location,
		types,
		status,
		features,
		installment,
		citizenship,
		hasDuplex,
		hasPenthouse,
		hasVilla,
		roomTypes,
	]);

	return (
		<Box as='main' width='Full'>
			<Flex
				width='100%'
				overflow='hidden'
				position='relative'
				justifyItems='center'
				alignItems='center'>
				<BgImage src={properties?.IntroImage} alt='Istanbul bridge' />
				<Container
					zIndex={1}
					display='flex'
					flexWrap='wrap'
					alignItems='center'
					justifyContent='center'>
					<Box textAlign='center' width={[1 / 2]} pt={32} pb={12}>
						<Heading as='h1' mb='4' fontSize={['2xl', '5xl']} textTransform='uppercase'>
							ابحث عن عقارك
						</Heading>
						<Box>
							<Text fontSize={['sm', 'md']}>
								مجموعة الفارس متخصصة بالاستشارات العقارية والوساطة، مقرها في إسطنبول ، ولديها تعامل
								في مدن أخرى في تركيا، واتفاقيات عديدة مع شركات الإنشاء الكبرى في إسطنبول، تركّز
								اهتمامها على المستثمرين العقاريين الأجانب، والراغبين بالتملك في تركيا
							</Text>
						</Box>
					</Box>
				</Container>
			</Flex>
			<Box py={12}>
				<Container display='flex' flexWrap='wrap'>
					<Box as='aside' width={['100%', 1 / 4]} position='relative'>
						<Box
							// top='6rem'
							width='100%'
							boxShadow='xl'
							borderRadius='0.5rem'
							borderWidth='1px'
							borderColor='gray.100'
							p={4}>
							<Grid gap={4}>
								<CityFilter value={location} onChange={setLocation} />
								<TypesFilter value={types} onChange={setTypes} />
								<StatusesFilter value={status} onChange={setStatus} />
								<FeaturesFilter value={features} onChange={setFeatures} />
								<RoomsFilter
									value={roomTypes}
									onChange={setRoomTypes}
									types={aggregation?.rooms_type}
								/>

								{/* 		<RangeFilter
									name='price'
									title={`السعر (${currencyName})`}
									min={Number(aggregation?.min_price * currencyObj[currency] || 0).toFixed(0)}
									max={Number(aggregation?.max_price * currencyObj[currency] || 1000000).toFixed(0)}
									value={price}
									onChange={setPrice}
									handleFilter={getData}
								/> */}
								<RangeFilter
									name='size'
									title='المساحة (متر مربع)'
									min={aggregation?.min_size}
									max={aggregation?.max_size}
									value={size}
									onChange={setSize}
									handleFilter={getData}
								/>

								<FormControl>
									<FormLabel textAlign='right' paddingRight='0'>
										نوع الشقق
									</FormLabel>
									<Grid gridGap={1}>
										<Checkbox
											variantColor='green'
											isChecked={hasDuplex}
											onChange={e => setHasDuplex(e.target.checked)}>
											<Text as='span' pr={1}>
												دوبلكس
											</Text>
										</Checkbox>
										<Checkbox
											variantColor='green'
											isChecked={hasVilla}
											onChange={e => setHasVilla(e.target.checked)}>
											<Text as='span' pr={1}>
												فيلا
											</Text>
										</Checkbox>
										<Checkbox
											variantColor='green'
											isChecked={hasPenthouse}
											onChange={e => setHasPenthouse(e.target.checked)}>
											<Text as='span' pr={1}>
												بنتهاوس
											</Text>
										</Checkbox>
									</Grid>
								</FormControl>

								<FormControl>
									<FormLabel textAlign='right' paddingRight='0'>
										مزايا المشروع
									</FormLabel>
									<Grid gridGap={1}>
										<Checkbox
											variantColor='green'
											isChecked={installment}
											onChange={e => setInstallment(e.target.checked)}>
											<Text as='span' pr={1}>
												قابل للتقسيط
											</Text>
										</Checkbox>
										<Checkbox
											variantColor='green'
											isChecked={citizenship}
											onChange={e => setCitizenship(e.target.checked)}>
											<Text as='span' pr={1}>
												مؤهل للجنسية التركية 🇹🇷
											</Text>
										</Checkbox>
									</Grid>
								</FormControl>
							</Grid>
						</Box>
					</Box>
					<Box as='article' width={['100%', 3 / 4]} pr={[0, 8]}>
						{!loading ? (
							<Grid gridGap={8} gridTemplateColumns={['repeat(1,1fr)', 'repeat(3,1fr)']}>
								{data?.map(obj => (
									<PropertyGrid key={obj?.id} data={obj} />
								))}
							</Grid>
						) : (
							<Flex height='100%' py={8} justifyContent='center' alignItems='center'>
								<Spinner size='xl' color='green.500' thickness='3px' />
							</Flex>
						)}
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

export default Properties;
