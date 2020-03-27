import { Box } from '@chakra-ui/core';
import { useInView } from 'react-intersection-observer';

export const Image = props => {
	return <Box as={NativeImage} {...props}></Box>;
};

const NativeImage = ({ htmlWidth, htmlHeight, alt, src, loading = 'lazy', ...props }) => {
	const [ref, inView] = useInView({
		/* Optional options */
		threshold: 0.1,
		triggerOnce: true,
	});

	return (
		<img
			ref={ref}
			width={htmlWidth}
			height={htmlHeight}
			alt={alt}
			loading={loading}
			src={inView && src ? src : ''}
			{...props}
		/>
	);
};
