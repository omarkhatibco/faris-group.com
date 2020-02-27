import { Select } from '@chakra-ui/core';
import { useContext } from 'react';
import { ConfigContext, CurrencyContext } from '~components';
import { formatMoneyPart } from '~utls';

export const CurrencyConverterMobile = () => {
	const { currency: currencyObj } = useContext(ConfigContext);
	const [currency, setCurrency] = useContext(CurrencyContext);
	const [_, ...currencyArr] = Object.keys(currencyObj || []);

	return (
		<Select
			placeholder='اختر العملة المفضلة'
			variant='filled'
			value={currency}
			errorBorderColor='red.500'
			focusBorderColor='green.500'
			rootProps={{
				color: currency ? 'coal' : 'gray.400',
				fontSize: 'sm',
			}}
			onChange={e => e.target.value && setCurrency(e.target.value)}>
			{currencyArr?.map(key => {
				const currencyName = formatMoneyPart(0, key)?.find(({ type }) => type === 'currency');
				return (
					<option key={key} value={key}>
						{currencyName?.value}
					</option>
				);
			})}
		</Select>
	);
};
