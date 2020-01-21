import { NextPage } from 'next';
import { Flex, Text, Icon } from '@chakra-ui/core';

import { DefaultLayout } from '~components/layouts';

interface IProps {
	statusCode: Number;
}

const ErrorPage: NextPage<IProps> = ({ statusCode }) => {
	return (
		<DefaultLayout>
			<Icon name='warning' size='3.5rem' color='red.700' mb='4' textShadow='sm'></Icon>
			<Text fontWeight='bold' fontSize='xl'>
				{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
			</Text>
		</DefaultLayout>
	);
};

ErrorPage.getInitialProps = async ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default ErrorPage;
