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
						height={'60vh'}>
						{galleries.map(({ id, source_url, alt_text, media_details }) => {
							const { width: orginalWidth, height: orginalHeight } = media_details;
							const widthInPx = (orginalWidth * (windowHeight * 60)) / 100 / orginalHeight;
							const width = (100 * widthInPx) / windowWidth;
							const imgSrc =
								parseInt(Number(widthInPx).toFixed(0), 10) > windowWidth
									? `${source_url}?h=${Number((windowHeight * 60) / 100).toFixed(0)}&quality=100`
									: `${source_url}?w=${Number(widthInPx).toFixed(0)}&quality=100`;

							return (
								<Box
									flex={['0 0 100%', `0 0 ${width}%`]}
									width={['100%', `${width}%`]}
									height='100%'
									pl={[0, 1]}
									key={id}>
									<Image src={imgSrc} height='100%' width='100%' objectFit='cover' alt={alt_text} />
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
