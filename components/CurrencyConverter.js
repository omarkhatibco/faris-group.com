import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/core';
import { useContext } from 'react';
import { MdAttachMoney } from 'react-icons/md';
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
		<Box>
			<Menu>
				<MenuButton
					as={IconButton}
					aria-label='اختر العملة المفضلة'
					borderRadius='100%'
					variantColor='green'
					icon='currency'>
					{currencyName?.value}
				</MenuButton>
				<MenuList>
					{currencyArr?.map(key => {
						const currencyName = formatMoneyPart(0, key)?.find(({ type }) => type === 'currency');
						return (
							<MenuItem onClick={() => setCurrency(key)} value={key}>
								{currencyName?.value}
							</MenuItem>
						);
					})}
				</MenuList>
			</Menu>
		</Box>
	);
};
