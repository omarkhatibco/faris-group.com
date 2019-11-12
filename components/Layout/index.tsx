import { Box, Flex, Stack, ThemeProvider } from '@chakra-ui/core';
import { PreflightCSS } from '@components';
import theme from '../../theme';

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<PreflightCSS />
			<Flex
				bg='gray.100'
				w='full'
				h='full'
				minHeight='100vh'
				justifyContent='center'
				alignItems='center'
				px='4'>
				{children}
			</Flex>
		</ThemeProvider>
	);
};

export default Layout;
