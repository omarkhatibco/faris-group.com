import { Box, Flex, Text, Heading } from '@chakra-ui/core';
import { AppPage } from '~@types/global';
import { DefaultLayout } from '~components/layouts';

const AboutUs: AppPage = () => {
	return (
		<Flex w='full' flexDirection='column'>
			<Box mx={32} my={32} width={4 / 12} h='30vh'>
				<Heading>
					We are{' '}
					<Text color='green.500' d='inline'>
						EVERYTHING
					</Text>
					<br />
					real estate needs
				</Heading>
				<Text>Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum</Text>
			</Box>
			<Box width='100%' px='16'>
				<Heading
					as='h2'
					textAlign='center'
					borderBottom='1px'
					borderBottomColor='black'
					lineHeight='0.1rem'
					m='10px 0 20px'>
					<Text background='#fff' d='inline'>
						Our Services?
					</Text>
				</Heading>
			</Box>
			<style jsx>{``}</style>
		</Flex>
	);
};

AboutUs.Layout = DefaultLayout;

export default AboutUs;
