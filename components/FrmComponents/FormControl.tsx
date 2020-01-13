import { useFormContext, ErrorMessage } from 'react-hook-form';
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
	const isError = errors?.[name];

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
			{isError ? (
				<FormErrorMessage mt='1'>
					<ErrorMessage name={name} errors={errors} />
				</FormErrorMessage>
			) : (
				helperText && <FormHelperText>{helperText}</FormHelperText>
			)}
		</FormControl>
	);
};
