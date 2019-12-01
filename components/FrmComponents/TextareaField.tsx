import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Validate } from 'react-hook-form/dist/types';

import { InputGroup, Textarea, InputLeftElement, InputProps } from '@chakra-ui/core';
import { MyCustomFormControl } from './FormControl';

interface IProps extends InputProps {
	name: string;
	type?: string;
	autoComplete?: string;
	placeholder?: string;
	label?: string;
	helperText?: string;
	validate?: Validate;
	icon?: React.ReactNode;
	size;
}

export const TextareaField: React.FC<IProps> = ({
	name,
	type = 'text',
	autoComplete = 'none',
	placeholder,
	isRequired,
	isDisabled,
	isReadOnly,
	validate,
	icon,
	size,
}) => {
	const [show, setShow] = useState<boolean>(false);

	const { register, errors } = useFormContext();

	const registerObj = {
		validate,
		required: isRequired ? true : false,
	};

	return (
		<MyCustomFormControl name={name} isRequired={isRequired} isDisabled={isDisabled}>
			<InputGroup size={size}>
				{icon && <InputLeftElement children={icon} />}
				<Textarea
					type={show ? 'text' : type}
					id={name}
					name={name}
					variant='filled'
					aria-describedby={`${name}-helper-text`}
					placeholder={isRequired ? `${placeholder}*` : placeholder}
					ref={register(registerObj)}
					autoCapitalize='off'
					isInvalid={Boolean(errors && errors[name])}
					isReadOnly={isReadOnly}
					autoComplete={autoComplete}
					errorBorderColor='red.500'
					focusBorderColor='green.500'
					resize='vertical'
					minHeight='10rem'
					paddingLeft={icon ? '12' : '4'}
					paddingTop='3'
				/>
			</InputGroup>
		</MyCustomFormControl>
	);
};
