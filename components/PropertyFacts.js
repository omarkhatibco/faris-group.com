import { Badge, Box, Flex } from '@chakra-ui/core';
import { InfoBox } from '~components';
import { formatNumber, formatYear } from '~utls';

export const PropertyFacts = ({ data }) => {
	return (
		<Box as='section'>
			<Flex flexWrap='wrap' mx={-4}>
				{data?.lot_size && (
					<Box px={4}>
						<InfoBox
							title='مساحة المشروع'
							icon='area2'
							value={formatNumber(data?.lot_size)}
							suffix='متر<sup>٢</sup>'
						/>
					</Box>
				)}
				{data?.appartment_count && (
					<Box px={4}>
						<InfoBox
							title='عدد الشقق'
							icon='building'
							value={formatNumber(data?.appartment_count)}
						/>
					</Box>
				)}
				{data?.building_date && (
					<Box px={4}>
						<InfoBox title='تاريخ البناء' icon='calender' value={formatYear(data?.building_date)} />
					</Box>
				)}
				{data?.delivery_date && !data?.is_project_ready && (
					<Box px={4}>
						<InfoBox
							title='تاريخ الإنتهاء'
							icon='calender'
							value={formatYear(data?.delivery_date)}
						/>
					</Box>
				)}
				{data?.is_project_ready && (
					<Box px={4}>
						<InfoBox title='تاريخ الإنتهاء' icon='calender' value='المشروع جاهز للتسليم' />
					</Box>
				)}
			</Flex>
			<Flex mt={1} flexDirection='column' alignItems='flex-start'>
				{data?.is_installment_available && (
					<Badge mt={1} fontSize='sm' variantColor='green'>
						 قابل للتقسيط: {data?.installment_info}
					</Badge>
				)}
				{data?.is_help_in_citizenship && (
					<Badge mt={1} fontSize='sm' variantColor='green'>
						طابو أخضر يؤهل للجنسية التركية 🇹🇷
					</Badge>
				)}
			</Flex>
		</Box>
	);
};
