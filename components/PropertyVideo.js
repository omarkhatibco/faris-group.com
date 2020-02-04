/**jsx @jsx */
import { Box, Heading, AspectRatioBox } from '@chakra-ui/core';

function parseVideo(url) {
	if (!url) return false;
	url.match(
		/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
	);

	if (RegExp.$3.indexOf('youtu') > -1) {
		var type = 'youtube';
	} else if (RegExp.$3.indexOf('vimeo') > -1) {
		var type = 'vimeo';
	}

	return {
		type: type,
		id: RegExp.$6,
	};
}

export const PropertyVideo = ({ data }) => {
	const { oembed } = data;

	const { type, id } = parseVideo(oembed);

	return id ? (
		<Box>
			<Heading
				as='h2'
				mb={6}
				color='green.500'
				fontSize={['xl', '3xl']}
				textTransform='uppercase'
				fontFamily='inherit'>
				فيديو المشروع
			</Heading>
			{type === 'youtube' && (
				<AspectRatioBox ratio={16 / 9} borderRadius='0.5rem'>
					<Box
						as='iframe'
						src={`https://www.youtube-nocookie.com/embed/${id}?controls=0`}
						frameBorder='0'
						allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
						borderRadius='0.5rem'
						boxShadow='lg'
					/>
				</AspectRatioBox>
			)}
			{type === 'vimeo' && (
				<AspectRatioBox ratio={16 / 9} borderRadius='0.5rem'>
					<Box
						as='iframe'
						src={`https://player.vimeo.com/video/${id}`}
						frameBorder='0'
						allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
						borderRadius='0.5rem'
						boxShadow='lg'
					/>
				</AspectRatioBox>
			)}

			<Box as='hr' my={8}></Box>
		</Box>
	) : null;
};
