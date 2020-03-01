import { Box } from '@chakra-ui/core';
import { FormContext, useForm } from 'react-hook-form';
import { UseFormOptions } from 'react-hook-form/dist/types';

interface IProps {
	options: UseFormOptions;
	children: React.ReactNode;
	onSubmit: any;
}

export const Form: React.FC<IProps> = ({ children, onSubmit, options }) => {
	const methods = useForm(options);

	const { handleSubmit } = methods;

	return (
		<FormContext {...methods}>
			<Box as='form' onSubmit={handleSubmit(values => onSubmit(values, methods.reset))} w='full'>
				{children}
			</Box>
		</FormContext>
	);
};
