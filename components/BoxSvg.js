import { Box } from '@chakra-ui/core';

export const BoxSvg = props => (
	<Box
		as='svg'
		xmlns='http://www.w3.org/2000/svg'
		fill='currentColor'
		viewBox='0 0 100 100'
		preserveAspectRatio='none'
		{...props}>
		<polygon points='0,0 100,0 0,100'></polygon>
	</Box>
);
