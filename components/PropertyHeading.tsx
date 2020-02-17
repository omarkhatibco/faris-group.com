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
import { ConfigContext, PropertyActions, PropertyFacts, PropertyPrice } from '~components';
import { useMounted } from '~utls';

export const PropertyHeading = ({ data }) => {
	const isMounted = useMounted();
	const { locations } = useContext<any>(ConfigContext);
	const locationObj = locations?.find(({ slug }) => slug === data?.location);
	const sublocationObj = locationObj?.fgw_sublocations?.find(
		({ slug }) => slug === data?.sublocation
	);

	return (
		<Box as='section'>
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

					{isMounted && (
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
								<BreadcrumbLink>{sublocationObj?.title}</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbItem isCurrentPage>
								<BreadcrumbLink>{data?.title?.rendered}</BreadcrumbLink>
							</BreadcrumbItem>
						</Breadcrumb>
					)}
				</Box>
				{data?.appartments?.[0]?.price && isMounted && (
					<PropertyPrice firstAppartmentObj={data?.appartments?.[0]} />
				)}
			</Flex>
			<PropertyActions data={data} />
			{isMounted && <PropertyFacts data={data} />}

			{data && <Box as='hr' my={8}></Box>}
		</Box>
	);
};
