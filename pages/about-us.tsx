import { Box, Flex, Text, Heading, Image, Grid, Stack, PseudoBox, Scale } from '@chakra-ui/core';

import { AppPage } from '~@types/global';
import { DefaultLayout } from '~components/layouts';

// ICONS
import { CheckList, Office, Planning, Search } from '~assets/svgComponents';

const AboutUs: AppPage = () => {
	return (
		<Flex w='full' flexDirection='column' justifyItems='center' alignItems='center'>
			<Box
				width={['100%']}
				h='50vh'
				display='flex'
				justifyContent='center'
				flexDir='column'
				px={16}>
				<Heading>
					We are
					<Text color='green.500' d='inline'>
						{' '}
						EVERYTHING
					</Text>
					<br />
					real estate needs
				</Heading>
				<Text>Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum</Text>
			</Box>

			<Flex flexDir={['row']} flexWrap={['wrap']} my={16}>
				<Box display='flex' width={['100%', '100%', '100%', 1 / 2]} justifyContent='stetch'>
					<Image src='https://source.unsplash.com/960x600/?istanbul' alt='services Picture' />
				</Box>
				<Box width={['100%', '100%', '100%', 1 / 2]}>
					<Box width='100%' px={4} py={[8, 8, 0]}>
						<Heading as='h2' color='teal.500'>
							Services
						</Heading>
					</Box>
					<Stack flexDir='row' flexWrap='wrap' width='100%' position='relative' spacing={4}>
						<Box width={['100%', '100%', '50%', '50%']} px={4}>
							<Box as={Office} size={20} display='block' />
							<Heading color='teal.500' size='md'>
								Real Estate Marketing
							</Heading>
							<Text>
								Real Estate Marketing in Turkey, Tomorrow is a study that examines the needs and
								desires of current and future clients in real estate ownership.
							</Text>
						</Box>
						<Box width={['100%', '100%', '50%', '50%']} px={4}>
							<Box as={Planning} size={20} display='block' />
							<Heading color='teal.500' size='md'>
								Real Estate Consulting
							</Heading>
							<Text>
								Turkey’s real estate consultancy provides information and initial expectations for
								investors in the Turkish real estate sector, both on the cost of investment projects
								and the expected yield
							</Text>
						</Box>
						<Box width={['100%', '100%', '50%', '50%']} px={4}>
							<Box as={Search} size={20} display='block' />
							<Heading color='teal.500' size='md'>
								Real Estate Management
							</Heading>
							<Text>
								When the real estate management service is requested in Turkey, Al Fares Real Estate
								Group will offer a range of services including design, decoration, leasing and even
								real estate appraisal.
							</Text>
						</Box>
						<Box width={['100%', '100%', '50%', '50%']} px={4}>
							<Box as={CheckList} size={20} display='block' />
							<Heading color='teal.500' size='md'>
								Real Estate Tours
							</Heading>
							<Text>
								Al-Faris Real Estate Services includes transportation to and from the airport,
								bridges and tourist attractions in Istanbul by providing modern and luxurious cars
								and vans with specialized drivers
							</Text>
						</Box>
					</Stack>
				</Box>

				<Box width={['100%', '100%', '100%', 1 / 2]} order={[2, 2, 1, 1]} mt={2}>
					<Box width={['100%']} px={4}>
						<Heading color='teal.500' py={2} textTransform='uppercase'>
							Philosophy
						</Heading>
						<Text py={2}>
							We look at Turkey as the next investment paradise, and as it is the paradise of the
							land where tourists are staying, investors are also looking forward to it. We believe
							in the principle of the brotherhood of the countries, the friendship of the people,
							wherever you are, Turkey, your second home, the people of your family, and your
							country.
						</Text>
						<Heading color='teal.500' py={2} textTransform='uppercase'>
							Real Estate Education
						</Heading>
						<Text py={2}>
							We publish a series of seminars on real estate ownership in Turkey. We also publish
							and publish specialized articles on the Turkish economy, the latest developments in
							infrastructure, the new laws relating to real estate, and all that matters to the
							investor and who wants to own or live in Turkey.
						</Text>
						<Heading color='teal.500' py={2} textTransform='uppercase'>
							Why Turkey?
						</Heading>
						<Text py={2}>
							The new Turkey is a rapidly rising and confident country, and its growth index is
							known only to jump and rise, coinciding with the revolution of infrastructure,
							government facilities, industrial and medical development, and giant projects that
							take Turkey from past to future quickly! Such as the Istanbul III Airport Project,
							located in the Arnaout Cui area north of Istanbul, with an area of about 7,500
							hectares, accommodating 200 million passengers annually and reaching 350 world points.
							<br /> As the people and power harmonize, the country enters the era of stability,
							Investors.
						</Text>
					</Box>
				</Box>
				<Box
					width={['100%', '100%', '100%', 1 / 2]}
					display='flex'
					alignItems='center'
					order={[1, 1, 2, 2]}>
					<Grid templateColumns='repeat(1, 1fr)' gap={4} m={4}>
						<PseudoBox
							w='100%'
							_hover={{ transform: 'scale(1.25)', mx: 4 }}
							transition='all .2s ease-in-out'>
							<Image
								src='https://source.unsplash.com/960x900/?istanbul'
								alt='services Picture'
								shadow='md'
							/>
						</PseudoBox>
						<PseudoBox
							w='100%'
							_hover={{ transform: 'scale(1.25)', mx: 4 }}
							transition='all .2s ease-in-out'>
							<Image
								src='https://source.unsplash.com/960x900/?istanbul'
								alt='services Picture'
								shadow='md'
							/>
						</PseudoBox>
					</Grid>
					<Grid templateColumns='repeat(1, 1fr)' gap={4} mt={8}>
						<PseudoBox
							w='100%'
							_hover={{ transform: 'scale(1.25)', mx: 4 }}
							transition='all .2s ease-in-out'>
							<Image
								src='https://source.unsplash.com/960x900/?istanbul'
								alt='services Picture'
								shadow='md'
							/>
						</PseudoBox>
						<PseudoBox
							w='100%'
							_hover={{ transform: 'scale(1.25)', mx: 4 }}
							transition='all .2s ease-in-out'>
							<Image
								src='https://source.unsplash.com/960x900/?istanbul'
								alt='services Picture'
								shadow='md'
							/>
						</PseudoBox>
					</Grid>
				</Box>
			</Flex>
		</Flex>
	);
};

AboutUs.Layout = DefaultLayout;

export default AboutUs;
