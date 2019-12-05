import { Flex, Box, Image, IconButton, Stack, List, ListItem, Button } from '@chakra-ui/core';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface IProps extends LinkProps {
	children: React.ReactNode;
	width?: string
}

export const ActiveLink: React.FC<IProps> = ({ children, width, ...rest }) => {
	const { pathname } = useRouter();
	return (
		<Link {...rest}>
			<Button
				width={width}
				textTransform='uppercase'
				variant='ghost'
				variantColor={pathname === rest.href ? 'teal' : 'gray'}
				fontSize='sm'>
				{children}
			</Button>
		</Link>
	);
};
