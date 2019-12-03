import { Box, Flex, Text, Heading, Image, List, ListItem, ListIcon } from '@chakra-ui/core';
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

			<Flex my={16}>
				<Box width={6 / 12}>
					<Image src='https://source.unsplash.com/1600x900/?real,estate' alt='services Picture' />
				</Box>
				<Box width={6 / 12}>
					<Box width='100%' px='32' py='16'>
						<Heading
							as='h2'
							textAlign='center'
							borderBottom='1px'
							borderBottomColor='teal.500'
							lineHeight='0.1em'
							m='20px 0 20px'>
							<Text background='#fff' d='inline' color='gray.500' as='span' fontSize='32px'>
								Services
							</Text>
						</Heading>
					</Box>
					<List>
						<List>
							<ListItem>1or sit amet</ListItem>
							<ListItem>2sum dolor sit amet</ListItem>
						</List>
						<List>
							<ListItem>Lorem ipsum dolor sit amet</ListItem>
							<ListItem>Lorem ipsum dolor sit amet</ListItem>
						</List>
					</List>
				</Box>
			</Flex>
			<style jsx>{``}</style>
		</Flex>
	);
};

AboutUs.Layout = DefaultLayout;

export default AboutUs;
