import { Box, Flex, Stack } from '@chakra-ui/core';

interface IProps {
	children: React.ReactNode;
}

export const DefaultLayout: React.FC<IProps> = ({ children }) => {
	return (
		<Flex justifyContent='center' alignItems='center' minHeight='100vh'>
			{children}
		</Flex>
	);
};
