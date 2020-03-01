/**jsx @jsx */

import { Box, Flex, Grid, Heading } from '@chakra-ui/core';
import { DistanceInfoBox, InfoBox, Map } from '~components';

export const PropertyMap = ({ map, distances, location }) => {
	const city = location?.[0];
	const district = location?.[1];

	return (
		<Box>
			{(map || distances || location) && (
				<Heading
					as='h2'
					mb={6}
					color='green.500'
					fontSize={['xl', '3xl']}
					textTransform='uppercase'>
					الموقع
				</Heading>
			)}

			<Box>
				{map?.address && (
					<InfoBox title='العنوان' icon='marker' value={map?.address} width='100%' />
				)}

				<Flex mx={-4} mt={2} mb={6}>
					{city && (
						<Box px={4}>
							<InfoBox title='المدينة' icon='roadSign' value={city?.name} width='auto' />
						</Box>
					)}
					{district && (
						<Box px={4}>
							<InfoBox title='الحي' icon='district' value={district?.name} width='auto' />
						</Box>
					)}
				</Flex>
			</Box>
			{distances?.length > 0 && (
				<Heading as='h3' mb={4} color='green.500' fontSize='xl' textTransform='uppercase'>
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
					<Map search={map?.address} ratio='56.25%' borderRadius='0.5rem' boxShadow='lg' />
				</Box>
			)}
		</Box>
	);
};

//
