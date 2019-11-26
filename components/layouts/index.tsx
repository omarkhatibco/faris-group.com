import { Box, Flex, Stack } from '@chakra-ui/core';
import { Footer } from '~components';
interface IProps {
	children: React.ReactNode;
}

export const DefaultLayout: React.FC<IProps> = ({ children }) => {
	return (
		<Box minHeight='100vh'>
			{children}
			<Footer />
		</Box>
	);
};
