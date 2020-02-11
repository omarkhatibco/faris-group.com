import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/core';

export const ApartmentInfo = ({ title, icon, value, suffix, width }) => {
	return (
		<Box width={width} pb={[4, 0]}>
			<Heading as='h4' fontFamily='inherit' fontWeight='medium' mb={1} fontSize={['md']}>
				{title}
			</Heading>
			<Flex justifyContent='baseline'>
				<Icon name={icon} size='1.25rem' color='green.500' ml={3} />
				<Text as='p' fontFamily='inherit' fontWeight='bold'>
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
