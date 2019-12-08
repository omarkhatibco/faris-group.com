import { Spinner, Flex, Text, Box, Stack, Heading, Link, IconButton, Icon } from '@chakra-ui/core';
import { AppPage } from '~@types/global';
import { Map, Container, Form, Submit, Field, TextareaField } from '~components';
import { DefaultLayout } from '~components/layouts';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { MdPlace, MdPhone, MdEmail, MdPerson, MdSubject } from 'react-icons/md';

const ContactUs: AppPage = () => {
	return (
		<Box as='main' width='Full'>
			<Map />
			<Box py='16'>
				<Container>
					<Flex flexWrap='wrap'>
						<Box width={['100%', 2 / 3]} pr={['0', '12']} pb={['12', '0']}>
							<Heading as='h1' color='green.500' pb='4' textTransform='uppercase'>
								Drop us a message
							</Heading>
							<Form
								onSubmit={values => {
									console.log({ values });
								}}
								options={{}}>
								<Stack spacing='6'>
									<Box>
										<Field
											name='name'
											placeholder='Name'
											autoComplete='on'
											size='lg'
											icon={<Box as={MdPerson} width='1rem' height='1rem' color='green.300' />}
											isRequired></Field>
									</Box>
									<Box>
										<Field
											name='email'
											type='email'
											placeholder='Email'
											autoComplete='on'
											size='lg'
											icon={<Box as={MdEmail} width='1rem' height='1rem' color='green.300' />}
											isRequired></Field>
									</Box>
									<Box>
										<Field
											name='mobile'
											type='tel'
											placeholder='Phone Number'
											autoComplete='on'
											size='lg'
											icon={<Box as={MdPhone} width='1rem' height='1rem' color='green.300' />}
											isRequired></Field>
									</Box>
									<Box>
										<TextareaField
											name='message'
											placeholder='Message'
											size='lg'
											icon={<Box as={MdSubject} width='1rem' height='1rem' color='green.300' />}
											isRequired></TextareaField>
									</Box>
									<Box>
										<Submit variantColor='green'>Send Message</Submit>
									</Box>
								</Stack>
							</Form>
						</Box>
						<Box width={['100%', 1 / 3]}>
							<Heading as='h2' color='green.500' textTransform='uppercase'>
								Social Media
							</Heading>
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
							<Heading as='h2' color='green.500' textTransform='uppercase'>
								Contact Info
							</Heading>
							<Stack my='2'>
								<Flex my='1' justifyContent='flex-start' alignItems='flex-start'>
									<Box mr='4' color='green.200' borderRadius='100%'>
										<Box as={MdPlace} width='2rem' height='2rem'></Box>
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
									<Box mr='4' color='green.200' borderRadius='100%'>
										<Box as={MdEmail} width='2rem' height='2rem'></Box>
									</Box>
									<Text fontWeight='bold' color='gray.600'>
										<Link href='mailto:info@faris-group.com'>info@faris-group.com</Link>
									</Text>
								</Flex>
								<Flex my='1' justifyContent='flex-start' alignItems='flex-start'>
									<Box mr='4' color='green.200' borderRadius='100%'>
										<Box as={MdPhone} width='2rem' height='2rem'></Box>
									</Box>
									<Text fontWeight='bold' color='gray.600'>
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
