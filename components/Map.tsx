import { useContext } from 'react';
import { ConfigContext } from '~components';

import { AspectRatioBox, Image, Flex, Button } from '@chakra-ui/core';

export const Map = ({ search, ratio, ...rest }) => {
	const { images } = useContext<any>(ConfigContext);
	return (
		<AspectRatioBox ratio={ratio} borderRadius='0.5rem'>
			<Flex justifyContent='center' alignItems='center' overflow='hidden' {...rest}>
				<a target='_blank' href={`https://maps.google.com/?q=${search}`}>
					<Image
						src='/images/istanbul.map.png'
						width='100%'
						height='100%'
						position='absolute'
						top='0'
						bottom='0'
						left='0'
						right='0'
						objectFit='cover'
					/>
					<Button variantColor='green'>فتح في برنامج الخرائط</Button>
				</a>
			</Flex>
		</AspectRatioBox>
	);
};
