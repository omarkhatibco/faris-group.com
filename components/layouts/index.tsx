import { Box, Flex, Stack } from '@chakra-ui/core';

export const DefaultLayout = ({ children }) => {
	return children;
};

export const MinimalLayout = ({ children }) => {
	return (
		<Flex
			bg='gray.100'
			w='full'
			h='full'
			minHeight='100vh'
			justifyContent='center'
			alignItems='center'
			px='4'>
			<Stack position='absolute' isInline left='0' top='0' right='0' width='full' spacing='2'>
				<Box h='5' bg='red.700' width={2 / 5}></Box>
				<Box h='5' bg='blue.800' width={3 / 5}></Box>
			</Stack>
			{children}
		</Flex>
	);
};
