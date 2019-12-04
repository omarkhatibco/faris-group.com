import React from 'react';

import {
	Box,
	Flex,
	Text,
	Heading,
	Image,
	List,
	ListItem,
	ListIcon,
	IconButton,
} from '@chakra-ui/core';
import { FaBuilding } from 'react-icons/fa';

import { AppPage } from '~@types/global';
import { DefaultLayout } from '~components/layouts';
import BuildingSVG from '-!svg-react-loader!../assets/svg/house.svg';

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
					<Image src='https://source.unsplash.com/1600x900/?istanbul' alt='services Picture' />
				</Box>
				<Box width={6 / 12}>
					<Box width='100%' px='32' py='16'>
						<Heading
							as='h2'
							textAlign='center'
							borderBottom='1px'
							borderBottomColor='teal.500'
							lineHeight='0.1em'>
							<Text
								background='#fff'
								d='inline'
								color='gray.500'
								as='span'
								fontSize='32px'
								padding='12px'>
								Services
							</Text>
						</Heading>
					</Box>
					<List d='flex' width={6 / 12} padding={8}>
						<ListIcon icon={FaBuilding} aria-label='Building' size='4rem' color='green.500' />
						<BuildingSVG /> 
						<ListItem>
							Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet
						</ListItem>
					</List>
				</Box>
			</Flex>
			<style jsx>{``}</style>
		</Flex>
	);
};

AboutUs.Layout = DefaultLayout;

export default AboutUs;
