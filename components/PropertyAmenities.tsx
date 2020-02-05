import { useContext } from 'react';
import { ConfigContext } from '~components';
import { Box, List, ListItem, ListIcon, Heading, Text } from '@chakra-ui/core';
export const PropertyAmenities = ({ data }) => {
	const { amenities } = useContext<any>(ConfigContext);

	return (
		<Box>
			TBD
			<Heading
				as='h2'
				mb={6}
				color='green.500'
				fontSize={['xl', '3xl']}
				textTransform='uppercase'
				fontFamily='inherit'>
				حقائق وميزات
			</Heading>
			<Box as='hr' my={8}></Box>
			<Heading
				as='h2'
				mb={6}
				color='green.500'
				fontSize={['xl', '3xl']}
				textTransform='uppercase'
				fontFamily='inherit'>
				مزايا المشروع
			</Heading>
			<List
				spacing={2}
				display='grid'
				gridTemplateColumns={['repeat(2,calc(100% / 2))', 'repeat(3,calc(100% / 3))']}>
				{amenities &&
					data?.amenities?.map((key, index) => {
						const { title } = amenities?.find(({ slug }) => slug === key);
						return (
							<ListItem fontWeight='bold' key={key}>
								<ListIcon icon='check' color='green.400' mr={0} ml={2} />
								{title}
							</ListItem>
						);
					})}
			</List>
			<p>version 2</p>
			<List
				spacing={2}
				display='grid'
				gridTemplateColumns={['repeat(2,calc(100% / 2))', 'repeat(3,calc(100% / 3))']}>
				{amenities?.map(({ title, slug }, index) => {
					const isChecked = data?.amenities?.includes(slug);
					return (
						<ListItem fontWeight='bold' color={isChecked ? 'black' : 'gray.200'} key={slug}>
							{isChecked ? (
								<ListIcon icon='check' color='green.400' mr={0} ml={2} />
							) : (
								<ListIcon icon='check' color='gray.200' mr={0} ml={2} />
							)}

							{title}
						</ListItem>
					);
				})}
			</List>
			<Box as='hr' my={8}></Box>
		</Box>
	);
};
