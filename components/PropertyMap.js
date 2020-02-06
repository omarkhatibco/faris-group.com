/**jsx @jsx */
import { useContext } from 'react';
import { ConfigContext } from '~components';
import { Box, Heading, AspectRatioBox, Image, Flex, Button } from '@chakra-ui/core';
import { css } from '@emotion/core';

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
			<p>TBD</p>
			<p>المسافات إلي المطار مول مدرسة</p>

			{/*
			<AspectRatioBox ratio={16 / 9} borderRadius='0.5rem'>
				<Box
					as='iframe'
					src={`https://www.google.com/maps/embed/v1/place?q=${map?.value}+&language=ar&zoom=${map?.zoom}&key=${apiKeys?.googleMap}`}
					frameBorder='0'
					borderRadius='0.5rem'
					boxShadow='lg'
				/>
			</AspectRatioBox>

		*/}
			<AspectRatioBox ratio={16 / 9} borderRadius='0.5rem' mt='4'>
				<Flex
					justifyContent='center'
					alignItems='center'
					overflow='hidden'
					frameBorder='0'
					borderRadius='0.5rem'
					boxShadow='lg'>
					<Image
						src='/images/istanbul.map.2.jpg'
						width='100%'
						position='absolute'
						top='0'
						bottom='0'
						left='0'
						right='0'
						objectFit={['cover', 'cover']}
						css={css({
							filter: 'blur(6px)',
						})}
					/>
					<Button
						variantColor='green'
						as='a'
						target='_blank'
						href={`https://maps.google.com/?q=${map?.address}`}>
						فتح في برنامج الخرائط
					</Button>
				</Flex>
			</AspectRatioBox>

			<Box as='hr' my={8}></Box>
		</Box>
	) : null;
};

//
