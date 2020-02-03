/**jsx @jsx */
import { useEffect, useState } from 'react';
import { Spinner, Flex, Box, Grid, Image, IconButton } from '@chakra-ui/core';
import { AppPage } from '~@types/global';
import { DefaultLayout } from '~components/layouts';
import { useRouter } from 'next/router';
import { api } from '~utls/apis';
import { chunk } from '~utls/chunk';
import { css } from '@emotion/core';
import EmblaCarouselReact from 'embla-carousel-react';

const SingleProperties: AppPage = () => {
	const [embla, setEmbla] = useState(null);
	const [data, setData] = useState<any>({});
	const [galleries, setGalleries] = useState<any>([]);
	const {
		query: { slug },
	} = useRouter();
	console.log(slug);

	const getData = async () => {
		if (!slug) {
			return;
		}
		const searchParams = new URLSearchParams();
		searchParams.append('slug', `${slug}`);
		searchParams.append('_embed', '');

		try {
			const response: any = await api
				.get('property', {
					searchParams,
				})
				.json();
			const data = response.find(item => item.slug === slug);
			if (!data) {
				// 404 not found
			}

			const gallerySearchParam = new URLSearchParams();
			gallerySearchParam.append('per_page', '100');
			gallerySearchParam.append('include', data.media_gallery.toString());
			const gallery: any = await api
				.get('media', {
					searchParams: gallerySearchParam,
				})
				.json();
			const sortedGalleries = chunk(
				[...gallery].sort((a, b) => b.source_url - a.source_url).reverse(),
				9
			);
			setData(data);
			setGalleries(sortedGalleries);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getData();
	}, [slug]);

	useEffect(() => {
		if (embla) {
			embla.on('init', () => {
				const startIndex = embla.scrollSnapList().length - 1;
				embla.changeOptions({ startIndex });
			});
			embla.on('select', () => {
				console.log(`Current index is ${embla.selectedScrollSnap()}`);
			});
		}
	}, [embla]);

	return (
		<Box as='main' width='Full' pt='20'>
			<Box p={2} position='relative'>
				{galleries.length > 0 && (
					<EmblaCarouselReact
						emblaRef={setEmbla}
						options={{ loop: false, align: 'start', dragFree: false, containScroll: true }}>
						<Flex
							cursor='grab'
							css={css({
								direction: 'ltr',
							})}
							direction='row-reverse'
							justifyContent='flex-end'
							height='60vh'
							py={4}>
							<Box flex='0 0 50%' minWidth='50vw' height='100%' pl='4'>
								<Image
									borderRadius='0.5rem'
									boxShadow='lg'
									width='100%'
									height='100%'
									objectFit='cover'
									src={
										data?._embedded && data?._embedded['wp:featuredmedia'][0]?.source_url
									}></Image>
							</Box>
							{galleries.map((gallery, index) => (
								<Box
									key={index}
									height='100%'
									pl='4'
									flex='0 0 50%'
									css={css({
										direction: 'rtl',
									})}>
									<Grid
										gap={4}
										templateColumns='repeat(3,minmax(0, 1fr))'
										templateRows='repeat(3,minmax(0, 1fr))'
										autoFlow='column'
										height='100%'>
										{[...gallery]
											.sort((a, b) => (a.source_url > b.source_url ? 1 : -1))
											.map(({ id, source_url }, index) => (
												<Box key={id}>
													<Image
														borderRadius='0.5rem'
														boxShadow='lg'
														src={source_url}
														height='100%'
														width='100%'
														objectFit='cover'></Image>
												</Box>
											))}
									</Grid>
								</Box>
							))}
						</Flex>
					</EmblaCarouselReact>
				)}
				<Flex
					position='absolute'
					width='100%'
					height='100%'
					top='0'
					right='0'
					left='0'
					bottom='0'
					justifyContent='space-between'
					alignItems='center'
					pointerEvents='none'
					px='6'>
					<IconButton
						variant='solid'
						variantColor='green'
						aria-label='Send email'
						icon='chevron-right'
						size='lg'
						pointerEvents='all'
						onClick={() => embla.scrollNext()}
					/>
					<IconButton
						variant='solid'
						variantColor='green'
						aria-label='Send email'
						icon='chevron-left'
						size='lg'
						pointerEvents='all'
						onClick={() => embla.scrollPrev()}
					/>
				</Flex>
			</Box>

			<Spinner color='blau.500' />
			{data?.title?.rendered}
		</Box>
	);
};

SingleProperties.Layout = DefaultLayout;

export default SingleProperties;
