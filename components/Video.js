import { useState, useEffect } from 'react';
import { Box, AspectRatioBox, Flex, Button, Image, IconButton } from '@chakra-ui/core';
import { FaPlay } from 'react-icons/fa';
import { parseVideo } from '~utls';

export const Video = ({ url }) => {
	const [video, setVideo] = useState({});
	const [showVideo, setShowVideo] = useState(false);

	const getVideoData = async () => {
		const video = await parseVideo(url);
		setVideo(video);
	};

	useEffect(() => {
		getVideoData();
	}, [url]);

	return (
		<Box>
			{!showVideo && (
				<AspectRatioBox ratio={16 / 9} borderRadius='0.5rem'>
					<Flex
						justifyContent='center'
						alignItems='center'
						overflow='hidden'
						frameBorder='0'
						borderRadius='0.5rem'
						boxShadow='lg'
						cursor='pointer'
						onClick={() => setShowVideo(true)}>
						<Image
							src={video?.imageUrl}
							width='100%'
							position='absolute'
							top='0'
							bottom='0'
							left='0'
							right='0'
							objectFit={['cover', 'cover']}
						/>
						<IconButton
							size='lg'
							borderRadius='100%'
							aria-label='عرض الفيديو'
							variantColor='green'
							icon={FaPlay}
						/>
					</Flex>
				</AspectRatioBox>
			)}
			{showVideo && (
				<AspectRatioBox ratio={16 / 9} borderRadius='0.5rem'>
					<Box
						as='iframe'
						src={video?.videoUrl}
						frameBorder='0'
						allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
						borderRadius='0.5rem'
						boxShadow='lg'
					/>
				</AspectRatioBox>
			)}
		</Box>
	);
};
