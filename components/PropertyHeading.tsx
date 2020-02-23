import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Flex,
	Heading,
	Icon,
	Text,
} from '@chakra-ui/core';
import { PropertyActions, PropertyFacts, PropertyPrice } from '~components';
import { useMounted } from '~utls';

export const PropertyHeading = ({ data }) => {
	const isMounted = useMounted();
	const locations = data?._embedded && data?._embedded['wp:term'][0];

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
						dangerouslySetInnerHTML={{ __html: data?.title?.rendered }}></Heading>
					<Breadcrumb
						mb={6}
						spacing='8px'
						separator={<Icon color='gray.300' name='chevron-left' />}>
						{locations?.map(({ slug, name }) => (
							<BreadcrumbItem key={slug}>
								<Text fontSize='sm'>{name}</Text>
							</BreadcrumbItem>
						))}
						<BreadcrumbItem isCurrentPage>
							<BreadcrumbLink>{data?.title?.rendered}</BreadcrumbLink>
						</BreadcrumbItem>
					</Breadcrumb>
				</Box>
				{data?.min_price && isMounted && (
					<PropertyPrice price={data?.min_price} size={data?.min_size} />
				)}
			</Flex>
			<PropertyActions id={data?.id} hashId={data?.property_hash_id} />
			{isMounted && <PropertyFacts data={data} />}

			{data && <Box as='hr' my={8}></Box>}
		</Box>
	);
};
