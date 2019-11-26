import { Flex, Box, Text, Link, IconButton, Stack, List, ListItem } from '@chakra-ui/core';

export const Header: React.FC = () => {
	return (
		<Flex flexDir='column'>
			<List display='flex' spacing={3}>
				<ListItem>test</ListItem>
				<ListItem>test</ListItem>
				<ListItem>test</ListItem>
				<ListItem>test</ListItem>
			</List>
		</Flex>
	);
};
