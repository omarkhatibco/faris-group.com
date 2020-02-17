import { Box, Button, Flex, Heading, Text } from '@chakra-ui/core';
import { NextPage } from 'next';
import Link from 'next/link';
import { MdBugReport } from 'react-icons/md';

interface IProps {
	statusCode: Number;
}

const ErrorPage: NextPage<IProps> = () => {
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
				<Box as={MdBugReport} size='5rem' color='green.500'></Box>
			</Box>
			<Box my={4}>
				<Text
					as='span'
					display='block'
					fontSize='5xl'
					fontWeight='bold'
					textAlign='center'
					fontFamily='inherit'>
					404
				</Text>
				<Heading fontSize='3xl' fontFamily='inherit' textAlign='center'>
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
		</Flex>
	);
};

export default ErrorPage;
