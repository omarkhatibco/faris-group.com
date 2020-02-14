/**jsx @jsx */
import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/core';
import { css } from '@emotion/core';
import { MdEmail, MdPhone, MdPlace } from 'react-icons/md';
import useMedia from 'react-use/lib/useMedia';
import { AppPage } from '~@types/global';
import { ContactForm, Container, Map, SocialLinks } from '~components';
import { DefaultLayout } from '~components/layouts';

const ContactUs: AppPage = () => {
	const isMd = useMedia('(max-width: 768px)');
	return (
		<Box as='main' width='Full' pt='20'>
			<Map search='faris group istanbul Turkey' ratio={isMd ? 1 : 4 / 1} />
			<Box py='16'>
				<Container>
					<Flex flexWrap='wrap'>
						<Box width={['100%', 2 / 3]} pl={['0', '12']} pb={['12', '0']}>
							<Heading
								as='h1'
								color='green.500'
								pb='4'
								textTransform='uppercase'
								fontFamily='inherit'>
								دعنا نتحدث
							</Heading>
							<ContactForm />
						</Box>
						<Box width={['100%', 1 / 3]}>
							<Heading as='h2' color='green.500' textTransform='uppercase' fontFamily='inherit'>
								وسائل التواصل
							</Heading>
							<SocialLinks size='lg' />
							<Heading as='h2' color='green.500' textTransform='uppercase' fontFamily='inherit'>
								بيانات الإتصال
							</Heading>
							<Stack my='2'>
								<Flex my='1' justifyContent='flex-start' alignItems='flex-start'>
									<Box ml='4' color='green.200' borderRadius='100%'>
										<Box as={MdPlace} width='1.5rem' height='1.5rem'></Box>
									</Box>
									<Text fontWeight='bold' color='gray.600' fontFamily='inherit'>
										Molla Gürani,
										<br />
										Turgut Özal Millet Cd No:72
										<br />
										34093 Fatih/İstanbul
										<br />
										Turkey
									</Text>
								</Flex>
								<Flex my='1' justifyContent='flex-start' alignItems='flex-start'>
									<Box ml='4' color='green.200' borderRadius='100%'>
										<Box as={MdEmail} width='1.5rem' height='1.5rem'></Box>
									</Box>
									<Text fontWeight='bold' color='gray.600' fontFamily='inherit'>
										<Link href='mailto:info@faris-group.com'>info@faris-group.com</Link>
									</Text>
								</Flex>
								<Flex my='1' justifyContent='flex-start' alignItems='flex-start'>
									<Box ml='4' color='green.200' borderRadius='100%'>
										<Box as={MdPhone} width='1.5rem' height='1.5rem'></Box>
									</Box>
									<Text
										fontWeight='bold'
										color='gray.600'
										fontFamily='inherit'
										css={css({
											direction: 'ltr',
										})}>
										<Link href='tel:+905558888483'>+90 555 8888 483</Link>
									</Text>
								</Flex>
							</Stack>
						</Box>
					</Flex>
				</Container>
			</Box>
		</Box>
	);
};

ContactUs.Layout = DefaultLayout;

export default ContactUs;
