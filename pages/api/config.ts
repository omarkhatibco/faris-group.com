import { api } from '~utls';

export default async (req, res) => {
	// const {
	// 	query: { pid },
	// } = req;

	try {
		const config: any = await api.get('config').json();
		res.status(200).json(config);
	} catch (error) {
		res.status(500).json({ message: 'internal server error' });
	}
};
