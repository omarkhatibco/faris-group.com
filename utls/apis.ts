import fetch from 'isomorphic-unfetch';
import ky from 'ky-universal';

export const wp = ky.extend({
	prefixUrl: `${process.env.BACKEND_URL}/wp-json/wp/v2/`,
});

export const api = ky.extend({
	prefixUrl: `${process.env.BACKEND_URL}/api/`,
});

export const wpFetch = async (url, { searchParams }) => {
	const res = await fetch(`${process.env.BACKEND_URL}${url}?${searchParams.toString()}`);

	return await res.json();
};
