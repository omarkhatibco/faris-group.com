import { AspectRatioBox, Box, Flex } from '@chakra-ui/core';

export const LongPromo = () => {
	return (
		<Flex p='16' width='100%' backgroundColor='gray.100'>
			<Box width='50%'>asdfasd</Box>
			<Box
				width='50%'
				boxShadow='2xl'
				borderRadius='0.5rem'
				transform='rotate3d(.5,-.866,0,15deg) rotateZ(1deg)'>
				<AspectRatioBox ratio={16 / 9} borderRadius='0.5rem'>
					<Box
						as='iframe'
						src='https://www.youtube-nocookie.com/embed/7XrVC45aAsU?controls=0'
						frameBorder='0'
						allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
						borderRadius='0.5rem'
					/>
				</AspectRatioBox>
			</Box>
		</Flex>
	);
};
