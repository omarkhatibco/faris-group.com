import { Button } from '@chakra-ui/core';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface IProps extends LinkProps {
	children: React.ReactNode;
	width?: string;
	justifyContent?: string;
}

export const ActiveLink: React.FC<IProps> = ({ children, width, justifyContent, ...rest }) => {
	const { pathname } = useRouter();
	return (
		<Link {...rest}>
			<Button
				width={width}
				justifyContent={justifyContent}
				textTransform='uppercase'
				variant='ghost'
				variantColor={pathname === rest.href ? 'green' : 'gray'}
				fontSize='sm'>
				{children}
			</Button>
		</Link>
	);
};
