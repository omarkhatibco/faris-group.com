/**jsx @jsx */
import { useEffect, useState } from 'react';
import { Flex, Box, Image, IconButton } from '@chakra-ui/core';
import { css } from '@emotion/core';
import EmblaCarouselReact from 'embla-carousel-react';
import { useWindowSize } from 'react-use';

export const ImageSlider = ({ galleries, featuredmedia }) => {
	const [embla, setEmbla] = useState(null);
	const { width: windowWidth, height: windowHeight } = useWindowSize();

	useEffect(() => {
		if (embla) {
			embla.on('init', () => {
				const startIndex = embla.scrollSnapList().length - 1;
				console.log(embla.scrollSnapList());
				embla.changeOptions({ startIndex });
			});
		}
	}, [embla]);

	return (
		<Box position='relative'>
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
						{galleries.map(({ id, source_url, alt_text, media_details }) => {
							const { width: orginalWidth, height: orginalHeight } = media_details;
							const width =
								(100 * ((orginalWidth * (windowHeight * 60)) / 100)) / orginalHeight / windowWidth;
							return (
								<Box flex={`0 0 ${width}%`} width={`${width}%`} height='100%' pl='1' key={id}>
									<Image
										src={`${source_url}?w=750&quality=100`}
										height='100%'
										width='100%'
										objectFit='cover'
										alt={alt_text}
									/>
								</Box>
							);
						})}
					</Flex>
				</EmblaCarouselReact>
			)}
			{galleries.length > 0 && (
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
						borderRadius='100%'
						size='lg'
						pointerEvents='all'
						onClick={() => embla.scrollNext()}
					/>
					<IconButton
						variant='solid'
						variantColor='green'
						aria-label='Send email'
						icon='chevron-left'
						borderRadius='100%'
						size='lg'
						pointerEvents='all'
						onClick={() => embla.scrollPrev()}
					/>
				</Flex>
			)}
		</Box>
	);
};
