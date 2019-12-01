import { AspectRatioBox, Box } from '@chakra-ui/core';
import useMedia from 'react-use/esm/useMedia';
export const Map = () => {
	const isLg = useMedia('(min-width: 768px)');

	return (
		<AspectRatioBox ratio={isLg ? 4 / 1 : 1}>
			<Box
				as='iframe'
				src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6021.243452206435!2d28.941553000000003!3d41.011652!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb571cad62b830605!2z2YXYrNmF2YjYudipINin2YTZgdin2LHYsyDZhNmE2KfYs9iq2LTYp9ix2KfYqiDYp9mE2YLYp9mG2YjZhtmK2Kk!5e0!3m2!1sar!2str!4v1575227398841!5m2!1sar!2str'></Box>
		</AspectRatioBox>
	);
};
