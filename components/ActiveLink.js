import { Button } from '@chakra-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const ActiveLink = ({ children, href, size = 'md', ...rest }) => {
	const { pathname } = useRouter();
	return (
		<Link href={href} {...rest}>
			<Button
				as='a'
				cursor='pointer'
				textTransform='uppercase'
				variant='ghost'
				href={href}
				size={size}
				variantColor={pathname === href ? 'green' : 'gray'}>
				{children}
			</Button>
		</Link>
	);
};
