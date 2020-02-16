import { Badge, Box, Button, Flex, Heading, IconButton, Image } from '@chakra-ui/core';
import { useContext, useState } from 'react';
import { ConfigContext, CurrencyContext, InfoBox, Overlay } from '~components';
import { formatMoney, formatNumber } from '~utls';

export const PropertyApartments = ({ appartments }) => {
	const { currency: currencyObj } = useContext(ConfigContext);
	const [currency] = useContext(CurrencyContext);
	const [overlayImage, setOverlayImage] = useState(null);
	return appartments?.length > 0 ? (
		<Box as='section'>
			<Heading
				as='h2'
				mb={6}
				color='green.500'
				fontSize={['xl', '3xl']}
				textTransform='uppercase'
				fontFamily='inherit'>
				الشقق المتوفرة ({appartments?.length})
			</Heading>

			<Box>
				{appartments?.map((obj, index) => {
					const price = currencyObj
						? obj.price * currencyObj[currency]
						: obj.price * 0.16569376809169;
					return (
						<Box
							my={4}
							key={index}
							borderWidth='1px'
							borderColor='gray.100'
							borderRadius='0.5rem'
							boxShadow='lg'
							p={4}>
							{(obj.is_duplex || obj.is_villa || obj.is_penthouse) && (
								<Flex mb='4'>
									{obj.is_duplex && (
										<Badge ml={2} variantColor='green'>
											شقة دوبلكس
										</Badge>
									)}
									{obj.is_villa && (
										<Badge ml={2} variantColor='green'>
											فيلا
										</Badge>
									)}
									{obj.is_penthouse && (
										<Badge ml={2} variantColor='green'>
											بنتهاوس
										</Badge>
									)}
								</Flex>
							)}
							<Flex justifyContent='space-between' flexWrap='wrap' width='100%'>
								{obj.rooms_count && (
									<InfoBox
										width={[1 / 3, 'auto']}
										title='غرف النوم'
										icon='bed'
										value={formatNumber(obj.rooms_count)}
									/>
								)}
								{obj.salons_count && (
									<InfoBox
										width={[1 / 3, 'auto']}
										title='الصالونات'
										icon='sofa'
										value={formatNumber(obj.salons_count)}
									/>
								)}
								{obj.baths_count && (
									<InfoBox
										width={[1 / 3, 'auto']}
										title='الحمامات'
										icon='bath'
										value={formatNumber(obj.baths_count)}
									/>
								)}
								{obj.min_size && (
									<InfoBox
										width={['100%', 'auto']}
										title='المساحة (تبدأ من)'
										icon='area'
										value={formatNumber(obj.min_size)}
										suffix='متر<sup>٢</sup>'
									/>
								)}
								{obj.price && (
									<InfoBox
										width={['100%', 'auto']}
										title='السعر (يبدأ من)'
										icon='dollar'
										value={formatMoney(price, currency)}
									/>
								)}
								{obj.image && (
									<Flex justifyContent='center' width={['100%', 'auto']}>
										<Button
											display={['inline-flex', 'none']}
											variantColor='green'
											onClick={() => {
												setOverlayImage(obj.image);
											}}>
											عرض المخطط
										</Button>
										<IconButton
											display={['none', 'inline-flex']}
											onClick={() => {
												setOverlayImage(obj.image);
											}}
											isRound
											aria-label='عرض المخطط'
											variantColor='green'
											icon='view'
										/>
									</Flex>
								)}
							</Flex>
						</Box>
					);
				})}
			</Box>
			<Box as='hr' my={8}></Box>
			{overlayImage && (
				<Overlay isOpen={Boolean(overlayImage)} onClose={() => setOverlayImage(null)}>
					<Image
						cursor='pointer'
						borderRadius='0.5rem'
						boxShadow='lg'
						src={`${overlayImage}?w=1200&quality=100`}
						objectFit='cover'
						mx='auto'
					/>
				</Overlay>
			)}
		</Box>
	) : null;
};

// <Box width='100'>
// 	<Image
// 		borderWidth='1px'
// 		borderColor='gray.100'
// 		width='100%'
// 		height='100%'
// 		objectFit='cover'
// 		src={obj.image}
// 	/>
// </Box>;

// <Box>صالون{obj.salons_count}</Box>
// <Box>سعر{obj.baths_count}</Box>
// <Box>مساحة{obj.min_size}</Box>
// <Box>سعر{obj.price}</Box>
