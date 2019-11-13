import React from 'react';
import { NextPage, NextPageContext } from 'next';

import { Flex, Text, Icon } from '@chakra-ui/core';

const ErrorPage = ({ statusCode }) => {
	return (
		<Flex
			maxW='sm'
			borderWidth='1px'
			rounded='lg'
			overflow='hidden'
			justifyContent='center'
			alignItems='center'
			p='8'
			direction='column'
			bg='white'
			boxShadow='xl'>
			<Icon name='warning' size='3.5rem' color='red.500' mb='4' textShadow='sm'></Icon>
			<Text fontWeight='bold' fontSize='xl'>
				{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
			</Text>
		</Flex>
	);
};

ErrorPage.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default ErrorPage;
