import { Box } from '@chakra-ui/core';
import { Footer, Header } from '~components';
interface IProps {
	children: React.ReactNode;
}

export const DefaultLayout: React.FC<IProps> = ({ children }) => {
	return (
		<Box minHeight='100vh'>
			<Header />
			{children}
			<Footer />
		</Box>
	);
};
