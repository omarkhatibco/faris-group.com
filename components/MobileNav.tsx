import React from 'react';
import {
	Flex,
	Box,
	Image,
	Stack,
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	DrawerHeader,
} from '@chakra-ui/core';
import { ActiveLink } from './ActiveLink';
import styled from '@emotion/styled';

// Burger Menu
import Burger from '@animated-burgers/burger-slide';
import '@animated-burgers/burger-slide/dist/styles.css';

const BurgerStyled = styled(Burger)`
	.burger-lines,
	.burger-lines:after,
	.burger-lines:before {
		background-color: ${({ color }) => color};
	}
`;

export const MobileNav: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();
	return (
		<>
			<Flex display={['flex', 'none']}>
				<Box ref={btnRef} onClick={onOpen}>
					<BurgerStyled color='black' />
				</Box>
			</Flex>
			<Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef} size='lg'>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton size='lg' />

					<DrawerBody alignSelf='center' display='inline-flex'>
						<Stack
							as='ul'
							listStyleType='none'
							flexDir='column'
							alignItems='center'
							justifyContent='center'
							my='auto'>
							<Image
								src='https://www.faris-group.com/wp-content/uploads/2019/05/fg-web.png'
								maxHeight='16'
							/>
							<Box as='li' w='100%'>
								<ActiveLink width='100%' href='/'>
									Home
								</ActiveLink>
							</Box>
							<Box as='li' w='100%'>
								<ActiveLink width='100%' href='/about-us'>
									About Us
								</ActiveLink>
							</Box>
							<Box as='li' w='100%'>
								<ActiveLink width='100%' href='/properties'>
									Properties
								</ActiveLink>
							</Box>
							<Box as='li' w='100%'>
								<ActiveLink href='/contact-us' width='100%'>
									Contact Us
								</ActiveLink>
							</Box>
						</Stack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};
