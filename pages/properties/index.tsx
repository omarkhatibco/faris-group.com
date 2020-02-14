/**jsx @jsx */
import { Box, Flex, Heading, Spinner, Text } from '@chakra-ui/core';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Container } from '~components';
import { wp } from '~utls';

const Properties: NextPage = () => {
	const [data, setData] = useState<any>(null);
	const [loading, setLoading] = useState<any>(false);

	const getData = async () => {
		setLoading(true);
		const searchParams = new URLSearchParams();
		searchParams.append('_embed', '');

		try {
			const response: any = await wp
				.get('property', {
					searchParams,
				})
				.json();

			setData(response);
		} catch (error) {
			console.error({ error });
		}
		setLoading(false);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<Box as='main' width='Full' pt={[16, 20]}>
			<Box py={12}>
				<Container display='flex' flexWrap='wrap'>
					<Box as='article' width={['100%', 3 / 4]} bg='blue' pl={[0, 8]}>
						{!loading ? (
							<Flex height='100%' py={8} justifyContent='center' alignItems='center'>
								<Spinner size='xl' color='green.500' thickness='3px' />
							</Flex>
						) : (
							<Flex height='100%' py={8} justifyContent='center' alignItems='center'>
								<Spinner size='xl' color='green.500' thickness='3px' />
							</Flex>
						)}
					</Box>
					<Box as='aside' width={['100%', 1 / 4]} bg='red' position='relative'>
						<Box
							position='sticky'
							top='6rem'
							width='100%'
							boxShadow='xl'
							borderRadius='0.5rem'
							borderWidth='1px'
							borderColor='gray.100'
							p={6}>
							<Heading
								as='h3'
								mb='2'
								color='green.500'
								fontSize={['2xl', '4xl']}
								textTransform='uppercase'
								fontFamily='inherit'>
								دعنا نساعدك
							</Heading>
							<Text mb='8' fontFamily='inherit'>
								تواصل معنا لمساعدتك بإختيار العقار المناسب لك و للعائلة, إذا لم تجد طلبك على الموقع
								دعنا نطلعك على بعض من أهم عروضنا الحصرية.
							</Text>
						</Box>
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

export default Properties;
