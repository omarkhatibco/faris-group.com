import { Box, Flex } from '@chakra-ui/core';
import { ApartmentInfo } from '~components';
import { formatNumber } from '~utls';

export const PropertyFacts = ({ data }) => {
	const { appartment_count, lot_size } = data;
	return (
		<Flex mx={-4}>
			<Box px={4}>
				<ApartmentInfo
					title='مساحة المشروع'
					icon='bed'
					value={formatNumber(lot_size)}
					suffix='متر<sup>٢</sup>'
				/>
			</Box>
			<Box px={4}>
				<ApartmentInfo title='عدد الشقق' icon='bed' value={formatNumber(appartment_count)} />
			</Box>
			<Box px={4}>
				<ApartmentInfo title='تاريخ البناء' icon='bed' value={formatNumber(appartment_count)} />
			</Box>
			<Box px={4}>
				<ApartmentInfo title='تاريخ الإنتهاء' icon='bed' value={formatNumber(appartment_count)} />
			</Box>
		</Flex>
	);
};
