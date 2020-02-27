/**jsx @jsx */
import { Box, Flex, IconButton } from '@chakra-ui/core';
import { css } from '@emotion/core';
import Link from 'next/link';
import React from 'react';
import { MdFavorite } from 'react-icons/md';
import { Container, CurrencyConverter, LogoSvg, MobileNav } from '~components';
import { ActiveLink } from './ActiveLink';

export const Header = ({}) => {
	return (
		<Box
			as='header'
			backgroundColor='white'
			py='2'
			position='fixed'
			left='0'
			right='0'
			top='0'
			boxShadow='0 6px 6px rgba(0,0,0,.1)'
			css={css({
				'@supports (backdrop-filter: none)': {
					backdropFilter: 'blur(8px)',
					backgroundColor: 'rgba(255,255,255,0.5)',
				},
			})}
			zIndex={10}>
			<Container>
				<Flex justifyContent='space-between' alignItems='center'>
					<Box w={['50%']}>
						<Link href='/'>
							<LogoSvg width='11rem' />
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
									as='a'
									href='/favorites'
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
