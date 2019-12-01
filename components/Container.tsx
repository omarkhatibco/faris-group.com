import { Box } from '@chakra-ui/core';

interface IProps {
	children: React.ReactNode;
}

export const Container: React.FC<IProps> = ({ children }) => {
	return (
		<Box maxWidth='6xl' px='4' mx='auto'>
			{children}
		</Box>
	);
};
