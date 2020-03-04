/**jsx @jsx */
import {
	Box,
	Button,
	Checkbox,
	Flex,
	FormControl,
	FormLabel,
	Grid,
	Heading,
	Spinner,
	Text,
} from '@chakra-ui/core';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import {
	BgImage,
	CityFilter,
	ConfigContext,
	Container,
	FeaturesFilter,
	PropertyGrid,
	RoomsFilter,
	StatusesFilter,
	TypesFilter,
} from '~components';
import { api, wp } from '~utls';

const Properties: NextPage = () => {
	const { asPath } = useRouter();
	const [isFilterOpened, setIsFilterOpened] = useState(false);

	const { properties } = useContext<any>(ConfigContext);
	const [loading, setLoading] = useState<any>(false);
	const [data, setData] = useState<any>([]);
	const [page, setPage] = useState<any>(1);
	const [maxPage, setMaxPage] = useState(0);
	const [aggregation, setAggregation] = useState<any>(null);
	const [location, setLocation] = useState<any>(null);
	const [types, setTypes] = useState<any>([]);
	const [status, setStatus] = useState<any>(null);
	const [roomTypes, setRoomTypes] = useState<any>(null);
	const [features, setFeatures] = useState<any>([]);
	// const [price, setPrice] = useState<any>({ min: '', max: '' });
	// const [size, setSize] = useState<any>({ min: '', max: '' });
	const [installment, setInstallment] = useState<any>(false);
	const [citizenship, setCitizenship] = useState<any>(false);
	const [hasVilla, setHasVilla] = useState<any>(false);
	const [hasDuplex, setHasDuplex] = useState<any>(false);
	const [hasPenthouse, setHasPenthouse] = useState<any>(false);

	const hasMore = page <= maxPage;
	// const currencyName = formatMoneyPart(0, currency)?.find(({ type }) => type === 'currency')?.value;

	const transitions = useTransition(data, item => item.id, {
		from: { opacity: 0, height: 0 },
		enter: { opacity: 1, height: 'auto' },
		leave: { display: 'none' },
		trail: 200,
		unique: true,
		reset: true,
	});

	const getData = async (isReset = false) => {
		setLoading(true);

		const searchParams = new URLSearchParams();
		searchParams.append('_embed', '');
		searchParams.append('page', isReset ? 1 : page);
		searchParams.append('per_page', '5');

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

		try {
			const newData: any = await wp
				.get('property', {
					searchParams,
					hooks: {
						afterResponse: [
							(input, options, response) => {
								setMaxPage(parseInt(response.headers.get('X-WP-TotalPages'), 10));
							},
						],
					},
				})
				.json();
			if (isReset) {
				setData([...newData]);
			} else {
				setData([...data, ...newData]);
			}

			setPage(isReset ? 2 : page + 1);
		} catch (error) {
			console.error({ error });
		}
		setLoading(false);
	};

	const getAggregation = async () => {
		try {
			const aggregation: any = await await api.get('aggregation').json();

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
	}, []);

	useEffect(() => {
		getData(true);
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
		<Box width='Full'>
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
					width='100%'
					justifyContent='center'>
					<Box textAlign='center' width={[1 / 2]} pt={32} pb={12}>
						<Heading as='h1' mb='4' fontSize={['2xl', '5xl']} textTransform='uppercase'>
							ابحث عن عقارك
						</Heading>
						<Box>
							<Text fontSize={['sm', 'md']}>ابحث عن عقارك بالمواصفات التي ترغب بها</Text>
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
							p={4}
							mb={[8, 0]}>
							<Flex
								justifyContent='stretch'
								display={['flex', 'none']}
								transition=' all 150ms ease-in-out'
								pb={isFilterOpened ? 8 : 0}>
								<Button
									variantColor='green'
									width='100%'
									onClick={() => setIsFilterOpened(!isFilterOpened)}>
									تصفية البحث
								</Button>
							</Flex>
							<Box
								height='auto'
								overflow={['hidden', 'visible']}
								maxHeight={isFilterOpened ? '1000px' : ['0', '1000px']}
								transition=' all 150ms ease-in-out'>
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
					</Box>
					<Box as='main' width={['100%', 3 / 4]} pr={[0, 8]}>
						{data?.length === 0 && loading && (
							<Flex height='100%' py={8} justifyContent='center' alignItems='center'>
								<Spinner size='xl' color='green.500' thickness='3px' />
							</Flex>
						)}
						{data?.length > 0 && (
							<Grid gridGap={8} gridTemplateColumns={['repeat(1,1fr)', 'repeat(3,1fr)']}>
								{transitions.map(({ item, props, key }) => (
									<animated.div key={key} style={props}>
										<PropertyGrid key={item?.id} data={item} />
									</animated.div>
								))}
							</Grid>
						)}
						{hasMore && (
							<Flex justifyContent='center' mt={4}>
								<Button variantColor='green' isLoading={loading} onClick={() => getData()}>
									تحميل المزيد
								</Button>
							</Flex>
						)}
					</Box>
				</Container>
			</Box>
			<NextSeo
				title='العقارات'
				description={
					'ابحث عن عقارك بالمواصفات التي ترغب بها, يمكنك تخصيص بحثك بالنسبة للعديد من العناصر مثل المدينة و المنطقة أو نوع العقار كتجاري او سكني او حسب بعض المزايا المتوافرة في العقار أو عدد و توزيع الغرف'
				}
				openGraph={{
					url: `https://faris-group.com${asPath}`,
				}}
				canonical={`https://www.faris-group.com${asPath}`}
			/>
		</Box>
	);
};

export default Properties;
