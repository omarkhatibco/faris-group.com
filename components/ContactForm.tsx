import { Box, Stack } from '@chakra-ui/core';
import { Form, Submit, Field, TextareaField } from '~components';
import { MdPhone, MdEmail, MdPerson, MdSubject } from 'react-icons/md';

export const ContactForm = () => {
	return (
		<Form
			onSubmit={values => {
				console.log({ values });
			}}
			options={{}}>
			<Stack spacing='6' shouldWrapChildren>
				<Field
					name='name'
					placeholder='الأسم'
					autoComplete='on'
					size='lg'
					icon={<Box as={MdPerson} width='1rem' height='1rem' color='green.300' />}
					isRequired></Field>
				<Field
					name='email'
					type='email'
					placeholder='البريد الإلكتروني'
					autoComplete='on'
					size='lg'
					icon={<Box as={MdEmail} width='1rem' height='1rem' color='green.300' />}
					isRequired></Field>
				<Field
					name='mobile'
					type='tel'
					placeholder='رقم الهاتف'
					autoComplete='on'
					size='lg'
					icon={<Box as={MdPhone} width='1rem' height='1rem' color='green.300' />}
					isRequired></Field>
				<TextareaField
					name='message'
					placeholder='نص الرسالة'
					size='lg'
					icon={<Box as={MdSubject} width='1rem' height='1rem' color='green.300' />}
					isRequired></TextareaField>
				<Submit variantColor='green'>إرسال الرسالة</Submit>
			</Stack>
		</Form>
	);
};
