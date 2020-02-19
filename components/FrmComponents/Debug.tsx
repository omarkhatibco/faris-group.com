import { Code } from '@chakra-ui/core';
import { useFormContext } from 'react-hook-form';

interface IProps {
	active?: Boolean;
}

export const Debug: React.FC<IProps> = ({ active = false }) => {
	const { formState, errors, getValues } = useFormContext();

	const values = getValues();

	return active ? (
		<Code as='pre' width='full' fontSize='xs' my={8}>
			{JSON.stringify(formState, null, 2)}
		</Code>
	) : null;
};
