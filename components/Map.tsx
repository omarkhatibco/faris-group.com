import { Box, Button, Flex, Link } from '@chakra-ui/core';
import { MapSvg } from '~components';

export const Map = ({ search, ratio, isfirst = false, boxShadow = 'none', ...rest }) => {
	return (
		<Box
			position='relative'
			paddingBottom={ratio}
			borderRadius='0.5rem'
			overflow='hidden'
			boxShadow={boxShadow}>
			<MapSvg
				width='100%'
				height='100%'
				position='absolute'
				top='0'
				bottom='0'
				left='0'
				right='0'
			/>
			<Flex
				width='100%'
				height='100%'
				position='absolute'
				top='0'
				bottom='0'
				left='0'
				right='0'
				justifyContent='center'
				alignItems='center'
				overflow='hidden'
				{...rest}>
				<Link
					as='a'
					href={`https://maps.google.com/?q=${search}`}
					isExternal
					_hover={{ textDecoration: 'none' }}>
					<Button mt={isfirst ? '16' : 0} variantColor='green'>
						فتح الموقع في برنامج الخرائط
					</Button>
				</Link>
			</Flex>
		</Box>
	);
};
