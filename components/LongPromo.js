import { AspectRatioBox, Box } from '@chakra-ui/core';

export const LongPromo = () => {
	return (
		<Box width='100%' boxShadow='2xl' borderRadius='0.5rem'>
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
	);
};
