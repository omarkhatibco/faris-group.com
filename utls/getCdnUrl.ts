export const getCdnUrl = (url, params = null) => {
	if (!url) {
		return null;
	}
	return url.replace(
		/^(http|https):\/\//g,
		`https://images.weserv.nl/?li${params ? '&' + params : ''}&url=`
	);
};
