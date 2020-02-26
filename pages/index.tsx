import { Box } from '@chakra-ui/core';
import { NextPage } from 'next';
import { HomeSlider, OurServiceSection } from '~components';

const HomePage: NextPage = () => {
	return (
		<Box as='main' width='Full'>
			<HomeSlider />
			<OurServiceSection />
		</Box>
	);
};

export default HomePage;
