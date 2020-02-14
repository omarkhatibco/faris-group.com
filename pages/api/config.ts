import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
	try {
		const config = await fetch(`${process.env.BACKEND_URL}/config}`);

		res.status(200).json(config.json());
	} catch (error) {
		res.status(500).json({ message: 'internal server error', error });
	}
};
