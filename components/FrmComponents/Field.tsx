import { IconButton, Input, InputGroup, InputProps, InputRightElement } from '@chakra-ui/core';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Validate } from 'react-hook-form/dist/types';
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
}

export const Field: React.FC<IProps> = ({
	name,
	type = 'text',
	autoComplete = 'none',
	size,
	placeholder,
	isRequired,
	isDisabled,
	isReadOnly,
	validate,
	icon,
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
				{icon && <InputRightElement children={icon} />}

				<Input
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
					pr={10}
					errorBorderColor='red.500'
					focusBorderColor='green.500'
				/>

				{type === 'password' && (
					<InputRightElement width='2.5rem'>
						<IconButton
							variant='ghost'
							variantColor='green'
							aria-label='Show Password'
							icon={show ? 'view-off' : 'view'}
							onClick={() => setShow(!show)}
						/>
					</InputRightElement>
				)}
			</InputGroup>
		</MyCustomFormControl>
	);
};
