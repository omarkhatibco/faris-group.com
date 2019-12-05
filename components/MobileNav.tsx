import React from 'react';
import {
	Flex,
	Box,
	Image,
	IconButton,
	Stack,
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
} from '@chakra-ui/core';
import { MdTranslate } from 'react-icons/md';
import { ActiveLink } from './ActiveLink';

// Burger Menu
import Burger from '@animated-burgers/burger-slide';
import '@animated-burgers/burger-slide/dist/styles.css';

export const MobileNav: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();
	return (
		<>
			<Flex display={['flex', 'none']}>
				<Box ref={btnRef} onClick={onOpen}>
					<Burger isOpen={false} color='black' />
				</Box>
			</Flex>
			<Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton size='lg' />

					<DrawerBody>
						<Stack as='ul' listStyleType='none' flexDir='column' alignItems='center' my='auto'>
							<Box as='li'>
								<ActiveLink href='/'>Home</ActiveLink>
							</Box>
							<Box as='li'>
								<ActiveLink href='/about-us'>About Us</ActiveLink>
							</Box>
							<Box as='li'>
								<ActiveLink href='/properties'>Properties</ActiveLink>
							</Box>
							<Box as='li'>
								<ActiveLink href='/contact-us'>Contact Us</ActiveLink>
							</Box>
							<Box>
								<IconButton
									aria-label='Choose Language'
									variant='outline'
									variantColor='teal'
									icon={MdTranslate}
								/>
							</Box>
						</Stack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};
