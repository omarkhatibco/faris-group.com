/**jsx @jsx */
import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/core';
import { css } from '@emotion/core';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { MdEmail, MdPhone, MdPlace } from 'react-icons/md';
import { ContactForm, Container, Map, SocialLinks } from '~components';

const ContactUs: NextPage = () => {
	return (
		<Box as='main' width='100%'>
			<Map search='faris group istanbul Turkey' isfirst ratio={['100%', '25%']} />
			<Box py='16'>
				<Container>
					<Flex flexWrap='wrap'>
						<Box width={['100%', 2 / 3]} pl={['0', '12']} pb={['12', '0']}>
							<Heading as='h1' color='green.500' pb='4' textTransform='uppercase'>
								دعنا نتحدث
							</Heading>
							<ContactForm />
						</Box>
						<Box width={['100%', 1 / 3]}>
							<Heading as='h2' color='green.500' textTransform='uppercase'>
								وسائل التواصل
							</Heading>
							<SocialLinks />
							<Heading as='h2' color='green.500' textTransform='uppercase'>
								بيانات الإتصال
							</Heading>
							<Stack my='2'>
								<Flex my='1' justifyContent='flex-start' alignItems='flex-start'>
									<Box ml='4' color='green.200' borderRadius='100%'>
										<Box as={MdPlace} width='1.5rem' height='1.5rem'></Box>
									</Box>
									<Text fontWeight='bold' color='gray.600'>
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
									<Text fontWeight='bold' color='gray.600'>
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
			<NextSeo title='اتصل بنا' description='إذا كان لديك اسفسارات لا تتردد بالإتصال بنا أو محادثتنا على شبكات التواصل الإجتماعي.' />
		</Box>
	);
};

export default ContactUs;
