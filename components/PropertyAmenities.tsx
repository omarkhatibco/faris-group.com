import { Box, Heading, List, ListIcon, ListItem } from '@chakra-ui/core';
import { useContext } from 'react';
import { ConfigContext } from '~components';
export const PropertyAmenities = ({ amenities }) => {
	const { amenities: allAmenities } = useContext<any>(ConfigContext);

	return amenities?.length > 0 ? (
		<Box>
			<Heading
				as='h2'
				mb={6}
				color='green.500'
				fontSize={['xl', '3xl']}
				textTransform='uppercase'
				fontFamily='inherit'>
				مزايا المشروع
			</Heading>
			<List
				spacing={2}
				display='grid'
				gridTemplateColumns={['repeat(2,calc(100% / 2))', 'repeat(3,calc(100% / 3))']}>
				{allAmenities &&
					amenities?.map((key, index) => {
						const { title } = allAmenities?.find(({ slug }) => slug === key);
						return (
							<ListItem fontWeight='bold' key={key}>
								<ListIcon icon='check' color='green.400' mr={0} ml={2} />
								{title}
							</ListItem>
						);
					})}
			</List>
			<Box as='hr' my={8}></Box>
		</Box>
	) : null;
};
