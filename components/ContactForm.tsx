import { Box, Grid } from '@chakra-ui/core';
import ky from 'ky-universal';
import { MdEmail, MdPerson, MdPhone, MdSubject } from 'react-icons/md';
import { Field, Form, SelectField, Submit, TextareaField, useToast } from '~components';

export const ContactForm = ({ isPropertyContactForm = false, id = 0 }) => {
	const size = isPropertyContactForm ? 'md' : 'lg';
	const toast = useToast();
	return (
		<Form
			onSubmit={async (values, reset) => {
				try {
					await ky.post('/api/contact', {
						body: new URLSearchParams({ ...values, url: window.location.href, id }),
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
			<Grid gridGap={isPropertyContactForm ? 4 : 6}>
				<Field
					name='name'
					placeholder='الأسم'
					autoComplete='on'
					size={size}
					icon={<Box as={MdPerson} width='1rem' height='1rem' color='green.300' />}
					isRequired></Field>
				<Field
					name='email'
					type='email'
					placeholder='البريد الإلكتروني'
					autoComplete='on'
					size={size}
					icon={<Box as={MdEmail} width='1rem' height='1rem' color='green.300' />}
					isRequired></Field>
				<Field
					name='mobile'
					type='tel'
					placeholder='رقم الهاتف'
					autoComplete='on'
					size={size}
					icon={<Box as={MdPhone} width='1rem' height='1rem' color='green.300' />}
					isRequired></Field>
				{isPropertyContactForm && (
					<SelectField py={4} name='whenToCall' isRequired placeholder='أوقات الإتصال المفضلة'>
						<option value='8-12'>صباحاً من ٨ حتى ١٢ ظهراً</option>
						<option value='12-18'>بعد الظهر من ١٢ حتى ٦ مساءاً</option>
						<option value='18-21'>مساءاً من ٦ حتى ٩ مساءاً</option>
					</SelectField>
				)}
				<TextareaField
					name='message'
					placeholder={isPropertyContactForm ? 'تصوراتك لمواصفات العقار' : 'نص الرسالة'}
					size={size}
					icon={<Box as={MdSubject} width='1rem' height='1rem' color='green.300' />}
					isRequired></TextareaField>
				<Submit variantColor='green'>إرسال الرسالة</Submit>
			</Grid>
		</Form>
	);
};
