import { Box, Flex, IconButton } from '@chakra-ui/core';
import { MdCompareArrows, MdShare } from 'react-icons/md';
import { FavoriteButton, InfoBox } from '~components';

export const PropertyActions = ({ data }) => {
	const datePart = new Date(Date.parse(data?.date)).getFullYear();
	const slugPart = data?.slug
		?.split('-')
		?.map(word => [...word]?.[0]?.toUpperCase())
		?.join('');

	const proprtyId = `FG-${datePart || '2020'}-${data?.id || '000'}-${slugPart || 'FG'}`;

	return (
		<Flex flexWrap='wrap' pb={8} alignItems='center' justifyContent='space-between'>
			{data?.slug && (
				<Box>
					<InfoBox title='رقم العقار' icon='fingerPrint' value={proprtyId} />
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
				<FavoriteButton id={data?.id} size='xl' />
			</Flex>
		</Flex>
	);
};
