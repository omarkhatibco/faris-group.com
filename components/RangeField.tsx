import { Flex, Input, Text } from '@chakra-ui/core';

export const RangeField = ({ name, placeholderMin, placeholderMax }) => {
	return (
		<Flex justifyContent='center' alignItems='center'>
			<Input
				type='number'
				id={name + '-min'}
				name={name + '-min'}
				size='sm'
				variant='filled'
				placeholder={placeholderMin}
				autoCapitalize='off'
				autoComplete='none'
				errorBorderColor='red.500'
				focusBorderColor='green.500'
			/>
			<Text px={2} lineHeight='1'>
				-
			</Text>
			<Input
				type='number'
				id={name + '-max'}
				name={name + '-max'}
				size='sm'
				variant='filled'
				placeholder={placeholderMax}
				autoCapitalize='off'
				autoComplete='none'
				errorBorderColor='red.500'
				focusBorderColor='green.500'
			/>
		</Flex>
	);
};
