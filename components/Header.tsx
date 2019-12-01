import { Flex, Box, Image, IconButton, Stack, List, ListItem, Button } from '@chakra-ui/core';
import Link from 'next/link';
import { ActiveLink } from './ActiveLink';

export const Header: React.FC = () => {
	return (
		<Box as='header' backgroundColor='gray.100' py='8'>
			<Flex justifyContent='space-between' alignItems='center' px='4' maxWidth='6xl' mx='auto'>
				<Box>
					<Image
						src='https://www.faris-group.com/wp-content/uploads/2019/05/fg-web.png'
						maxHeight='16'></Image>
				</Box>
				<Box as='nav'>
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
					</Stack>
				</Box>
			</Flex>
		</Box>
	);
};
