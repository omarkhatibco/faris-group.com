/**jsx @jsx */
import { Box, Button, Flex, Grid, Heading, Spinner, Text } from '@chakra-ui/core';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { BgImage, ConfigContext, Container, PropertyGrid } from '~components';
import { wp } from '~utls';

export const RandomProperties = () => {
	const { properties } = useContext<any>(ConfigContext);
	const [loading, setLoading] = useState<any>(false);
	const [data, setData] = useState<any>([]);

	const getData = async (isReset = false) => {
		setLoading(true);

		const searchParams = new URLSearchParams();
		searchParams.append('_embed', '');
		searchParams.append('per_page', '4');
		searchParams.append('orderby', 'rand');

		try {
			const data: any = await wp
				.get('property', {
					searchParams,
				})
				.json();
			setData(data);
		} catch (error) {
			console.error({ error });
		}
		setLoading(false);
	};
	useEffect(() => {
		getData();
	}, []);

	const transitions = useTransition(data, item => item.id, {
		from: { opacity: 0, height: 0 },
		enter: { opacity: 1, height: 'auto' },
		leave: { display: 'none' },
		trail: 200,
		unique: true,
		reset: true,
	});

	return (
		<Flex as='section' py={12} position='relative'>
			<BgImage zIndex={-1} src={properties?.IntroImage} alt='Istanbul bridge' />
			<Container>
				<Box textAlign='center' mb={8}>
					<Heading as='h1' fontSize='6xl' textAlign='center' color='green.500'>
						العقارات المتوفرة
					</Heading>
					<Text fontSize={['md', 'lg']}>ابحث عن عقارك بالمواصفات التي ترغب بها</Text>
				</Box>
				<Box width={'100%'}>
					{loading && (
						<Flex height='100%' py={20} justifyContent='center' alignItems='center'>
							<Spinner size='xl' color='green.500' thickness='3px' />
						</Flex>
					)}
					{!loading && data?.length > 0 && (
						<Grid gridGap={8} gridTemplateColumns={['repeat(1,1fr)', 'repeat(4,1fr)']}>
							{transitions.map(({ item, props, key }) => (
								<animated.div key={key} style={props}>
									<PropertyGrid key={item?.id} data={item} />
								</animated.div>
							))}
						</Grid>
					)}
				</Box>
				<Flex justifyContent='center' mt={8}>
					<Link href='/properties/'>
						<Button size='lg' cursor='pointer' variantColor='green' as='a'>
							عرض العقارات
						</Button>
					</Link>
				</Flex>
			</Container>
		</Flex>
	);
};
