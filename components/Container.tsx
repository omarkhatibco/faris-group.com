import { Box, BoxProps } from '@chakra-ui/core';

interface IProps extends BoxProps {
	children: React.ReactNode;
}

export const Container: React.FC<IProps> = ({ children, ...rest }) => {
	return (
		<Box maxWidth='6xl' px='4' mx='auto' {...rest}>
			{children}
		</Box>
	);
};
