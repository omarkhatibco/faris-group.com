import { Box, Heading, List, ListIcon, ListItem } from '@chakra-ui/core';

export const PropertyAmenities = ({ amenities }) => {
	return amenities?.length > 0 ? (
		<Box as='section'>
			<Heading as='h2' mb={6} color='green.500' fontSize={['xl', '3xl']} textTransform='uppercase'>
				مزايا المشروع
			</Heading>
			<List
				gridGap={2}
				display='grid'
				gridTemplateColumns={['repeat(2,calc(100% / 2))', 'repeat(3,calc(100% / 3))']}>
				{amenities?.map(({ slug, name }) => (
					<ListItem fontWeight='bold' key={slug}>
						<ListIcon icon='check' color='green.400' mr={0} ml={2} />
						{name}
					</ListItem>
				))}
			</List>
			<Box as='hr' my={8}></Box>
		</Box>
	) : null;
};
