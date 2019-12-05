import { Flex, Box, Image, IconButton, Stack, Button, Text } from '@chakra-ui/core';
import { MdTranslate } from 'react-icons/md';
import { Container } from '~components';
import { ActiveLink } from './ActiveLink';

// Burger Menu

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
						<Image
							src='https://www.faris-group.com/wp-content/uploads/2019/05/fg-web.png'
							maxHeight='16'
						/>
					</Box>

					<Box as='nav' d={['none', 'block']}>
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
					<Flex bg='red' ml='auto'>
						<div className='burger burger-slide'>
							<div className='burger-lines'></div>
						</div>
					</Flex>
				</Flex>
			</Container>
			<style jsx>{`
				.burger {
					height: 3em;
					width: 3em;
					position: relative;
					font-size: 12px;
					cursor: pointer;
					-webkit-transition: 0.2s all;
					-o-transition: 0.2s all;
					transition: 0.2s all;
					-webkit-tap-highlight-color: transparent;
				}
				.burger .burger-lines:after {
					left: 0;
					top: -1em;
				}
				.burger .burger-lines:before {
					left: 1em;
					top: 1em;
				}
				.burger:after {
					content: '';
					display: block;
					position: absolute;
					height: 150%;
					width: 150%;
					top: -25%;
					left: -25%;
				}
				.burger .burger-lines {
					top: 50%;
					margin-top: -0.125em;
				}
				.burger .burger-lines,
				.burger .burger-lines:after,
				.burger .burger-lines:before {
					pointer-events: none;
					display: block;
					content: '';
					width: 100%;
					border-radius: 0.25em;
					background-color: white;
					height: 0.25em;
					position: absolute;
					-webkit-transform: rotate(0);
					-ms-transform: rotate(0);
					transform: rotate(0);
				}
				.burger .burger-lines:after {
					left: 0;
					top: -1em;
				}
				.burger .burger-lines:before {
					left: 1em;
					top: 1em;
				}
				@-webkit-keyframes burgerAnimationSlide {
					0% {
						-webkit-transform: translateX(0);
						transform: translateX(0);
						opacity: 1;
					}
					25% {
						opacity: 0;
					}
					49% {
						-webkit-transform: translateX(-0.7em);
						transform: translateX(-0.7em);
						opacity: 0;
					}
					50% {
						-webkit-transform: translateX(0.7em);
						transform: translateX(0.7em);
						opacity: 0;
					}
					51% {
						opacity: 0;
					}
					75% {
						opacity: 1;
					}
					100% {
						-webkit-transform: translateX(0px);
						transform: translateX(0px);
						opacity: 1;
					}
				}

				@keyframes burgerAnimationSlide {
					0% {
						-webkit-transform: translateX(0);
						transform: translateX(0);
						opacity: 1;
					}
					25% {
						opacity: 0;
					}
					49% {
						-webkit-transform: translateX(-0.7em);
						transform: translateX(-0.7em);
						opacity: 0;
					}
					50% {
						-webkit-transform: translateX(0.7em);
						transform: translateX(0.7em);
						opacity: 0;
					}
					51% {
						opacity: 0;
					}
					75% {
						opacity: 1;
					}
					100% {
						-webkit-transform: translateX(0px);
						transform: translateX(0px);
						opacity: 1;
					}
				}

				.burger.burger-slide .burger-lines {
					-webkit-transition: 0.1s all 0.15s;
					-o-transition: 0.1s all 0.15s;
					transition: 0.1s all 0.15s;
				}
				.burger.burger-slide .burger-lines:after,
				.burger.burger-slide .burger-lines:before {
					width: 2em;
					-webkit-transition: 0.1s all 0.15s;
					-o-transition: 0.1s all 0.15s;
					transition: 0.1s all 0.15s;
				}

				.burger.burger-slide:not(.open) {
					-webkit-animation-name: burgerAnimationSlide;
					animation-name: burgerAnimationSlide;
					-webkit-animation-duration: 0.4s;
					animation-duration: 0.4s;
					background-color: transparent;
				}

				.burger.burger-slide.open .burger-lines {
					-webkit-animation-name: burgerAnimationSlide;
					animation-name: burgerAnimationSlide;
					-webkit-animation-duration: 0.4s;
					animation-duration: 0.4s;
					background-color: transparent;
				}
				.burger.burger-slide.open .burger-lines:before,
				.burger.burger-slide.open .burger-lines:after {
					left: 0.5em;
					top: 0px;
				}
				.burger.burger-slide.open .burger-lines:before {
					-webkit-transform: rotate(-45deg);
					-ms-transform: rotate(-45deg);
					transform: rotate(-45deg);
				}
				.burger.burger-slide.open .burger-lines:after {
					-webkit-transform: rotate(45deg);
					-ms-transform: rotate(45deg);
					transform: rotate(45deg);
				}
			`}</style>
		</Box>
	);
};
