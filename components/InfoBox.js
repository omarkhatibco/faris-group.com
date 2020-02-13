import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/core';

export const InfoBox = ({ title, icon, value, suffix, width }) => {
	return (
		<Box width={width} pb={[4, 0]}>
			<Heading
				as='h4'
				fontFamily='inherit'
				color='green.700'
				fontWeight='medium'
				mb={1}
				fontSize='md'>
				{title}
			</Heading>
			<Flex justifyContent='baseline'>
				<Icon name={icon} size='1.5rem' color='green.500' ml={3} />
				<Text as='p' fontFamily='inherit' fontSize='lg' fontWeight='bold'>
					<Text as='span' fontFamily='inherit'>
						{value}
					</Text>
					{suffix && (
						<Text
							as='span'
							mr={1}
							fontFamily='inherit'
							dangerouslySetInnerHTML={{ __html: suffix }}></Text>
					)}
				</Text>
			</Flex>
		</Box>
	);
};
