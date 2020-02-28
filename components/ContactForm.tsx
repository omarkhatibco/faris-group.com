import { Box, Grid } from '@chakra-ui/core';
import ky from 'ky-universal';
import { MdEmail, MdPerson, MdPhone, MdSubject } from 'react-icons/md';
import { Field, Form, Submit, TextareaField, useToast } from '~components';

export const ContactForm = () => {
	const toast = useToast();
	return (
		<Form
			onSubmit={async (values, reset) => {
				try {
					await ky.post('/api/contact', {
						body: new URLSearchParams(values),
					});
					toast({
						title: 'تم إرسال الرسالة بنجاح',
						status: 'success',
						duration: 9000,
						isClosable: true,
					});
					reset();
				} catch (error) {
					console.log(error);
					toast({
						title: 'لم يتم إرسال الرسالة',
						status: 'error',
						duration: 9000,
						isClosable: true,
					});
				}
			}}
			options={{}}>
			<Grid gridGap='6'>
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
			</Grid>
		</Form>
	);
};
