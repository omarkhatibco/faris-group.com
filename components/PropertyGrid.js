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
	Text,
	useTheme,
} from '@chakra-ui/core';
import { css } from '@emotion/core';
import Link from 'next/link';
import { Image, InfoBox, PropertyPrice } from '~components';
import { formatNumber, getCdnUrl } from '~utls';

export const PropertyGrid = ({ data }) => {
	const theme = useTheme();
	const locations = data?._embedded && data?._embedded['wp:term'][0];
	const imageObj = data?._embedded && data?._embedded['wp:featuredmedia'][0];
	const firstAppartmentObj = data?.appartments?.[0];

	return (
		<Box
			cursor='pointer'
			as='article'
			width='100%'
			height='100%'
			borderWidth='1px'
			borderColor='gray.100'
			borderRadius='0.5rem'
			transition='all 300ms ease-in-out'
			boxShadow='md'
			overflow='hidden'
			backgroundColor='white'
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
					<Box as='article'>
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
										{data?.is_installment_available && (
											<Badge mt={1} fontSize='xs' variantColor='green'>
												 قابل للتقسيط
											</Badge>
										)}
										{data?.is_help_in_citizenship && (
											<Badge mt={1} fontSize='xs' variantColor='green'>
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
							fontSize='xl'
							textTransform='uppercase'
							dangerouslySetInnerHTML={{ __html: data?.title?.rendered }}></Heading>
						<Breadcrumb
							mb={4}
							spacing='4px'
							separator={<Icon color='gray.300' name='chevron-left' />}>
							{[...locations]
								?.sort((a, b) => (a.parent > b.parent ? 1 : -1))
								?.map(({ slug, name }) => (
									<BreadcrumbItem key={slug}>
										<Text fontSize='sm'>{name}</Text>
									</BreadcrumbItem>
								))}
						</Breadcrumb>
						<Box
							mb={4}
							overflow='hidden'
							fontSize='sm'
							css={css({
								display: '-webkit-box',
								WebkitLineClamp: 2,
								WebkitBoxOrient: 'vertical',
							})}
							dangerouslySetInnerHTML={{ __html: data?.excerpt?.rendered }}></Box>
						{firstAppartmentObj && (
							<Flex flexWrap='wrap' mx={-2} mb={4}>
								<Box p={2}>
									<InfoBox
										isSmall
										width={['100%', 'auto']}
										title=' أنواع الشقق (من)'
										icon='building'
										value={`${formatNumber(firstAppartmentObj.rooms_count)} + ${formatNumber(
											firstAppartmentObj.salons_count
										)}`}
									/>
								</Box>
								<Box p={2}>
									{data?.min_size !== 0 && (
										<InfoBox
											isSmall
											width={['100%', 'auto']}
											title='المساحة (من)'
											icon='area'
											value={formatNumber(data?.min_size)}
											suffix='متر<sup>٢</sup>'
										/>
									)}
								</Box>
							</Flex>
						)}
						{data?.min_price !== '0' && (
							<PropertyPrice isSmall price={data?.min_price} size={data?.min_size} />
						)}
					</Box>
				</a>
			</Link>
		</Box>
	);
};
