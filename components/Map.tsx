import { AspectRatioBox, Button, Flex } from '@chakra-ui/core';
import { MapSvg } from '~components';

export const Map = ({ search, ratio, isfirst = false, ...rest }) => {
	return (
		<AspectRatioBox ratio={ratio} borderRadius='0.5rem'>
			<Flex justifyContent='center' alignItems='center' overflow='hidden' {...rest}>
				<a target='_blank' href={`https://maps.google.com/?q=${search}`} rel='noopener noreferrer'>
					<MapSvg width='100%' position='absolute' top='0' bottom='0' left='0' right='0' />

					<Button mt={isfirst ? '16' : 0} variantColor='green'>
						فتح الموقع في برنامج الخرائط
					</Button>
				</a>
			</Flex>
		</AspectRatioBox>
	);
};
