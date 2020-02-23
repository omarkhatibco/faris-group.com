import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/core';

export const InfoBox = ({
	title,
	icon,
	value,
	suffix = null,
	width,
	isSmall = false,
	textUppercase = false,
}) => {
	return (
		<Box width={width} pb={[4, 0]}>
			<Heading
				as='h4'
				color='green.700'
				fontWeight='medium'
				mb={1}
				fontSize={isSmall ? 'sm' : 'md'}>
				{title}
			</Heading>
			<Flex justifyContent='baseline'>
				<Icon name={icon} size={isSmall ? '1.25rem' : '1.5rem'} color='green.500' ml={3} />
				<Text as='p' fontSize={isSmall ? 'md' : 'lg'} fontWeight='bold'>
					<Text as='span' textTransform={textUppercase ? 'uppercase' : 'none'}>
						{value}
					</Text>
					{suffix && <Text as='span' mr={1} dangerouslySetInnerHTML={{ __html: suffix }}></Text>}
				</Text>
			</Flex>
		</Box>
	);
};
