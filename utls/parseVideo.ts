import ky from 'ky-universal';

export const parseVideo = async url => {
	if (!url) return {};

	const parser = url.match(
		/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
	);

	const id = parser[6];

	const type = getType(parser[3]);

	const imageUrl = await getThumbUrl(type, id);
	const videoUrl = await getVideoUrl(type, id);

	return {
		type,
		videoUrl,
		imageUrl,
	};
};

const getThumbUrl = async (type, videoId) => {
	if (type === 'youtube') {
		return `https://i3.ytimg.com/vi/${videoId}/hqdefault.jpg`;
	} else if (type === 'vimeo') {
		try {
			const response: [] = await ky.get(`https://vimeo.com/api/v2/video/${videoId}.json`).json();
			const { thumbnail_large } = response.find(({ id }) => id === Number(videoId));
			return thumbnail_large;
		} catch (error) {
			return false;
		}
	} else {
		return false;
	}
};

const getVideoUrl = async (type, videoId) => {
	if (type === 'youtube') {
		return `https://www.youtube-nocookie.com/embed/${videoId}?controls=0&autoplay=1`;
	} else if (type === 'vimeo') {
		return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
	} else {
		return false;
	}
};

const getType = domainName => {
	if (domainName.includes('youtu')) {
		return 'youtube';
	} else if (domainName.includes('vimeo')) {
		return 'vimeo';
	}
	return false;
};
