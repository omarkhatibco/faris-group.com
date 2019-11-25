import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Validate } from 'react-hook-form/dist/types';

import { InputGroup, Input, InputRightElement, InputLeftAddon, IconButton } from '@chakra-ui/core';
import { MyCustomFormControl } from './FormControl';

interface IProps {
	name: string;
	type?: string;
	autoComplete?: string;
	placeholder?: string;
	label?: string;
	helperText?: string;
	isRequired?: boolean;
	isDisabled?: boolean;
	isReadOnly?: boolean;
	validate?: Validate;
	bg?: string;
}

export const Field: React.FC<IProps> = ({
	name,
	type = 'text',
	autoComplete = 'none',
	placeholder,
	isRequired,
	isDisabled,
	isReadOnly,
	validate,
	bg,
}) => {
	const [show, setShow] = useState<boolean>(false);

	const { register, errors } = useFormContext();

	const registerObj = {
		validate,
		required: isRequired ? 'Pflichtfeld' : false,
	};

	return (
		<MyCustomFormControl name={name} isRequired={isRequired} isDisabled={isDisabled}>
			<InputGroup>
				<Input
					type={show ? 'text' : type}
					id={name}
					name={name}
					variant='filled'
					aria-describedby={`${name}-helper-text`}
					placeholder={isRequired ? `${placeholder}*` : placeholder}
					ref={register(registerObj)}
					bg={bg}
					autoCapitalize='off'
					isInvalid={Boolean(errors && errors[name])}
					isReadOnly={isReadOnly}
					autoComplete={autoComplete}
					errorBorderColor='red.500'
					focusBorderColor='blau.500'
				/>

				{type === 'password' && (
					<InputRightElement width='2.5rem'>
						<IconButton
							variant='ghost'
							variantColor='blau'
							aria-label='Password zeigen'
							icon={show ? 'view-off' : 'view'}
							onClick={() => setShow(!show)}
						/>
					</InputRightElement>
				)}
			</InputGroup>
		</MyCustomFormControl>
	);
};
