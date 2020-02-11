import { Box, Heading, List, ListIcon, ListItem, Text } from '@chakra-ui/core';
export const PropertyDescription = ({ data }) => {
	return (
		<Box>
			<Text
				fontFamily='inherit'
				dangerouslySetInnerHTML={{ __html: data?.content?.rendered }}></Text>
			<Box as='hr' my={8}></Box>
			<Heading
				as='h2'
				mb={6}
				color='green.500'
				fontSize={['xl', '3xl']}
				textTransform='uppercase'
				fontFamily='inherit'>
				لماذا هذا المشروع
			</Heading>

			<List spacing={2}>
				{data?.features?.map(({ title }, index) => (
					<ListItem key={index}>
						<ListIcon icon='chevron-left' color='green.500' mr={0} ml={2} />
						{title}
					</ListItem>
				))}
			</List>

			<Box as='hr' my={8}></Box>
		</Box>
	);
};
