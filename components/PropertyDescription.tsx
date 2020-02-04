import { Box, List, ListItem, ListIcon, Heading, Text } from '@chakra-ui/core';
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
			<Text fontFamily='inherit'>
				<List spacing={2}>
					{data?.features?.map(({ title }) => (
						<ListItem>
							<ListIcon icon='chevron-left' color='green.500' mr={0} ml={2} />
							{title}
						</ListItem>
					))}
				</List>
			</Text>
			<Box as='hr' my={8}></Box>
		</Box>
	);
};
