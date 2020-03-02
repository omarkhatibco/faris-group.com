/**jsx @jsx */
import { Box, Heading } from '@chakra-ui/core';
import { Video } from '.';

export const PropertyVideo = ({ url }) => {
	return url ? (
		<Box as='section'>
			<Heading as='h2' mb={6} color='green.500' fontSize={['xl', '3xl']} textTransform='uppercase'>
				فيديو المشروع
			</Heading>
			<Video url={url} />
			<Box as='hr' my={8}></Box>
		</Box>
	) : null;
};
