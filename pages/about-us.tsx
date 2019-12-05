import { Box, Flex, Text, Heading, Image } from '@chakra-ui/core';

import { AppPage } from '~@types/global';
import { DefaultLayout } from '~components/layouts';

// ICONS
import { CheckList, Office, Planning, Search } from '~assets/svgComponents';

const AboutUs: AppPage = () => {
	return (
		<Flex w='full' flexDirection='column'>
			<Box px={[16, 32]} py={32} width={['100%']} h='30vh'>
				<Heading>
					We are{' '}
					<Text color='green.500' d='inline'>
						EVERYTHING
					</Text>
					<br />
					real estate needs
				</Heading>
				<Text>Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum</Text>
			</Box>

			<Flex py={32} flexDir={['row']} flexWrap={['wrap']}>
				<Box width={['100%', '100%', '100%', 1 / 2]}>
					<Image src='https://source.unsplash.com/960x600/?istanbul' alt='services Picture' />
				</Box>
				<Box width={['100%', '100%', '100%', 1 / 2]}>
					<Box width='100%' px={4} py={[8, 8, 0]}>
						<Heading as='h2' color='teal.500'>
							Services
						</Heading>
					</Box>
					<Flex flexWrap='wrap' width='100%' px={4}>
						<Box width={['100%', '100%', '50%', '50%']} px={2} my={6}>
							<Box as={Office} size={20} display='block' />
							<Heading color='teal.500' size='md'>
								Lorem Ipsum
							</Heading>
							<Text>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industry's standard dummy text ever since the 1500s, when an
								unknown printer took a galley of type and scrambled it to make
							</Text>
						</Box>
						<Box width={['100%', '100%', '50%', '50%']} px={2} my={6}>
							<Box as={Office} size={20} display='block' />
							<Heading color='teal.500' size='md'>
								Lorem Ipsum
							</Heading>
							<Text>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industry's standard dummy text ever since the 1500s, when an
								unknown printer took a galley of type and scrambled it to make
							</Text>
						</Box>
						<Box width={['100%', '100%', '50%', '50%']} px={2} my={6}>
							<Box as={Office} size={20} display='block' />
							<Heading color='teal.500' size='md'>
								Lorem Ipsum
							</Heading>
							<Text>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industry's standard dummy text ever since the 1500s, when an
								unknown printer took a galley of type and scrambled it to make
							</Text>
						</Box>
						<Box width={['100%', '100%', '50%', '50%']} px={2} my={6}>
							<Box as={Office} size={20} display='block' />
							<Heading color='teal.500' size='md'>
								Lorem Ipsum
							</Heading>
							<Text>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industry's standard dummy text ever since the 1500s, when an
								unknown printer took a galley of type and scrambled it to make
							</Text>
						</Box>
					</Flex>
				</Box>
			</Flex>
			<Flex w='100%' flexDirection='column'>
				<Box width='100%' px={4}>
					<Heading as='h2' color='teal.500'>
						Services
					</Heading>
				</Box>
				<Box width={['100%']} px={4}>
					<Heading
						color='teal.500'
						borderBottom='1px'
						borderBottomColor='#ccc'
						py={2}
						textTransform='uppercase'>
						Philosophy
					</Heading>
					<Text py={2}>
						We look at Turkey as the next investment paradise, and as it is the paradise of the land
						where tourists are staying, investors are also looking forward to it. We believe in the
						principle of the brotherhood of the countries, the friendship of the people, wherever
						you are, Turkey, your second home, the people of your family, and your country.
					</Text>
					<Heading
						color='teal.500'
						borderBottom='1px'
						borderBottomColor='#ccc'
						py={2}
						textTransform='uppercase'>
						Real Estate Education
					</Heading>
					<Text py={2}>
						We publish a series of seminars on real estate ownership in Turkey. We also publish and
						publish specialized articles on the Turkish economy, the latest developments in
						infrastructure, the new laws relating to real estate, and all that matters to the
						investor and who wants to own or live in Turkey.
					</Text>
					<Heading
						color='teal.500'
						borderBottom='1px'
						borderBottomColor='#ccc'
						py={2}
						textTransform='uppercase'>
						Why Turkey?
					</Heading>
					<Text py={2}>
						The new Turkey is a rapidly rising and confident country, and its growth index is known
						only to jump and rise, coinciding with the revolution of infrastructure, government
						facilities, industrial and medical development, and giant projects that take Turkey from
						past to future quickly! Such as the Istanbul III Airport Project, located in the Arnaout
						Cui area north of Istanbul, with an area of about 7,500 hectares, accommodating 200
						million passengers annually and reaching 350 world points.
						<br /> As the people and power harmonize, the country enters the era of stability,
						Investors.
					</Text>
				</Box>
			</Flex>
		</Flex>
	);
};

AboutUs.Layout = DefaultLayout;

export default AboutUs;
