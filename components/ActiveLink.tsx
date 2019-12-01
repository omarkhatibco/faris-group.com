import { Flex, Box, Image, IconButton, Stack, List, ListItem, Button } from '@chakra-ui/core';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface IProps extends LinkProps {
	children: React.ReactNode;
}

export const ActiveLink: React.FC<IProps> = ({ children, ...rest }) => {
	const { pathname } = useRouter();
	return (
		<Link {...rest}>
			<Button
				textTransform='uppercase'
				variantColor={pathname === rest.href ? 'green' : 'gray'}
				fontSize='sm'>
				{children}
			</Button>
		</Link>
	);
};
