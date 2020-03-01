import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
	try {
		const aggregation = await fetch(`${process.env.BACKEND_URL}/api/aggregation`);
		const aggregationJson = await aggregation.json();
		res.status(200).json(aggregationJson);
	} catch (error) {
		res.status(500).json({ message: 'internal server error', error });
	}
};
