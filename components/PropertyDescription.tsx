import { Box, Text } from '@chakra-ui/core';
export const PropertyDescription = ({ data }) => {
	return data?.content?.rendered ? (
		<Box>
			<Text
				fontFamily='inherit'
				dangerouslySetInnerHTML={{ __html: data?.content?.rendered }}></Text>
			<Box as='hr' my={8}></Box>
		</Box>
	) : null;
};
