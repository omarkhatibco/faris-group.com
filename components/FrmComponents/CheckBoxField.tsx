import { useFormContext } from 'react-hook-form';

import { Box, Checkbox, FormErrorMessage, FormControl } from '@chakra-ui/core';

interface IProps {
	name: string;
	isRequired?: boolean;
	children: React.ReactNode;
}

export const CheckBoxField: React.FC<IProps> = ({ name, isRequired, children }) => {
	const { register, errors } = useFormContext();

	const { message } = (errors && errors[name]) || {};

	const registerObj = {
		required: isRequired ? 'Pflichtfeld' : false,
	};

	return (
		<Box>
			<Checkbox
				id={name}
				name={name}
				ref={register(registerObj)}
				aria-invalid={Boolean(errors && errors[name])}
				isInvalid={Boolean(errors && errors[name])}
				variantColor='green'>
				{children}
			</Checkbox>
			{message && (
				<FormControl isInvalid={Boolean(errors && errors[name])}>
					<FormErrorMessage mt='1'>{message}</FormErrorMessage>
				</FormControl>
			)}
		</Box>
	);
};
