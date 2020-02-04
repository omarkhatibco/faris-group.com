/**jsx @jsx */
import { useEffect, useState } from 'react';
import { Flex, Box, Grid, Image, IconButton, useDisclosure } from '@chakra-ui/core';
import { css } from '@emotion/core';
import EmblaCarouselReact from 'embla-carousel-react';
import { Overlay } from './';

export const ImageSlider = ({ galleries, featuredmedia }) => {
	const [embla, setEmbla] = useState(null);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [overlayData, setOverlayData] = useState(null);

	useEffect(() => {
		if (embla) {
			embla.on('init', () => {
				const startIndex = embla.scrollSnapList().length - 1;
				embla.changeOptions({ startIndex });
			});
			// embla.on('select', () => {
			// 	console.log(`Current index is ${embla.selectedScrollSnap()}`);
			// });
		}
	}, [embla]);

	return (
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
						{featuredmedia?.source_url && (
							<Box flex='0 0 50%' minWidth='50vw' height='100%' pl='4'>
								<Image
									cursor='pointer'
									borderRadius='0.5rem'
									boxShadow='lg'
									width='100%'
									height='100%'
									objectFit='cover'
									src={featuredmedia?.source_url}
									css={css({
										':hover': {
											filter: 'grayscale(100%)',
											transition: '.3s ease-in-out;',
										},
									})}
									onClick={() => {
										setOverlayData({
											source_url: featuredmedia?.source_url,
											alt_text: featuredmedia?.alt_text,
										});
									}}
								/>
							</Box>
						)}
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
									{[...gallery].map(({ id, source_url, alt_text }, index) => (
										<Box key={id}>
											<Image
												cursor='pointer'
												borderRadius='0.5rem'
												boxShadow='lg'
												src={source_url}
												height='100%'
												width='100%'
												objectFit='cover'
												alt={alt_text}
												css={css({
													':hover': {
														filter: 'grayscale(100%)',
														transition: '.3s ease-in-out;',
													},
												})}
												onClick={() => {
													setOverlayData({
														source_url,
														alt_text,
													});
												}}
											/>
										</Box>
									))}
								</Grid>
							</Box>
						))}
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
			{overlayData && (
				<Overlay isOpen={overlayData} onClose={() => setOverlayData(null)}>
					<Image
						cursor='pointer'
						borderRadius='0.5rem'
						boxShadow='lg'
						src={overlayData?.source_url}
						width='100%'
						objectFit='cover'
						alt={overlayData?.alt_text}
					/>
				</Overlay>
			)}
		</Box>
	);
};
