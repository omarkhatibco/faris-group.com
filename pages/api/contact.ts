export default async (req, res) => {
	try {
		if (req.method === 'POST') {
			const { body } = req;
			const contact = await fetch(`${process.env.BACKEND_URL}/api/contact`, {
				method: 'post',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: new URLSearchParams(body),
			});
			const contactJson = await contact.json();
			res.status(contact.status).json(contactJson);
		} else {
			res.status(405).json({
				message: 'not allowed',
			});
		}
	} catch (error) {
		res.status(500).json({ message: 'internal server error', error });
	}
};