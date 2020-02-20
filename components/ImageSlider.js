/**jsx @jsx */
import { Box, Flex, IconButton } from '@chakra-ui/core';
import { css } from '@emotion/core';
import EmblaCarouselReact from 'embla-carousel-react';
import { useEffect, useState } from 'react';
import { Image } from '~components';

export const ImageSlider = ({ galleries }) => {
	const [embla, setEmbla] = useState(null);

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
			{galleries && (
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
						{galleries?.map(({ id, source_url, alt_text }) => {
							return (
								<Box
									flex={['0 0 100%', `0 0 45%`]}
									width={['100%', '45%']}
									height='100%'
									pl={[0, 1]}
									key={id}>
									<Image
										src={`${source_url}?w=700&quality=100`}
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
			{galleries && (
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
						isRound
						size='lg'
						pointerEvents='all'
						onClick={() => embla.scrollNext()}
					/>
					<IconButton
						variant='solid'
						variantColor='green'
						aria-label='Send email'
						icon='chevron-left'
						isRound
						size='lg'
						pointerEvents='all'
						onClick={() => embla.scrollPrev()}
					/>
				</Flex>
			)}
		</Box>
	);
};