import { Box } from '@chakra-ui/core';
export const PropertyDescription = ({ data }) => {
	return data?.content?.rendered ? (
		<Box>
			<Box fontFamily='inherit' dangerouslySetInnerHTML={{ __html: data?.content?.rendered }}></Box>
			<Box as='hr' my={8}></Box>
		</Box>
	) : null;
};
