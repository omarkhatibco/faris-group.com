import { IconButton, Link, Stack } from '@chakra-ui/core';

const social = [
	{
		type: 'facebook',
		url: 'https://www.facebook.com/farisgrouptr/',
	},
	{
		type: 'twitter',
		url: 'https://twitter.com/farisgrouptr',
	},
	{
		type: 'instagram',
		url: 'https://www.instagram.com/farisgrouptr/',
	},
	{
		type: 'youtube',
		url: 'https://youtube.com/',
	},
];

export const SocialLinks = () => {
	return (
		<Stack my='2' isInline>
			{social?.map(({ type, url }, index) => (
				<IconButton
					as={Link}
					key={index}
					href={url}
					isExternal
					variant='ghost'
					size='lg'
					color={`social.${type}`}
					aria-label={`${type} رابط`}
					isRound
					icon={type}
				/>
			))}
		</Stack>
	);
};
