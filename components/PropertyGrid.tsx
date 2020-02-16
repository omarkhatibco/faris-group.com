/**jsx @jsx */
import {
	AspectRatioBox,
	Badge,
	Box,
	Breadcrumb,
	BreadcrumbItem,
	Flex,
	Heading,
	Icon,
	Image,
	Text,
	useTheme,
} from '@chakra-ui/core';
import { css } from '@emotion/core';
import Link from 'next/link';
import { useContext } from 'react';
import { ConfigContext, InfoBox, PropertyPrice } from '~components';
import { formatNumber, getCdnUrl } from '~utls';

export const PropertyGrid = ({ data }) => {
	const theme = useTheme();
	const { locations } = useContext<any>(ConfigContext);
	const locationObj = locations?.find(({ slug }) => slug === data?.location);
	const sublocationObj = locationObj?.fgw_sublocations?.find(
		({ slug }) => slug === data?.sublocation
	);
	const imageObj = data?._embedded && data?._embedded['wp:featuredmedia'][0];
	const firstAppartmentObj = data?.appartments?.[0];

	return (
		<Box
			cursor='pointer'
			as='article'
			width='100%'
			borderWidth='1px'
			borderColor='gray.100'
			borderRadius='0.5rem'
			transition='all 300ms ease-in-out'
			boxShadow='md'
			overflow='hidden'
			css={css({
				':hover': {
					boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
					'& .property-image': {
						transform: 'scale(1.02)',
					},
					'& .property-title': {
						color: theme.colors.green[700],
					},
				},
			})}>
			<Link as={`/properties/${data?.slug}`} href='/properties/[slug]'>
				<a>
					<Box>
						<AspectRatioBox ratio={16 / 9} borderRadius='0.5rem'>
							<Flex justifyContent='center' alignItems='center' overflow='hidden'>
								<Image
									transition='all 300ms ease-in-out'
									className='property-image'
									src={`${getCdnUrl(imageObj?.source_url)}?w=400&quality=100`}
									width='100%'
									height='100%'
									position='absolute'
									top='0'
									bottom='0'
									left='0'
									right='0'
									objectFit='cover'
								/>
								<Flex
									position='absolute'
									top='0'
									bottom='0'
									left='0'
									right='0'
									justifyContent='flex-start'>
									<Flex mt={1} flexDirection='column' px={1} alignItems='flex-start'>
										{data?.payment_methods?.includes('installment') && (
											<Badge mt={1} fontSize='sm' variantColor='green'>
												 قابل للتقسيط
											</Badge>
										)}
										{data?.is_help_in_citizenship && (
											<Badge mt={1} fontSize='sm' variantColor='green'>
												مؤهل للجنسية التركية 🇹🇷
											</Badge>
										)}
									</Flex>
								</Flex>
							</Flex>
						</AspectRatioBox>
					</Box>
					<Box p={4}>
						<Heading
							as='h1'
							transition='all 300ms ease-in-out'
							className='property-title'
							color='green.500'
							fontSize='2xl'
							textTransform='uppercase'
							fontFamily='inherit'
							dangerouslySetInnerHTML={{ __html: data?.title?.rendered }}></Heading>
						<Breadcrumb
							mb={4}
							spacing='4px'
							separator={<Icon color='gray.300' name='chevron-left' />}>
							<BreadcrumbItem>
								<Text fontFamily='inherit' fontSize='sm'>
									{locationObj?.title}
								</Text>
							</BreadcrumbItem>
							<BreadcrumbItem>
								<Text fontFamily='inherit' fontSize='sm'>
									{sublocationObj?.title}
								</Text>
							</BreadcrumbItem>
						</Breadcrumb>
						<Box
							mb={4}
							fontFamily='inherit'
							overflow='hidden'
							css={css({
								display: '-webkit-box',
								'-webkit-line-clamp': '2',
								'-webkit-box-orient': 'vertical',
							})}
							dangerouslySetInnerHTML={{ __html: data?.excerpt?.rendered }}></Box>
						{firstAppartmentObj && (
							<Flex flexWrap='wrap' mx={-2} mb={4}>
								<Box p={2}>
									<InfoBox
										width={['100%', 'auto']}
										title=' أنواع الشقق (تبدأ من)'
										icon='building'
										value={`${formatNumber(firstAppartmentObj.rooms_count)} + ${formatNumber(
											firstAppartmentObj.salons_count
										)}`}
									/>
								</Box>
								<Box p={2}>
									{firstAppartmentObj.min_size && (
										<InfoBox
											width={['100%', 'auto']}
											title='المساحة (تبدأ من)'
											icon='area'
											value={formatNumber(firstAppartmentObj.min_size)}
											suffix='متر<sup>٢</sup>'
										/>
									)}
								</Box>
							</Flex>
						)}
						{firstAppartmentObj?.price && <PropertyPrice firstAppartmentObj={firstAppartmentObj} />}
					</Box>
				</a>
			</Link>
		</Box>
	);
};
