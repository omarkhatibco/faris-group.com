import { AspectRatioBox, Box } from '@chakra-ui/core';

export const LongPromo = () => {
	return (
		<Box width='100%' boxShadow='lg'>
			<AspectRatioBox ratio={16 / 9}>
				<Box
					as='iframe'
					src='https://www.youtube.com/embed/7XrVC45aAsU'
					frameBorder='0'
					allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen></Box>
			</AspectRatioBox>
		</Box>
	);
};
