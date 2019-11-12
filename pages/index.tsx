import { DefaultLayout } from '@components/layouts';

import { Box } from '@chakra-ui/core';

const Home: AppPage = () => (
	<Box bg='red.500' color='white'>
		<h1 className='title'>Welcome to Next!</h1>
		<p className='description'>
			To get started, edit <code>pages/index.js</code> and save to reload.
		</p>
	</Box>
);

Home.Layout = DefaultLayout;

export default Home;
