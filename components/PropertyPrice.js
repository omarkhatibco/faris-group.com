import { Box, Text } from '@chakra-ui/core';
import { useContext } from 'react';
import { ConfigContext, CurrencyContext } from '~components';
import { formatMoney } from '~utls';

export const PropertyPrice = ({ firstAppartmentObj, isSmall = false }) => {
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
				fontSize={isSmall ? 'xl' : '2xl'}
				fontWeight='medium'
				textTransform='uppercase'
				lineHeight='1.2'>
				<Text
					as='span'
					fontSize={isSmall ? 'md' : 'lg'}
					color='green.600'
					display='block'
					fontWeight='medium'>
					ابتداءاً من
				</Text>
				{formatMoney(price, currency)}

				<Text
					as='span'
					fontSize={isSmall ? 'xs' : 'sm'}
					color='green.700'
					display='block'
					fontWeight='medium'>
					{formatMoney(pricePerMeter, currency)}/ متر<sup>٢</sup>
				</Text>
			</Text>
		</Box>
	) : null;
};
