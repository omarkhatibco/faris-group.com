import { Box, Text } from '@chakra-ui/core';
import { useContext } from 'react';
import { ConfigContext, CurrencyContext } from '~components';
import { formatMoney } from '~utls';

export const PropertyPrice = ({ firstAppartmentObj }) => {
	const { currency: currencyObj } = useContext(ConfigContext);
	const [currency] = useContext(CurrencyContext);
	const price = currencyObj
		? firstAppartmentObj?.price * currencyObj[currency]
		: firstAppartmentObj?.price * 0.16569376809169;

	const pricePerMeter = currencyObj
		? (firstAppartmentObj?.price / firstAppartmentObj?.min_size) * currencyObj[currency]
		: (firstAppartmentObj?.price / firstAppartmentObj?.min_size) * 0.16569376809169;
	return firstAppartmentObj ? (
		<Box as='section' mr={['0', 'auto']}>
			<Text
				mb='2'
				fontSize='2xl'
				fontWeight='medium'
				textTransform='uppercase'
				fontFamily='inherit'
				lineHeight='1.2'>
				<Text
					as='span'
					fontSize='lg'
					color='green.500'
					display='block'
					fontFamily='inherit'
					fontWeight='medium'>
					ابتداءاً من
				</Text>
				{formatMoney(price, currency)}

				<Text
					as='span'
					fontSize='sm'
					color='green.300'
					display='block'
					fontFamily='inherit'
					fontWeight='medium'>
					{formatMoney(pricePerMeter, currency)}/ متر<sup>٢</sup>
				</Text>
			</Text>
		</Box>
	) : null;
};
