// import { api } from '~utls';
import React, { createContext, useEffect } from 'react';
import { useLocalStorage } from 'react-use';
import { api } from '~utls';
interface IProps {
	children: React.ReactNode;
}

export const ConfigContext = createContext({});

export const ConfigProvider: React.FC<IProps> = ({ children }) => {
	const [config, setConfig] = useLocalStorage('system-data', {});

	const getConfig = async () => {
		try {
			const config: any = await api.get('config').json();
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
