import { Box, Flex } from '@chakra-ui/core';
import { FavoriteButton, InfoBox } from '~components';

export const PropertyActions = ({ id, hashId }) => {
	return (
		<Flex flexWrap='wrap' pb={8} alignItems='center' justifyContent='space-between'>
			{hashId && (
				<Box>
					<InfoBox title='رقم العقار' icon='fingerPrint' value={hashId} textUppercase />
				</Box>
			)}
			<Flex mx={-2}>
				<FavoriteButton id={id} size='xl' />
			</Flex>
		</Flex>
	);
};
