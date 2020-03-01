/**jsx @jsx */

import { css } from '@emotion/core';
import { useWindowSize } from 'react-use';
import { Image } from '~components';
import { getCdnUrl } from '~utls';

export const BgImage = ({ src, alt, zIndex = 0 }) => {
	const { width } = useWindowSize();
	return (
		<Image
			css={css({
				filter: 'blur(4px)',
			})}
			src={`${getCdnUrl(src)}?w=${width}`}
			fallbackSrc={src}
			alt={alt}
			position='absolute'
			top='0'
			bottom='0'
			left='0'
			right='0'
			height='100%'
			width='100%'
			objectFit='cover'
			zIndex={zIndex}
			objectPosition='center'></Image>
	);
};
