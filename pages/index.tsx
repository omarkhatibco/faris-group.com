import { Spinner, Flex } from '@chakra-ui/core';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
	return (
		<Flex as='main' width='Full' height='50vh' justifyContent='center' alignItems='center'>
			<Spinner color='blau.500' />
			Home
		</Flex>
	);
};

export default HomePage;
