import { Box, Grid } from '@chakra-ui/core';
import { MdEmail, MdPerson, MdPhone, MdSubject } from 'react-icons/md';
import { Field, Form, SelectField, Submit, TextareaField } from '~components';

export const PropertyContactForm = () => {
	return (
		<Form
			onSubmit={values => {
				console.log({ values });
			}}
			options={{}}>
			<Grid gridGap={4}>
				<Field
					name='name'
					placeholder='الأسم'
					autoComplete='on'
					size='md'
					icon={<Box as={MdPerson} width='1rem' height='1rem' color='green.300' />}
					isRequired></Field>
				<Field
					name='email'
					type='email'
					placeholder='البريد الإلكتروني'
					autoComplete='on'
					size='md'
					icon={<Box as={MdEmail} width='1rem' height='1rem' color='green.300' />}
					isRequired></Field>
				<Field
					name='mobile'
					type='tel'
					placeholder='رقم الهاتف'
					autoComplete='on'
					size='md'
					icon={<Box as={MdPhone} width='1rem' height='1rem' color='green.300' />}
					isRequired></Field>
				<SelectField py={4} name='whenToCall' isRequired placeholder='أوقات الإتصال المفضلة'>
					<option value='8-12'>صباحاً من ٨ حتى ١٢ ظهراً</option>
					<option value='12-18'>بعد الظهر من ١٢ حتى ٦ مساءاً</option>
					<option value='18-21'>مساءاً من ٦ حتى ٩ مساءاً</option>
				</SelectField>
				<TextareaField
					name='message'
					placeholder='تصوراتك لمواصفات العقار'
					size='md'
					icon={<Box as={MdSubject} width='1rem' height='1rem' color='green.300' />}
					isRequired></TextareaField>
				<Submit variantColor='green'>إرسال الرسالة</Submit>
			</Grid>
		</Form>
	);
};
