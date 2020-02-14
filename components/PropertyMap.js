/**jsx @jsx */

import { Box, Flex, Grid, Heading } from '@chakra-ui/core';
import { useContext } from 'react';
import { ConfigContext, DistanceInfoBox, InfoBox, Map } from '~components';

export const PropertyMap = ({ map, distances, location, sublocation }) => {
	const { locations } = useContext(ConfigContext);
	const locationObj = locations?.find(({ slug }) => slug === location);
	const sublocationObj = locationObj?.fgw_sublocations?.find(({ slug }) => slug === sublocation);

	return (
		<Box>
			{(map || distances || location || sublocation) && (
				<Heading
					as='h2'
					mb={6}
					color='green.500'
					fontSize={['xl', '3xl']}
					textTransform='uppercase'
					fontFamily='inherit'>
					الموقع
				</Heading>
			)}

			<Box>
				{map?.address && (
					<InfoBox title='العنوان' icon='marker' value={map?.address} width='100%' />
				)}

				<Flex mx={-4} mt={2} mb={6}>
					{locationObj?.title && (
						<Box px={4}>
							<InfoBox title='المدينة' icon='roadSign' value={locationObj?.title} width='auto' />
						</Box>
					)}
					{sublocationObj?.title && (
						<Box px={4}>
							<InfoBox title='الحي' icon='district' value={sublocationObj?.title} width='auto' />
						</Box>
					)}
				</Flex>
			</Box>
			{distances?.length > 0 && (
				<Heading
					as='h3'
					mb={4}
					color='green.500'
					fontSize='xl'
					textTransform='uppercase'
					fontFamily='inherit'>
					يبعد المشروع عن ...
				</Heading>
			)}

			<Grid gridGap={2} gridTemplateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']}>
				{distances?.map((data, index) => (
					<DistanceInfoBox key={index} {...data} />
				))}
			</Grid>
			{map && (
				<Box mt={4} mb={8}>
					<Map search={map?.address} ratio={16 / 9} borderRadius='0.5rem' boxShadow='lg' />
				</Box>
			)}
		</Box>
	);
};

//
