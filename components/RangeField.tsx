import { Flex, IconButton, Input, Text } from '@chakra-ui/core';

export const RangeField = ({ value, onChange, name, handleFilter, min = 0, max = 1000000 }) => {
	return (
		<Flex justifyContent='center' alignItems='center'>
			<Input
				value={value?.min}
				onChange={e => onChange({ ...value, min: e.target.value })}
				type='number'
				id={name + '-min'}
				name={name + '-min'}
				size='sm'
				variant='filled'
				min={min}
				max={max}
				placeholder={`${min}`}
				autoCapitalize='off'
				autoComplete='none'
				errorBorderColor='red.500'
				focusBorderColor='green.500'
			/>
			<Text px={2} lineHeight='1'>
				-
			</Text>
			<Input
				value={value?.max}
				onChange={e => onChange({ ...value, max: e.target.value })}
				type='number'
				id={name + '-max'}
				name={name + '-max'}
				size='sm'
				variant='filled'
				min={min}
				max={max}
				placeholder={`${max}`}
				autoCapitalize='off'
				autoComplete='none'
				errorBorderColor='red.500'
				focusBorderColor='green.500'
			/>
			<IconButton
				size='sm'
				mr={2}
				variantColor='green'
				aria-label='فلتر'
				onClick={() => handleFilter()}
				icon='chevron-left'
			/>
		</Flex>
	);
};
