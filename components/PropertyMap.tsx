/**jsx @jsx */

import { Box, Heading } from '@chakra-ui/core';
import { Map } from '.';

export const PropertyMap = ({ map }) => {
	return map ? (
		<Box>
			<Heading
				as='h2'
				mb={6}
				color='green.500'
				fontSize={['xl', '3xl']}
				textTransform='uppercase'
				fontFamily='inherit'>
				الموقع
			</Heading>
			<p>TBD</p>
			<p>المسافات إلي المطار مول مدرسة</p>
			<Box mt='4'>
				<Map search={map?.address} ratio={16 / 9} borderRadius='0.5rem' boxShadow='lg' />
			</Box>
		</Box>
	) : null;
};

//
