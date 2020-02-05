import { useContext } from 'react';
import { ConfigContext } from '~components';
import { Box, Heading, Text, Stack, Flex, Image, Grid } from '@chakra-ui/core';
export const PropertyApartments = ({ data }) => {
	return (
		<Box>
			<Heading
				as='h2'
				mb={6}
				color='green.500'
				fontSize={['xl', '3xl']}
				textTransform='uppercase'
				fontFamily='inherit'>
				الشقق المتوفرة ({data?.appartments?.length})
			</Heading>
			<Grid gridGap={4} gridTemplateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']}>
				{data?.appartments?.map((obj, index) => {
					return (
						<Flex
							key={index}
							height='8rem'
							borderWidth='1px'
							borderColor='gray.100'
							borderRadius='0.5rem'
							boxShadow='lg'>
							<Box width='50%'>
								<Image
									borderWidth='1px'
									borderColor='gray.100'
									width='100%'
									height='100%'
									objectFit='cover'
									src={obj.image}
								/>
							</Box>
							<Box width='50%' p={4}>
								<Box>غرف{obj.rooms_count}</Box>
								<Box>صالون{obj.salons_count}</Box>
								<Box>سعر{obj.baths_count}</Box>
								<Box>مساحة{obj.min_size}</Box>
								<Box>سعر{obj.price}</Box>
							</Box>
						</Flex>
					);
				})}
			</Grid>
			<Box as='hr' my={8}></Box>
		</Box>
	);
};
