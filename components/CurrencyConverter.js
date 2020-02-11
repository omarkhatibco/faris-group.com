import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/core';
import { MdTranslate } from 'react-icons/md';

export const CurrencyConverter = () => {
	return (
		<Box>
			<Menu>
				<MenuButton
					as={IconButton}
					aria-label='Choose Language'
					variant='outline'
					variantColor='teal'
					icon={MdTranslate}>
					Actions
				</MenuButton>
				<MenuList>
					<MenuItem>Download</MenuItem>
					<MenuItem>Create a Copy</MenuItem>
					<MenuItem>Mark as Draft</MenuItem>
					<MenuItem>Delete</MenuItem>
				</MenuList>
			</Menu>
		</Box>
	);
};
