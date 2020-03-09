export const getCdnUrl = url => {
	if (!url) {
		return '';
	}
	return url.replace(/^(http|https):\/\//g, 'https://images.weserv.nl/?li&url=');
};
