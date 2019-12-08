import { Box, Flex, Text, Heading, Image, Grid, Stack, PseudoBox, css } from '@chakra-ui/core';

import { AppPage } from '~@types/global';
import { DefaultLayout } from '~components/layouts';

// ICONS
import { CheckList, Office, Planning, Search } from '~assets/svgComponents';
import { Container, BgImage, LongPromo } from '~components';

const AboutUs: AppPage = () => {
	return (
		<Flex as='main' w='full' flexDirection='column' justifyItems='center' alignItems='center'>
			<Flex width='100%' h={['100vh', 'auto']} overflow='hidden' position='relative'>
				<BgImage src='/images/about.us.bg.jpg' alt='Istanbul bridge' />
				<Container py={['4', '32']} zIndex={1} color='white' display='flex' alignItems='flex-end'>
					<Box>
						<Heading as='h1' mb='4' fontSize={['2xl', '5xl']} textTransform='uppercase'>
							We are{' '}
							<Text as='span' color='yellow.500'>
								EVERYTHING
							</Text>
							<br />
							real estate needs
						</Heading>
						<Box width={['100%', 1 / 2]}>
							<Text fontSize={['sm', 'md']}>
								Faris Group specializes in real estate consultancy and brokerage, based in Istanbul,
								has dealings in other cities in Turkey, as agents in several Arab cities, and many
								agreements with major construction companies in Istanbul, focused on foreign real
								estate investors, and those wishing to own in Turkey
							</Text>
						</Box>
					</Box>
				</Container>
			</Flex>

			<Flex as='section' flexWrap='wrap' width='100%'>
				<Box width={['100%', '100%', 2 / 5]} height={['50vh', '50vh', 'auto']} position='relative'>
					<Image
						src='/images/our.service.1.jpg'
						alt='Modern real estate'
						objectFit='cover'
						position='absolute'
						top='0'
						bottom='0'
						right='0'
						left='0'
						width='100%'
						height='100%'
					/>
				</Box>
				<Box width={['100%', '100%', 3 / 5]} p={[6, 12]}>
					<Heading
						as='h2'
						fontSize={['xl', '5xl']}
						color='green.500'
						textTransform='uppercase'
						mb='4'>
						Our Services
					</Heading>
					<Stack isInline mb='8' spacing={4}>
						<Box width={1 / 2}>
							<Box as={Office} size={16} mb='4' />
							<Heading as='h3' color='green.500' size='md' mb='2' fontWeight='medium'>
								Real Estate Marketing
							</Heading>
							<Text fontSize='sm'>
								Real Estate Marketing in Turkey, Tomorrow is a study that examines the needs and
								desires of current and future clients in real estate ownership.
							</Text>
						</Box>
						<Box width={1 / 2}>
							<Box as={Planning} size={16} mb='4' />
							<Heading as='h3' color='green.500' size='md' mb='2' fontWeight='medium'>
								Real Estate Consulting
							</Heading>
							<Text fontSize='sm'>
								Turkey’s real estate consultancy provides information and initial expectations for
								investors in the Turkish real estate sector, both on the cost of investment projects
								and the expected yield
							</Text>
						</Box>
					</Stack>
					<Stack isInline spacing={4}>
						<Box width={1 / 2}>
							<Box as={Search} size={16} mb='4' />
							<Heading as='h3' color='green.500' size='md' mb='2' fontWeight='medium'>
								Real Estate Management
							</Heading>
							<Text fontSize='sm'>
								When the real estate management service is requested in Turkey, Al Fares Real Estate
								Group will offer a range of services including design, decoration, leasing and even
								real estate appraisal.
							</Text>
						</Box>
						<Box width={1 / 2}>
							<Box as={CheckList} size={16} mb='4' />
							<Heading as='h3' color='green.500' size='md' mb='2' fontWeight='medium'>
								Real Estate Tours
							</Heading>
							<Text fontSize='sm'>
								Al-Faris Real Estate Services includes transportation to and from the airport,
								bridges and tourist attractions in Istanbul by providing modern and luxurious cars
								and vans with specialized drivers
							</Text>
						</Box>
					</Stack>
				</Box>
				<LongPromo />
				<Flex as='section' flexWrap='wrap' width='100%'>
					<Box
						width={['100%', '100%', 4 / 7, 3 / 5]}
						p={[6, 12]}
						order={[1, 0]}
						backgroundColor='gray.50'>
						<Heading as='h3' color='green.500' textTransform='uppercase' mb='2' mt='8'>
							Philosophy
						</Heading>
						<Text>
							We look at Turkey as the next investment paradise, and as it is the paradise of the
							land where tourists are staying, investors are also looking forward to it. We believe
							in the principle of the brotherhood of the countries, the friendship of the people,
							wherever you are, Turkey, your second home, the people of your family, and your
							country.
						</Text>
						<Heading as='h3' color='green.500' textTransform='uppercase' mb='2' mt='8'>
							Real Estate Education
						</Heading>
						<Text>
							We publish a series of seminars on real estate ownership in Turkey. We also publish
							and publish specialized articles on the Turkish economy, the latest developments in
							infrastructure, the new laws relating to real estate, and all that matters to the
							investor and who wants to own or live in Turkey.
						</Text>
						<Heading as='h3' color='green.500' textTransform='uppercase' mb='2' mt='8'>
							Why Turkey?
						</Heading>
						<Text>
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
					<Box
						width={['100%', '100%', 3 / 7, 2 / 5]}
						height={['50vh', '50vh', 'auto']}
						position='relative'
						order={[0, 1]}>
						<Image
							src='/images/why.turkey.jpg'
							alt='turkey flag on Dolmabahçe Sarayı'
							objectFit='cover'
							position='absolute'
							top='0'
							bottom='0'
							right='0'
							left='0'
							width='100%'
							height='100%'
						/>
					</Box>
				</Flex>
			</Flex>
		</Flex>
	);
};

AboutUs.Layout = DefaultLayout;

export default AboutUs;
