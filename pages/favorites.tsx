/**jsx @jsx */
import { Box, Flex, Grid, Heading, Spinner, Text } from '@chakra-ui/core';
import { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';
import { BgImage, ConfigContext, Container, PropertyGrid } from '~components';
import { wp } from '~utls';

const Favorites: NextPage = () => {
	const { properties } = useContext<any>(ConfigContext);
	const [favorite] = useLocalStorage('favorite-properties', []);
	const [data, setData] = useState<any>(null);
	const [loading, setLoading] = useState<any>(false);

	const getData = async () => {
		if (favorite?.length < 1) return;

		setLoading(true);
		const searchParams = new URLSearchParams();
		searchParams.append('_embed', '');
		searchParams.append('per_page', '100');
		searchParams.append('include', favorite?.toString());

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
		<Box as='main' width='Full'>
			<Flex
				width='100%'
				overflow='hidden'
				position='relative'
				justifyItems='center'
				alignItems='center'>
				<BgImage src={properties?.IntroImage} alt='Istanbul bridge' />
				<Container
					zIndex={1}
					display='flex'
					flexWrap='wrap'
					alignItems='center'
					justifyContent='center'>
					<Box textAlign='center' width={[2 / 3]} pt={32} pb={12}>
						<Heading as='h1' mb='4' fontSize={['2xl', '5xl']} textTransform='uppercase'>
							المفضلة
						</Heading>
						<Box>
							<Text fontSize={['sm', 'md']}>
								هنا يمكنك حفظ العقارات التي لديك إهتمام بها لمراجعتها و الإطلاع عليها في وقت لاحق.
							</Text>
						</Box>
					</Box>
				</Container>
			</Flex>
			<Box py={12}>
				<Container display='flex' flexWrap='wrap'>
					<Box width='100%'>
						{!loading ? (
							<Grid
								gridGap={8}
								gridTemplateColumns={['repeat(1,1fr)', , 'repeat(2,1fr)', 'repeat(4,1fr)']}>
								{data?.map(obj => (
									<PropertyGrid key={obj?.id} data={obj} />
								))}
							</Grid>
						) : (
							<Flex height='100%' py={8} justifyContent='center' alignItems='center'>
								<Spinner size='xl' color='green.500' thickness='3px' />
							</Flex>
						)}
						{!loading && !data && (
							<Flex height='100%' py={8} justifyContent='center' alignItems='center'>
								<Text>لم تقم بحفظ أية عقار في المفضلة</Text>
							</Flex>
						)}
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

export default Favorites;
