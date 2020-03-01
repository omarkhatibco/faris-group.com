import { Box, Button, Flex, Heading, Icon, Text } from '@chakra-ui/core';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const ErrorPage = () => {
	return (
		<Flex
			as='main'
			width='Full'
			flexDirection='column'
			mt={20}
			py={20}
			px={4}
			justifyContent='center'
			alignItems='center'>
			<Box backgroundColor='gray.100' padding={8} borderRadius='100%'>
				<Icon name='bug' size='5rem' color='green.500'></Icon>
			</Box>
			<Box my={4}>
				<Text as='span' display='block' fontSize='5xl' fontWeight='bold' textAlign='center'>
					404
				</Text>
				<Heading fontSize='3xl' textAlign='center'>
					للأسف لم يتم العثور
					<br />
					على الصفحة التي طلبتها
				</Heading>
			</Box>

			<Link href='/'>
				<Button
					as='a'
					textTransform='uppercase'
					variant='solid'
					variantColor='green'
					fontSize='lg'
					cursor='pointer'>
					العودة للصفحة الرئيسية
				</Button>
			</Link>
			<NextSeo title='لم يتم العثور على الصفحة' noindex={true} nofollow={true} />
		</Flex>
	);
};

export default ErrorPage;
