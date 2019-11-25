import deleteKey from 'object-delete-key';
import { useFormContext } from 'react-hook-form';
import { Code } from '@chakra-ui/core';

interface IProps {
	active?: Boolean;
}

export const Debug: React.FC<IProps> = ({ active = false }) => {
	const { formState, errors, getValues } = useFormContext();

	const values = getValues();

	const obj = deleteKey(
		{
			formState,
			errors,
			values,
		},
		{
			key: 'ref',
		}
	);

	return active ? (
		<Code as='pre' width='full' fontSize='xs' my={8}>
			{JSON.stringify(obj, null, 2)}
		</Code>
	) : null;
};
