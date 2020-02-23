import { Box, Flex, IconButton } from '@chakra-ui/core';
import { MdCompareArrows, MdShare } from 'react-icons/md';
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
				<Box px={2}>
					<IconButton
						aria-label='مقارنة'
						isRound
						variant='outline'
						variantColor='green'
						icon={MdCompareArrows}
					/>
				</Box>
				<Box px={2}>
					<IconButton
						aria-label='مشاركة'
						isRound
						variant='outline'
						variantColor='green'
						icon={MdShare}
					/>
				</Box>
				<FavoriteButton id={id} size='xl' />
			</Flex>
		</Flex>
	);
};
