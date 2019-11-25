import { Spinner } from '@chakra-ui/core';
import { AppPage } from '~@types/global';
import { DefaultLayout } from '~components/layouts';

const HomePage: AppPage = () => {
	return <Spinner color='blau.500' />;
};

HomePage.Layout = DefaultLayout;

export default HomePage;
