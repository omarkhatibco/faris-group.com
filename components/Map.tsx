import { AspectRatioBox, Button, Flex, Image } from '@chakra-ui/core';
import { useContext } from 'react';
import { ConfigContext } from '~components';

export const Map = ({ search, ratio, isfirst = false, ...rest }) => {
	const { mapPlaceholder } = useContext<any>(ConfigContext);

	return (
		<AspectRatioBox ratio={ratio} borderRadius='0.5rem'>
			<Flex justifyContent='center' alignItems='center' overflow='hidden' {...rest}>
				<a target='_blank' href={`https://maps.google.com/?q=${search}`} rel='noopener noreferrer'>
					<Image
						src={mapPlaceholder}
						width='100%'
						height='100%'
						position='absolute'
						top='0'
						bottom='0'
						left='0'
						right='0'
						objectFit='cover'
					/>
					<Button mt={isfirst ? '16' : 0} variantColor='green'>
						فتح في برنامج الخرائط
					</Button>
				</a>
			</Flex>
		</AspectRatioBox>
	);
};
