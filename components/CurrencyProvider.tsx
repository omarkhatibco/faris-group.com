import React, { createContext } from 'react';
import { useLocalStorage } from 'react-use';

interface IProps {
	children: React.ReactNode;
}

export const CurrencyContext = createContext({});

export const CurrencyProvider: React.FC<IProps> = ({ children }) => {
	const state = useLocalStorage('selected-currency', 'usd');

	return <CurrencyContext.Provider value={state}>{children}</CurrencyContext.Provider>;
};
