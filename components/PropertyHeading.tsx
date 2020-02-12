import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Flex,
	Heading,
	Icon,
} from '@chakra-ui/core';
import Link from 'next/link';
import { useContext } from 'react';
import { ConfigContext, PropertyFacts, PropertyPrice } from '~components';

export const PropertyHeading = ({ data }) => {
	const { locations } = useContext<any>(ConfigContext);
	const { location, sublocation } = data;
	const locationObj = locations?.find(({ slug }) => slug === location);
	const sublocationObj = locationObj?.fgw_sublocations?.find(({ slug }) => slug === sublocation);

	return (
		<Box>
			<Flex mb={2} alignItems='center' flexWrap='wrap'>
				<Box width={['100%', 'auto']}>
					<Heading
						as='h1'
						mb='2'
						color='green.500'
						fontSize='5xl'
						textTransform='uppercase'
						fontFamily='inherit'
						dangerouslySetInnerHTML={{ __html: data?.title?.rendered }}></Heading>
					<Breadcrumb
						mb={6}
						spacing='8px'
						separator={<Icon color='gray.300' name='chevron-left' />}>
						<BreadcrumbItem>
							<Link href='/'>
								<BreadcrumbLink>{locationObj?.title}</BreadcrumbLink>
							</Link>
						</BreadcrumbItem>
						<BreadcrumbItem>
							<Link href='/'>
								<BreadcrumbLink>{sublocationObj?.title}</BreadcrumbLink>
							</Link>
						</BreadcrumbItem>

						<BreadcrumbItem isCurrentPage>
							<BreadcrumbLink>{data?.title?.rendered}</BreadcrumbLink>
						</BreadcrumbItem>
					</Breadcrumb>
				</Box>
				<PropertyPrice appartments={data?.appartments} />
			</Flex>

			<PropertyFacts data={data} />
			<Box as='hr' my={8}></Box>
		</Box>
	);
};
