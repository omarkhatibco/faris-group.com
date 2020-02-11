import React, { useState, createContext } from 'react';
interface IProps {
	children: React.ReactNode;
}

export const CurrencyContext = createContext({});

export const CurrencyProvider: React.FC<IProps> = ({ children }) => {
	const state = useState('usd');

	return <CurrencyContext.Provider value={state}>{children}</CurrencyContext.Provider>;
};
