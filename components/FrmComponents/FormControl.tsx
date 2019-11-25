import { useFormContext } from 'react-hook-form';
import { FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/core';

interface IProps {
	children: React.ReactNode;
	name: string;
	label?: string;
	helperText?: boolean;
	isRequired?: boolean;
	isDisabled?: boolean;
}

export const MyCustomFormControl: React.FC<IProps> = ({
	children,
	name,
	label,
	helperText,
	isRequired,
	isDisabled,
}) => {
	const { errors } = useFormContext();
	const { message } = (errors && errors[name]) || {};

	return (
		<FormControl
			isRequired={isRequired}
			isDisabled={isDisabled}
			isInvalid={Boolean(errors && errors[name])}>
			{label && (
				<FormLabel isDisabled={isDisabled} htmlFor={name}>
					{label}
				</FormLabel>
			)}
			{children}
			{message ? (
				<FormErrorMessage mt='1'>{message}</FormErrorMessage>
			) : (
				helperText && <FormHelperText>{helperText}</FormHelperText>
			)}
		</FormControl>
	);
};
