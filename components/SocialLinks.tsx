import { IconButton, Link, Stack } from '@chakra-ui/core';
import { useContext } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ConfigContext } from '~components';

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
export const SocialLinks = () => {
	const { social } = useContext<any>(ConfigContext);

	return (
		<Stack my='2' isInline>
			{social?.map(({ type, link }, index) => (
				<Link key={index} href={link?.url} target='_blank' rel='noopener noreferrer'>
					<IconButton
						variant='ghost'
						size='lg'
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
