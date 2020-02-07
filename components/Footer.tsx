/**jsx @jsx */
import { Flex, Box, Text, Link } from '@chakra-ui/core';
import { css } from '@emotion/core';
import { Container, SocialLinks } from './';

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
					<SocialLinks size='lg' />
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
