/**jsx @jsx */
import { useContext } from 'react';
import { ConfigContext } from '~components';
import { Box, Heading, AspectRatioBox } from '@chakra-ui/core';

export const PropertyMap = ({ data }) => {
	const { apiKeys } = useContext(ConfigContext);

	const { map } = data;

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

			<AspectRatioBox ratio={16 / 9} borderRadius='0.5rem'>
				<Box
					as='iframe'
					src={`https://www.google.com/maps/embed/v1/place?q=${map?.value}&language=ar&zoom=${map.zoom}&key=${apiKeys?.googleMap}`}
					frameBorder='0'
					borderRadius='0.5rem'
					boxShadow='lg'
				/>
			</AspectRatioBox>

			<Box as='hr' my={8}></Box>
		</Box>
	) : null;
};

// https://www.google.com/maps/embed/v1/place?q=41.004686,28.6536052&key=AIzaSyDKXWaTLHVu0rdDet0Zgcon1j5C9c_8gtE
