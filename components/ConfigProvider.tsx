// import { api } from '~utls';
import ky from 'ky-universal';
import React, { createContext, useEffect } from 'react';
import { useLocalStorage } from 'react-use';
interface IProps {
	children: React.ReactNode;
}

export const ConfigContext = createContext({});

export const ConfigProvider: React.FC<IProps> = ({ children }) => {
	const [config, setConfig] = useLocalStorage('system-data', {});

	const getConfig = async () => {
		try {
			const config: any = await ky.get('/api/config').json();
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
