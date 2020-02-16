/**jsx @jsx */
import { Box, Flex, Grid, Heading, Spinner, Text } from '@chakra-ui/core';
import { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import { BgImage, ConfigContext, Container, PropertyGrid } from '~components';
import { wp } from '~utls';

const Properties: NextPage = () => {
	const { properties } = useContext<any>(ConfigContext);
	const { width: windowWidth, height: windowHeight } = useWindowSize();
	const [data, setData] = useState<any>(null);
	const [loading, setLoading] = useState<any>(false);

	const getData = async () => {
		setLoading(true);
		const searchParams = new URLSearchParams();
		searchParams.append('_embed', '');
		searchParams.append('per_page', '100');

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
					<Box textAlign='center' width={[1 / 2]} pt={32} pb={12}>
						<Heading
							as='h1'
							mb='4'
							fontSize={['2xl', '5xl']}
							textTransform='uppercase'
							textShadow='lg'
							fontFamily='inherit'>
							ابحث عن عقارك
						</Heading>
						<Box>
							<Text textShadow='lg' fontSize={['sm', 'md']} fontFamily='inherit'>
								مجموعة الفارس متخصصة بالاستشارات العقارية والوساطة، مقرها في إسطنبول ، ولديها تعامل
								في مدن أخرى في تركيا، واتفاقيات عديدة مع شركات الإنشاء الكبرى في إسطنبول، تركّز
								اهتمامها على المستثمرين العقاريين الأجانب، والراغبين بالتملك في تركيا
							</Text>
						</Box>
					</Box>
				</Container>
			</Flex>
			<Box py={12}>
				<Container display='flex' flexWrap='wrap'>
					<Box as='article' width={['100%', 4 / 5]} pl={[0, 8]}>
						{!loading ? (
							<Grid gridGap={8} gridTemplateColumns={['repeat(1,1fr)', 'repeat(3,1fr)']}>
								{data?.map(obj => (
									<PropertyGrid key={obj?.id} data={obj} />
								))}
							</Grid>
						) : (
							<Flex height='100%' py={8} justifyContent='center' alignItems='center'>
								<Spinner size='xl' color='green.500' thickness='3px' />
							</Flex>
						)}
					</Box>
					<Box as='aside' width={['100%', 1 / 5]} position='relative'>
						<Box
							position='sticky'
							top='6rem'
							width='100%'
							boxShadow='xl'
							borderRadius='0.5rem'
							borderWidth='1px'
							borderColor='gray.100'
							p={6}>
							filter here
						</Box>
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

export default Properties;
