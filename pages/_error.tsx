import { AppPage } from '~@types/global';
import { Flex, Text, Icon } from '@chakra-ui/core';

import { DefaultLayout } from '~components/layouts';

interface IProps {
	statusCode: Number;
}

const ErrorPage: AppPage<IProps> = ({ statusCode }) => {
	return (
		<>
			<Icon name='warning' size='3.5rem' color='red.700' mb='4' textShadow='sm'></Icon>
			<Text fontWeight='bold' fontSize='xl'>
				{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
			</Text>
		</>
	);
};

ErrorPage.getInitialProps = async ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

ErrorPage.Layout = DefaultLayout;

export default ErrorPage;
