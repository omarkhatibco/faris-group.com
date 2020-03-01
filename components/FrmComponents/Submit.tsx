import { useFormContext } from 'react-hook-form';
import { Button, ButtonProps } from '@chakra-ui/core';

interface IProps extends ButtonProps {
	children: React.ReactNode;
}
type SubmitProps = IProps & ButtonProps;

export const Submit: React.FC<SubmitProps> = ({ children, ...rest }) => {
	const { formState } = useFormContext();
	const { isSubmitting } = formState;
	return (
		<Button {...rest} type='submit' isLoading={isSubmitting}>
			{children}
		</Button>
	);
};
