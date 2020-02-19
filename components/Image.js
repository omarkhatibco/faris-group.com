import { Box } from '@chakra-ui/core';
import { useMounted } from '~utls';

export const Image = props => {
	const isMounted = useMounted();
	return isMounted && <Box as={NativeImage} {...props}></Box>;
};

const NativeImage = ({ htmlWidth, htmlHeight, alt, loading = 'lazy', ...props }) => (
	<img width={htmlWidth} height={htmlHeight} alt={alt} loading={loading} {...props} />
);
