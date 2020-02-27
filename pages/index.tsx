import { Box } from '@chakra-ui/core';
import { NextPage } from 'next';
import { HomeSlider, OurServiceSection, RandomProperties } from '~components';

const HomePage: NextPage = () => {
	return (
		<Box as='main' width='Full'>
			<HomeSlider />
			<RandomProperties />
			<OurServiceSection />
		</Box>
	);
};

export default HomePage;
