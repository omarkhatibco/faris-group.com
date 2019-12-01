import { Flex, Box, Text, Link, IconButton, Stack } from '@chakra-ui/core';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

export const Footer: React.FC = () => {
	return (
		<Flex
			flexDirection='column'
			as='footer'
			bg='gray.50'
			alignItems='center'
			justifyContent='center'
			py='8'
			borderTop='1px'
			borderTopColor='gray.100'
			textAlign='center'>
			<Text>Faris Group Logo</Text>
			<Text fontWeight='bold' my='2'>
				Real Estate & Consultations
			</Text>
			<Text fontWeight='bold' my='2' color='gray.600'>
				Molla Gürani,
				<br />
				Turgut Özal Millet Cd No:72
				<br />
				34093 Fatih/İstanbul
				<br />
				Turkey
			</Text>
			<Stack my='2' isInline>
				<Link href='https://www.facebook.com/farisgrouptr/' target='_blank'>
					<IconButton
						variant='ghost'
						size='lg'
						color='social.facebook'
						aria-label='Facebook Link'
						isRound
						icon={FaFacebookF}
					/>
				</Link>
				<Link href='https://twitter.com/farisgrouptr' target='_blank'>
					<IconButton
						variant='ghost'
						size='lg'
						color='social.twitter'
						aria-label='Twitter Link'
						isRound
						icon={FaTwitter}
					/>
				</Link>
				<Link href='https://www.instagram.com/farisgrouptr/' target='_blank'>
					<IconButton
						variant='ghost'
						size='lg'
						color='social.instagram'
						aria-label='Instagram Link'
						isRound
						icon={FaInstagram}
					/>
				</Link>
				<Link href='https://youtube.com' target='_blank'>
					<IconButton
						variant='ghost'
						size='lg'
						color='social.youtube'
						aria-label='Youtube Link'
						isRound
						icon={FaYoutube}
					/>
				</Link>
			</Stack>
			<Text fontSize='sm' color='gray.500' my='2'>
				Copyright to Al-faris Group 2020 | powered by{' '}
				<Link href='https://omarkhatib.co' target='_blank'>
					Omar Khatib
				</Link>
			</Text>
		</Flex>
	);
};
