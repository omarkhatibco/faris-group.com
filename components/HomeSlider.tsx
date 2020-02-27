import { Box, Flex, IconButton } from '@chakra-ui/core';
import { css } from '@emotion/core';
import EmblaCarouselReact from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { HomeSlide } from '~components';
import { useInterval, wp } from '~utls';

export const HomeSlider = () => {
	const [data, setData] = useState<any>([]);
	const [embla, setEmbla] = useState(null);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState([]);
	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

	const scrollTo = useCallback(index => embla.scrollTo(index), [embla]);
	const scrollPrev = useCallback(() => embla.scrollPrev(), [embla]);
	const scrollNext = useCallback(() => embla.scrollNext(), [embla]);

	const getData = async (isReset = false) => {
		const searchParams = new URLSearchParams();
		searchParams.append('_embed', '');
		searchParams.append('per_page', '5');
		searchParams.append('filter[meta_query][0][key]', 'is_featured_slider');
		searchParams.append('filter[meta_query][0][value]', '1');

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
	};

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		const onSelect = () => {
			setSelectedIndex(embla.selectedScrollSnap());
			setPrevBtnEnabled(embla.canScrollPrev());
			setNextBtnEnabled(embla.canScrollNext());
		};
		if (embla) {
			embla.on('init', () => {
				const startIndex = embla.scrollSnapList().length - 1;
				embla.changeOptions({ startIndex });
				scrollTo(startIndex - 1);
			});
			setScrollSnaps(embla.scrollSnapList());
			embla.on('select', onSelect);
			onSelect();
		}
		return () => embla && embla.destroy();
	}, [embla]);

	useInterval(() => {
		if (selectedIndex === 0) {
			scrollTo(scrollSnaps.length - 1);
		} else {
			scrollPrev();
		}
	}, 8000);

	return (
		<Box as='section' borderBottom='1px solid' borderBottomColor='gray.100' position='relative'>
			{data.length > 0 && (
				<EmblaCarouselReact
					emblaRef={setEmbla}
					options={{ loop: false, align: 'start', dragFree: false, containScroll: true }}>
					<Flex
						cursor='grab'
						css={css({
							direction: 'ltr',
						})}
						direction='row-reverse'
						justifyContent='flex-end'>
						{data?.map(props => {
							return (
								<Box flex='0 0 100%' width='100%' minHeight='100%' key={props.id}>
									<HomeSlide key={data?.id} data={props} />
								</Box>
							);
						})}
					</Flex>
				</EmblaCarouselReact>
			)}
			{data.length > 0 && (
				<Flex
					position='absolute'
					width='100%'
					height={['50vh', '50vh', '100%']}
					top='0'
					right='0'
					left='0'
					bottom='0'
					justifyContent='space-between'
					alignItems='center'
					pointerEvents='none'
					px={[3, 3, 6]}>
					<IconButton
						variant='solid'
						variantColor='green'
						aria-label='Send email'
						icon='chevron-right'
						isRound
						size='lg'
						pointerEvents='all'
						isDisabled={!nextBtnEnabled}
						onClick={() => scrollNext()}
					/>
					<IconButton
						variant='solid'
						variantColor='green'
						aria-label='Send email'
						icon='chevron-left'
						isRound
						size='lg'
						pointerEvents='all'
						isDisabled={!prevBtnEnabled}
						onClick={() => scrollPrev()}
					/>
				</Flex>
			)}
		</Box>
	);
};
