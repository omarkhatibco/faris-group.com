import { Spinner, Flex, Box, Grid, Image, IconButton, Heading } from '@chakra-ui/core';
export const PropertyHeading = ({ data }) => {
	return (
		<Box>
			<Heading
				as='h1'
				mb='2'
				color='green.500'
				fontSize={['2xl', '5xl']}
				textTransform='uppercase'
				fontFamily='inherit'
				dangerouslySetInnerHTML={{ __html: data?.title?.rendered }}></Heading>
			<Box as='hr' my={8}></Box>
		</Box>
	);
};
