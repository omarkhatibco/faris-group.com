import { NextPage } from 'next';
import { Box } from '@chakra-ui/core';

const Home: NextPage = () => (
	<Box bg='red.500' color='white'>
		<h1 className='title'>Welcome to Next!</h1>
		<p className='description'>
			To get started, edit <code>pages/index.js</code> and save to reload.
		</p>
	</Box>
);

export default Home;
