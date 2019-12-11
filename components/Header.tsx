/**jsx @jsx */
import { Flex, Box, Image, IconButton, Stack } from '@chakra-ui/core';
import { css } from '@emotion/core';
import React from 'react';
import { MdTranslate } from 'react-icons/md';
import { Container, MobileNav } from '~components';
import { ActiveLink } from './ActiveLink';
import Link from 'next/link';

export const Header = ({}) => {
	return (
		<Box
			as='header'
			backgroundColor='rgba(255,255,255,0.5)'
			py='2'
			position='fixed'
			left='0'
			right='0'
			top='0'
			css={css({
				backdropFilter: 'blur(8px)',
			})}
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
