import { Badge, Box, Flex } from '@chakra-ui/core';
import { InfoBox } from '~components';
import { formatNumber, formatYear } from '~utls';

export const PropertyFacts = ({ data }) => {
	const {
		appartment_count,
		lot_size,
		building_date,
		delivery_date,
		is_project_ready,
		payment_methods,
		installment_info,
		is_help_in_citizenship,
	} = data;
	const payment_methodsAr = payment_methods?.map(key => (key === 'cash' ? 'نقدي' : 'تقسيط'));

	return (
		<Box>
			<Flex flexWrap='wrap' mx={-4}>
				{payment_methods && (
					<Box px={4}>
						<InfoBox title='طرق الدفع' icon='paymentMethod' value={payment_methodsAr?.toString()} />
					</Box>
				)}

				{lot_size && (
					<Box px={4}>
						<InfoBox
							title='مساحة المشروع'
							icon='area2'
							value={formatNumber(lot_size)}
							suffix='متر<sup>٢</sup>'
						/>
					</Box>
				)}

				{appartment_count && (
					<Box px={4}>
						<InfoBox title='عدد الشقق' icon='building' value={formatNumber(appartment_count)} />
					</Box>
				)}
				{building_date && (
					<Box px={4}>
						<InfoBox title='تاريخ البناء' icon='calender' value={formatYear(building_date)} />
					</Box>
				)}
				{delivery_date && !is_project_ready && (
					<Box px={4}>
						<InfoBox title='تاريخ الإنتهاء' icon='calender' value={formatYear(delivery_date)} />
					</Box>
				)}
				{is_project_ready && (
					<Box px={4}>
						<InfoBox title='تاريخ الإنتهاء' icon='calender' value='المشروع جاهز للتسليم' />
					</Box>
				)}
			</Flex>
			<Flex mt={1} flexDirection='column' alignItems='flex-start'>
				{payment_methods?.includes('installment') && (
					<Badge mt={1} fontSize='sm' variantColor='green'>
						{installment_info}
					</Badge>
				)}
				{is_help_in_citizenship && (
					<Badge mt={1} fontSize='sm' variantColor='green'>
						طابو أخضر يساعد في الحصول على الجنسية التركية
					</Badge>
				)}
			</Flex>
		</Box>
	);
};
