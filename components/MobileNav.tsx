import {
	Box,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	Flex,
	Heading,
	IconButton,
	useDisclosure,
} from '@chakra-ui/core';
import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { CurrencyConverterMobile } from '~components';
import { ActiveLink } from './ActiveLink';
// Burger Menu
export const MobileNav: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();
	return (
		<React.Fragment>
			<Flex display={['flex', 'flex', 'flex', 'none']}>
				<Box ref={btnRef} onClick={onOpen}>
					<IconButton aria-label='القائمة' icon={FiMenu} background='transparent' size='lg' />
				</Box>
			</Flex>
			<Drawer isOpen={isOpen} placement='bottom' onClose={onClose} finalFocusRef={btnRef} size='lg'>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton size='lg' />
					<DrawerBody width='100vw' minHeight='100%' display='flex' alignItems='center'>
						<Box as='nav' width='100%' mt={12}>
							<Flex
								as='ul'
								listStyleType='none'
								textAlign='center'
								width='100%'
								flexDirection='column'>
								<Box px={1} borderBottom='1px solid' borderBottomColor='gray.100' py='2' as='li'>
									<ActiveLink size='lg' href='/'>
										الرئيسية
									</ActiveLink>
								</Box>
								<Box px={1} borderBottom='1px solid' borderBottomColor='gray.100' py='2' as='li'>
									<ActiveLink size='lg' href='/about-us'>
										من نحن
									</ActiveLink>
								</Box>
								<Box px={1} borderBottom='1px solid' borderBottomColor='gray.100' py='2' as='li'>
									<ActiveLink size='lg' href='/properties'>
										العقارات
									</ActiveLink>
								</Box>
								<Box px={1} borderBottom='1px solid' borderBottomColor='gray.100' py='2' as='li'>
									<ActiveLink size='lg' href='/contact-us'>
										تواصل معنا
									</ActiveLink>
								</Box>
								<Box px={1} borderBottom='1px solid' borderBottomColor='gray.100' py='2' as='li'>
									<ActiveLink size='lg' href='/favorites'>
										المفضلة
									</ActiveLink>
								</Box>
							</Flex>
							<Box px={1} py='4'>
								<Heading as='h6' color='green.500' fontSize='md' mb={2} textAlign='center'>
									محول العملات
								</Heading>
								<CurrencyConverterMobile />
							</Box>
						</Box>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</React.Fragment>
	);
};
