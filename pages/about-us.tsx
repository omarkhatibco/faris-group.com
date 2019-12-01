import { Spinner, Flex } from '@chakra-ui/core';
import { AppPage } from '~@types/global';
import { DefaultLayout } from '~components/layouts';

const AboutUs: AppPage = () => {
	return (
		<Flex as='main' width='Full' height='50vh' justifyContent='center' alignItems='center'>
			<Spinner color='blau.500' />
			About Us
		</Flex>
	);
};

AboutUs.Layout = DefaultLayout;

export default AboutUs;
