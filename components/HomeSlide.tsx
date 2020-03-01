/**jsx @jsx */

import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	Button,
	Flex,
	Heading,
	Icon,
	Text,
} from '@chakra-ui/core';
import { css } from '@emotion/core';
import Link from 'next/link';
import { Image, InfoBox, PropertyPrice } from '~components';
import { formatNumber, getCdnUrl } from '~utls';

export const HomeSlide = ({ data }) => {
	const locations = data?.locations_data;
	const imageObj = data?._embedded && data?._embedded['wp:featuredmedia'][0];
	const firstAppartmentObj = data?.appartments?.[0];

	return (
		<Flex
			as='article'
			css={css({
				direction: 'rtl',
			})}
			flexDirection={['column', 'column', 'row']}
			justifyContent='stretch'
			overflow='hidden'
			minHeight='100%'
			position='relative'
			width='100%'>
			<Box
				width='100%'
				height={['50vh', '50vh', '100%']}
				position={['static', 'static', 'absolute']}
				top='0'
				right='0'
				left='0'
				bottom='0'>
				<Flex flexWrap='wrap' width='100%' height='100%'>
					<Box width={['100%', '100%', '65%']}>
						<Image
							width='100%'
							height='100%'
							objectFit='cover'
							src={`${getCdnUrl(imageObj?.source_url)}?quality=100`}
						/>
					</Box>
					<Box display={['none', 'none', 'block']} width={['100%', '100%', '35%']}>
						<Image
							width='100%'
							height='100%'
							objectFit='cover'
							src={`${getCdnUrl(imageObj?.source_url)}?quality=100`}
						/>
					</Box>
				</Flex>
			</Box>
			<Flex width='100%' justifyContent='flex-end' alignItems='stretch' zIndex={1}>
				<Flex
					width={['100%', '100%', '60%', '50%']}
					position='relative'
					justifyContent='center'
					alignItems='center'>
					<Box
						css={css({
							backgroundColor: 'rgba(255,255,255,1)',
							'@supports (backdrop-filter: none)': {
								backdropFilter: 'blur(16px)',
								backgroundColor: 'rgba(255,255,255,0.8)',
							},
						})}
						position='absolute'
						width={['100%', '100%', '120%']}
						height='100%'
						top='0'
						right='0'
						left='-20%'
						bottom='0'
						transform={['none', 'none', 'skewX(-15deg) translateX(-10%)']}
					/>
					<Flex
						pr={[8, 8, '25%', '20%']}
						pl={[8, 8, '10%']}
						justifyContent='center'
						width='100%'
						zIndex={1}>
						<Box
							zIndex={1}
							py={[8, 8, 32]}
							height='100%'
							width={['100%', '100%', 'auto']}
							maxWidth='100%'>
							<Heading
								as='h1'
								transition='all 300ms ease-in-out'
								className='property-title'
								color='green.500'
								fontSize={['4xl', '4xl', '4xl', '6xl']}
								textTransform='uppercase'
								dangerouslySetInnerHTML={{ __html: data?.title?.rendered }}></Heading>
							<Breadcrumb
								mb={4}
								spacing='4px'
								separator={<Icon color='green.500' name='chevron-left' />}>
								{[...locations]
									?.sort((a, b) => (a.parent > b.parent ? 1 : -1))
									?.map(({ slug, name }) => (
										<BreadcrumbItem key={slug}>
											<Text fontSize={['md', 'md', 'xl']}>{name}</Text>
										</BreadcrumbItem>
									))}
							</Breadcrumb>
							{firstAppartmentObj && (
								<Flex flexWrap='wrap' mx={-2} mb={[2, 2, 4]}>
									<Box p={2}>
										<InfoBox
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
								<PropertyPrice price={data?.min_price} size={data?.min_size} />
							)}
							<Box mt={8}>
								<Link as={`/properties/${data?.slug}`} href='/properties/[slug]'>
									<Button size='lg' cursor='pointer' variantColor='green' as='a'>
										عرض المشروع
									</Button>
								</Link>
							</Box>
						</Box>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};
