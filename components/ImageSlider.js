/**jsx @jsx */
import { Box, Flex, IconButton } from '@chakra-ui/core';
import { css } from '@emotion/core';
import EmblaCarouselReact from 'embla-carousel-react';
import { useEffect, useState } from 'react';
import { Image } from '~components';
import { getCdnUrl } from '~utls';

export const ImageSlider = ({ galleries }) => {
	const [embla, setEmbla] = useState(null);

	useEffect(() => {
		if (embla) {
			embla.on('init', () => {
				const startIndex = embla.scrollSnapList().length - 1;
				embla.changeOptions({ startIndex });
			});
		}
		return () => embla && embla.destroy();
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
						{galleries?.map(({ id, src, width, height, alt }) => {
							return (
								<Box
									flex={['0 0 100%', `0 0 45%`]}
									width={['100%', '45%']}
									height='100%'
									pl={[0, 1]}
									key={id}>
									<Image
										src={`${getCdnUrl(src)}&w=700`}
										htmlWidth={width}
										htmlHeight={height}
										height='100%'
										width='100%'
										objectFit='cover'
										alt={alt}
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
						aria-label='التالي'
						icon='chevron-right'
						isRound
						size='lg'
						pointerEvents='all'
						onClick={() => embla.scrollNext()}
					/>
					<IconButton
						variant='solid'
						variantColor='green'
						aria-label='السابق'
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
