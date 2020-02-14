import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/core';
import { useContext } from 'react';
import { ConfigContext, CurrencyContext } from '~components';
import { formatMoneyPart } from '~utls';

export const CurrencyConverter = () => {
	const { currency: currencyObj } = useContext(ConfigContext);
	const [currency, setCurrency] = useContext(CurrencyContext);
	const [_, ...currencyArr] = Object.keys(currencyObj || []);
	const currencyName = formatMoneyPart(0, currency, 'code')?.find(
		({ type }) => type === 'currency'
	);

	return (
		<Menu autoSelect={false}>
			<MenuButton
				as={IconButton}
				aria-label='اختر العملة المفضلة'
				isRound
				variant='ghost'
				variantColor='green'
				icon='currency'>
				{currencyName?.value}
			</MenuButton>
			<MenuList>
				{currencyArr?.map(key => {
					const currencyName = formatMoneyPart(0, key)?.find(({ type }) => type === 'currency');
					return (
						<MenuItem
							key={key}
							onClick={() => setCurrency(key)}
							value={key}
							color={key === currency ? 'green.500' : 'black'}>
							{currencyName?.value}
						</MenuItem>
					);
				})}
			</MenuList>
		</Menu>
	);
};
