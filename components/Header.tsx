import React, { useState } from 'react';
import { Flex, Box, Image, IconButton, Stack } from '@chakra-ui/core';
import { MdTranslate } from 'react-icons/md';
import { Container, MobileNav } from '~components';
import { ActiveLink } from './ActiveLink';
import Link from 'next/link';

export const Header: React.FC = ({}) => {
	return (
		<Box
			as='header'
			backgroundColor='white'
			py='4'
			position='sticky'
			top='0'
			borderBottom='1px'
			borderBottomColor='gray.100'
			zIndex={10}>
			<Container>
				<Flex justifyContent='space-between' alignItems='center'>
					<Box w={['50%']}>
						<Link href='/'>
							<Image
								src='https://www.faris-group.com/wp-content/uploads/2019/05/fg-web.png'
								maxHeight='16'
								alt='faris group logo'
								cursor='pointer'
							/>
						</Link>
					</Box>

					<Box as='nav' display={['none', 'none', 'none', 'block']}>
						<Stack as='ul' listStyleType='none' isInline>
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
					</Box>
					<MobileNav />
				</Flex>
			</Container>
		</Box>
	);
};
