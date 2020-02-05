/**jsx @jsx */
import { useContext } from 'react';
import { ConfigContext } from '~components';
import { Box, Heading, AspectRatioBox } from '@chakra-ui/core';

export const PropertyMap = ({ data }) => {
	const { apiKeys } = useContext(ConfigContext);

	const { map } = data;

	console.log(
		`https://www.google.com/maps/embed/v1/place?q=${map?.value}+([$urlencodedcustomnamehere])&language=ar&zoom=${map?.zoom}&key=${apiKeys?.googleMap}`
	);

	return map && apiKeys ? (
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
			<p>المسافات إلي المطار مول مدرسة</p>

			<AspectRatioBox ratio={16 / 9} borderRadius='0.5rem'>
				<Box
					as='iframe'
					src={`https://www.google.com/maps/embed/v1/place?q=${map?.value}+&language=ar&zoom=${map?.zoom}&key=${apiKeys?.googleMap}`}
					frameBorder='0'
					borderRadius='0.5rem'
					boxShadow='lg'
				/>
			</AspectRatioBox>

			<Box as='hr' my={8}></Box>
		</Box>
	) : null;
};
