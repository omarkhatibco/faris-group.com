/**jsx @jsx */
import { Box, Flex, Link, Text } from '@chakra-ui/core';
import { css } from '@emotion/core';
import { Container, LogoSymbolSvg, SocialLinks } from './';

export const Footer: React.FC = () => {
	return (
		<Box as='footer' bg='gray.50' py='8' borderTop='1px' borderTopColor='gray.100'>
			<Container>
				<Flex flexDirection='column' alignItems='center' justifyContent='center' textAlign='center'>
					<LogoSymbolSvg width='4rem' />
					<Text fontWeight='bold' my='2' textTransform='uppercase'>
						للإستشارات العقارية
					</Text>
					<Text
						fontWeight='bold'
						my='2'
						color='gray.600'
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
					<SocialLinks />
					<Text fontSize='sm' color='gray.500' my='2'>
						جميع الحقوق محفوظة لمجموعة الفارس | تم التطوير من قبل{' '}
						<Link href='https://loewen.dev' isExternal>
							löwen.dev
						</Link>
					</Text>
				</Flex>
			</Container>
		</Box>
	);
};
