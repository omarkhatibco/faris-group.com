/**jsx @jsx */

import { css } from '@emotion/core';
import { Image } from '~components';
import { getCdnUrl } from '~utls';

export const BgImage = ({ src, alt }) => {
	return (
		<Image
			css={css({
				filter: 'blur(4px)',
			})}
			src={`${getCdnUrl(src)}?quality=100`}
			fallbackSrc={src}
			alt={alt}
			position='absolute'
			top='0'
			bottom='0'
			left='0'
			right='0'
			height='100%'
			width='100%'
			objectFit={['cover', 'cover']}
			// transform='scaleX(-1)'
			objectPosition='center'></Image>
	);
};
