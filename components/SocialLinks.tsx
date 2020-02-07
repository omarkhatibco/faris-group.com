import { useContext } from 'react';
import { ConfigContext } from '~components';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link, IconButton, Stack } from '@chakra-ui/core';

const getIcon = type => {
	switch (type) {
		case 'facebook':
			return FaFacebookF;
			break;
		case 'instagram':
			return FaInstagram;
			break;
		case 'youtube':
			return FaYoutube;
			break;
		case 'twitter':
			return FaTwitter;
			break;
		case 'linkedin':
			return FaLinkedin;
			break;
	}
};
export const SocialLinks = ({ size }) => {
	const { social } = useContext<any>(ConfigContext);

	return (
		<Stack my='2' isInline>
			{social?.map(({ type, link: { url } }, index) => (
				<Link key={index} href={url} target='_blank'>
					<IconButton
						variant='ghost'
						size={size}
						color={`social.${type}`}
						aria-label='Facebook Link'
						isRound
						icon={getIcon(type)}
					/>
				</Link>
			))}
		</Stack>
	);
};
