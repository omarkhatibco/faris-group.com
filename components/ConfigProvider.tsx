import React, { useEffect, useState, createContext } from 'react';
// import { api } from '~utls';
import ky from 'ky-universal';
interface IProps {
	children: React.ReactNode;
}

export const ConfigContext = createContext({});

export const ConfigProvider: React.FC<IProps> = ({ children }) => {
	const [config, setConfig] = useState({});

	const getConfig = async () => {
		try {
			const config: any = await ky.get('/api/config').json();
			// const config: any = await api.get('config').json();
			setConfig(config);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getConfig();
	}, []);

	return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
};
