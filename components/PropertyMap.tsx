/**jsx @jsx */

import { Box, Grid, Heading } from '@chakra-ui/core';
import { DistanceInfoBox, Map } from '~components';

export const PropertyMap = ({ map, distances }) => {
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

			<Grid gridGap={2} gridTemplateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']}>
				{distances?.map((data, index) => (
					<DistanceInfoBox key={index} {...data} />
				))}
			</Grid>
			<Box mt='4'>
				<Map search={map?.address} ratio={16 / 9} borderRadius='0.5rem' boxShadow='lg' />
			</Box>
		</Box>
	) : null;
};

//
