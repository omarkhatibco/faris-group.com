import { Box, List, ListItem, ListIcon, Heading, Text } from '@chakra-ui/core';
export const PropertyAmenities = ({ data }) => {
	return (
		<Box>
			TBD
			<Heading
				as='h2'
				mb={6}
				color='green.500'
				fontSize={['xl', '3xl']}
				textTransform='uppercase'
				fontFamily='inherit'>
				حقائق وميزات
			</Heading>
			<Box as='hr' my={8}></Box>
			TBD
			<Heading
				as='h2'
				mb={6}
				color='green.500'
				fontSize={['xl', '3xl']}
				textTransform='uppercase'
				fontFamily='inherit'>
				مزايا المشروع
			</Heading>
			<List spacing={2} display='grid' gridTemplateColumns='repeat(3,calc(100% / 3))'>
				{data?.features?.map(({ title }, index) => (
					<ListItem fontWeight='bold' key={index}>
						<ListIcon icon='check' color='green.400' mr={0} ml={2} />
						{title}
					</ListItem>
				))}
			</List>
			<Box as='hr' my={8}></Box>
		</Box>
	);
};
