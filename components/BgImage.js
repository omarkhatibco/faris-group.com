import { css, Image } from '@chakra-ui/core';
export const BgImage = ({ src, alt }) => {
	return (
		<Image
			css={css({
				filter: 'blur(6px)',
			})}
			src={src}
			position='absolute'
			alt={alt}
			top='0'
			bottom='0'
			left='0'
			right='0'
			height='100%'
			width='100%'
			objectFit={['cover', 'cover']}
			// transform='scaleX(-1)'
			objectPosition='top'></Image>
	);
};
