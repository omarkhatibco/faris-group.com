import { Grid, Icon } from '@chakra-ui/core';
import { Field, Form, SelectField, Submit, TextareaField, useToast } from '~components';
import { api } from '~utls';

export const ContactForm = ({ isPropertyContactForm = false, id = 0 }) => {
	const size = isPropertyContactForm ? 'md' : 'lg';
	const toast = useToast();
	return (
		<Form
			onSubmit={async (values, reset) => {
				try {
					await api.post('contact', {
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
					icon={<Icon name='person' size='0.75em' color='green.500' />}
					isRequired></Field>
				<Field
					name='email'
					type='email'
					placeholder='البريد الإلكتروني'
					autoComplete='on'
					size={size}
					icon={<Icon name='email' size='0.75em' color='green.500' />}
					isRequired></Field>
				<Field
					name='mobile'
					type='tel'
					placeholder='رقم الهاتف'
					autoComplete='on'
					size={size}
					icon={<Icon name='phone' size='0.75em' color='green.500' />}
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
					icon={<Icon name='chat' size='0.75em' color='green.500' />}
					isRequired></TextareaField>
				<Submit variantColor='green'>إرسال الرسالة</Submit>
			</Grid>
		</Form>
	);
};
