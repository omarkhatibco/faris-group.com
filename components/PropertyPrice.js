import { Box, Text } from '@chakra-ui/core';
import { useContext } from 'react';
import { ConfigContext, CurrencyContext } from '~components';
import { formatMoney } from '~utls';

export const PropertyPrice = ({ price, size, isSmall = false }) => {
	const { currency: currencyObj } = useContext(ConfigContext);
	const [currency] = useContext(CurrencyContext);
	const convertedPrice = currencyObj ? price * currencyObj[currency] : price * 0.16569376809169;

	const pricePerMeter = currencyObj
		? (price / size) * currencyObj[currency]
		: (price / size) * 0.16569376809169;

	return price ? (
		<Box as='section' mr={['0', 'auto']}>
			<Text
				mb='2'
				fontSize={isSmall ? 'xl' : ['xl', 'xl', '2xl']}
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
				{formatMoney(convertedPrice, currency)}

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
