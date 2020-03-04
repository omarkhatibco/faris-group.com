/**jsx @jsx */
import { Box, Flex, Heading, Icon, Link, Stack, Text } from '@chakra-ui/core';
import { css } from '@emotion/core';
import { CorporateContactJsonLd, NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { ContactForm, Container, Map, SocialLinks } from '~components';

const ContactUs = () => {
	const { asPath } = useRouter();
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
									<Icon name='location' ml={4} color='green.500' mt={1} />
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
									<Icon name='email' ml={4} color='green.500' mt={1} />
									<Text fontWeight='bold' color='gray.600'>
										<Link href='mailto:info@faris-group.com'>info@faris-group.com</Link>
									</Text>
								</Flex>
								<Flex my='1' justifyContent='flex-start' alignItems='flex-start'>
									<Icon name='phone' ml={4} color='green.500' mt={1} />
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
			<NextSeo
				title='اتصل بنا'
				description='إذا كان لديك اسفسارات لا تتردد بالإتصال بنا أو محادثتنا على شبكات التواصل الإجتماعي.'
				openGraph={{
					title: 'اتصل بنا',
					url: `https://faris-group.com${asPath}`,
				}}
				canonical={`https://www.faris-group.com${asPath}`}
			/>
			<CorporateContactJsonLd
				logo='https://faris-group.com/social/logo.png'
				url='https://faris-group.com/'
				contactPoint={[
					{
						telephone: '+90 555 8888 483',
						contactType: 'Istanbul Office',
						areaServed: ['TR', 'DZ', 'BH', 'EG', 'IQ', 'JO', 'KW', 'LB', 'SA', 'SY', 'AE', 'YE'],
						availableLanguage: ['English', 'Turkish', 'Arabic'],
					},
					{
						telephone: '+90 555 000 88 82',
						contactType: 'Gaziantep Office',
						areaServed: 'TR',
						availableLanguage: ['English', 'Turkish', 'Arabic'],
					},
				]}
			/>
		</Box>
	);
};

export default ContactUs;
