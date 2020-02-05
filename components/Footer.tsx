/**jsx @jsx */
import { Flex, Box, Text, Link, IconButton, Stack } from '@chakra-ui/core';
import { css } from '@emotion/core';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { Container } from './Container';

export const Footer: React.FC = () => {
	return (
		<Box as='footer' bg='gray.50' py='8' borderTop='1px' borderTopColor='gray.100'>
			<Container>
				<Flex flexDirection='column' alignItems='center' justifyContent='center' textAlign='center'>
					<Text>Faris Group Logo</Text>
					<Text fontWeight='bold' my='2' textTransform='uppercase' fontFamily='inherit'>
						للإستشارات العقارية
					</Text>
					<Text
						fontWeight='bold'
						my='2'
						color='gray.600'
						fontFamily='inherit'
						css={css({
							direction: 'ltr',
						})}>
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
					<Text fontSize='sm' color='gray.500' my='2' fontFamily='inherit'>
						جميع الحقوق محفوظة لفارس غروب | تم التطوير من قبل{' '}
						<Link href='https://loewen.dev' target='_blank'>
							löwen.dev
						</Link>
					</Text>
				</Flex>
			</Container>
		</Box>
	);
};
