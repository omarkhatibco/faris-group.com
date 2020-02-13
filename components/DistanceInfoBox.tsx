import { Box, Flex, Icon, Text } from '@chakra-ui/core';
import { formatUnit } from '~utls';

export const DistanceInfoBox = ({ title, type, value_number, value_type }) => {
	return (
		<Box>
			<Flex justifyContent='baseline'>
				<Icon name={type} size='1.5rem' color='green.500' ml={3} />
				<Text as='p' color='green.700' fontSize='lg' fontFamily='inherit' fontWeight='bold'>
					{title}:{' '}
					<Text as='span' color='black' fontWeight='normal' fontFamily='inherit'>
						{formatUnit(value_number, value_type)}
					</Text>
				</Text>
			</Flex>
		</Box>
	);
};
