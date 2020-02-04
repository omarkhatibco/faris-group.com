import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Select } from '@chakra-ui/core';
import { MyCustomFormControl } from './FormControl';

const HelperId = Math.random()
	.toString(36)
	.substr(2, 5);

export const SelectField = props => {
	const [hasValue, setHasValue] = useState(false);
	const { register, errors, getValues } = useFormContext();
	const {
		children,
		name,
		type,
		autoComplete,
		placeholder,
		validation,
		validationHelpers,
		prefix,
		isRequired,
		size,
		...rest
	} = props;

	const handleChange = async () => {
		const values = getValues();
		if (values && values[name] !== '') {
			setHasValue(true);
		} else {
			setHasValue(false);
		}
	};

	const registerObj = {
		required: isRequired ? true : false,
	};

	return (
		<MyCustomFormControl name={name} HelperId={HelperId} isRequired={isRequired} {...rest}>
			<Select
				id={name}
				name={name}
				size={size}
				variant='filled'
				errorBorderColor='red.500'
				focusBorderColor='green.500'
				color=''
				rootProps={{
					color: hasValue ? 'coal' : 'gray.400',
					fontSize: 'sm',
				}}
				ref={register(registerObj)}
				aria-describedby={HelperId}
				placeholder={isRequired ? `${placeholder}*` : placeholder}
				isInvalid={Boolean(errors && errors[name])}
				onChange={handleChange}>
				{children}
			</Select>
		</MyCustomFormControl>
	);
};
