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
	IconButton,
} from '@chakra-ui/core';
import { ActiveLink } from './ActiveLink';
import { FiMenu } from 'react-icons/fi';
// Burger Menu
export const MobileNav: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();
	return (
		<>
			<Flex display={['flex', 'flex', 'flex', 'none']}>
				<Box ref={btnRef} onClick={onOpen}>
					<IconButton aria-label='Burger Menu' icon={FiMenu} background='transparent' size='lg' />
				</Box>
			</Flex>
			<Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef} size='lg'>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton size='lg' />

					<DrawerBody width='100%' alignSelf='center' display='inline-flex'>
						<Stack as='nav' width='100%' my='auto' display='flex' flexDir='column'>
							<Image
								src='https://www.faris-group.com/wp-content/uploads/2019/05/fg-web.png'
								maxHeight='24'
								objectFit='cover'
							/>
							<Box
								as='ul'
								listStyleType='none'
								width='100%'
								display='flex'
								flexDir='column'
								alignItems='flex-start'>
								<Box as='li' width='100%' borderBottom='1px' borderBottomColor='#ccc'>
									<ActiveLink width='100%' href='/' justifyContent='flex-start'>
										Home
									</ActiveLink>
								</Box>
								<Box as='li' width='100%' borderBottom='1px' borderBottomColor='#ccc'>
									<ActiveLink width='100%' href='/about-us' justifyContent='flex-start'>
										About Us
									</ActiveLink>
								</Box>
								<Box as='li' width='100%' borderBottom='1px' borderBottomColor='#ccc'>
									<ActiveLink width='100%' href='/properties' justifyContent='flex-start'>
										Properties
									</ActiveLink>
								</Box>
								<Box as='li' width='100%' borderBottom='1px' borderBottomColor='#ccc'>
									<ActiveLink width='100%' href='/contact-us' justifyContent='flex-start'>
										Contact Us
									</ActiveLink>
								</Box>
							</Box>
						</Stack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};
