/**jsx @jsx */
import { Box, Flex, IconButton, Image } from '@chakra-ui/core';
import { css } from '@emotion/core';
import Link from 'next/link';
import React from 'react';
import { MdFavorite } from 'react-icons/md';
import { Container, CurrencyConverter, MobileNav } from '~components';
import { ActiveLink } from './ActiveLink';

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
			boxShadow='0 6px 6px rgba(0,0,0,.1)'
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
						<Flex as='ul' listStyleType='none' mx={-2}>
							<Box px={1} as='li'>
								<ActiveLink href='/'>الرئيسية</ActiveLink>
							</Box>
							<Box px={1} as='li'>
								<ActiveLink href='/about-us'>من نحن</ActiveLink>
							</Box>
							<Box px={1} as='li'>
								<ActiveLink href='/properties'>العقارات</ActiveLink>
							</Box>
							<Box px={1} as='li'>
								<ActiveLink href='/contact-us'>تواصل معنا</ActiveLink>
							</Box>
							<Box px={1} as='li'>
								<IconButton
									aria-label='اختر العملة المفضلة'
									isRound
									variant='ghost'
									variantColor='green'
									icon={MdFavorite}
								/>
							</Box>
							<Box px={2} as='li'>
								<CurrencyConverter />
							</Box>
						</Flex>
					</Box>
					<MobileNav />
				</Flex>
			</Container>
		</Box>
	);
};
