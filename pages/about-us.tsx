import { Box, Flex, Text, Heading, Image } from '@chakra-ui/core';

import { AppPage } from '~@types/global';
import { DefaultLayout } from '~components/layouts';

// ICONS
import { CheckList, Office, Planning, Search } from '~assets/svgComponents';

const AboutUs: AppPage = () => {
	return (
		<Flex w='full' flexDirection='column'>
			<Box px={[16, 32]} py={32} width={['full', 6 / 12]} h='30vh'>
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
				<Box width={['100%', 1 / 2]}>
					<Image src='https://source.unsplash.com/960x600/?istanbul' alt='services Picture' />
				</Box>
				<Box width={['100%', 1 / 2]}>
					<Box width='100%' px={[8, 32]} py='16'>
						<Heading
							as='h2'
							textAlign='center'
							borderBottom='1px'
							borderBottomColor='teal.500'
							lineHeight='0.1em'>
							<Text
								background='#fff'
								d='inline'
								color='gray.500'
								as='span'
								fontSize='32px'
								px='12px'>
								Services
							</Text>
						</Heading>
					</Box>
					<Flex width='100%' flexWrap={['wrap', 'unset']}>
						<Box
							d='inline-flex'
							px={[4, 8]}
							py={[4, 0]}
							justifyContent='center'
							alignItems='center'>
							<Box as={Office} size={16} d='inline' />
							<Text mx={2} width='50%'>
								TEST :PREMTEST :PREMTEST :PREM
							</Text>
						</Box>
						<Box
							d='inline-flex'
							px={[4, 8]}
							py={[4, 0]}
							justifyContent='center'
							alignItems='center'>
							<Box as={CheckList} size={16} d='inline' />
							<Text mx={2} width='50%'>
								TEST :PREMTEST :PREMTEST :PREM
							</Text>
						</Box>
					</Flex>
					<Flex width='100%' flexWrap={['wrap', 'unset']} py={[4, 24]}>
						<Box
							d='inline-flex'
							px={[4, 8]}
							py={[4, 0]}
							justifyContent='center'
							alignItems='center'>
							<Box as={Search} size={16} d='inline' />
							<Text mx={2} width='50%'>
								TEST :PREMTEST :PREMTEST :PREM
							</Text>
						</Box>
						<Box
							d='inline-flex'
							px={[4, 8]}
							py={[4, 0]}
							justifyContent='center'
							alignItems='center'>
							<Box as={Planning} size={16} d='inline' />
							<Text mx={2} width='50%'>
								TEST :PREMTEST :PREMTEST :PREM
							</Text>
						</Box>
					</Flex>
				</Box>
			</Flex>
			<Flex w='100%' flexDirection='column'>
				<Box width={['100%', '50%']} px={[4, 32]} py='8'>
					<Heading
						as='h2'
						textAlign='center'
						borderBottom='1px'
						borderBottomColor='teal.500'
						lineHeight='0.1em'>
						<Text background='#fff' d='inline' color='gray.500' as='span' fontSize='32px' px='12px'>
							About us
						</Text>
					</Heading>
				</Box>
				<Box width={['100%', 4 / 6]} px={[4, 32]}>
					<Heading
						color='teal.500'
						borderBottom='1px'
						borderBottomColor='#ccc'
						py={2}
						textTransform='uppercase'>
						Philosophy
					</Heading>
					<Text py={2}>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
						has been the industry's standard dummy text ever since the 1500s, when an unknown
						printer took a galley of type and scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
						publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
						has been the industry's standard dummy text ever since the 1500s, when an unknown
						printer took a galley of type and scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
						publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
						has been the industry's standard dummy text ever since the 1500s, when an unknown
						printer took a galley of type and scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
						publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</Text>
				</Box>
			</Flex>
		</Flex>
	);
};

AboutUs.Layout = DefaultLayout;

export default AboutUs;
