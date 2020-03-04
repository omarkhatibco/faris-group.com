import { Box } from '@chakra-ui/core';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { HomeSlider, OurServiceSection, RandomProperties } from '~components';

const HomePage: NextPage = () => {
	return (
		<Box as='main' width='Full'>
			<HomeSlider />
			<RandomProperties />
			<OurServiceSection />
			<NextSeo
				title='للإستشارات العقارية'
				openGraph={{
					title: 'للإستشارات العقارية',
				}}
			/>
		</Box>
	);
};

export default HomePage;
