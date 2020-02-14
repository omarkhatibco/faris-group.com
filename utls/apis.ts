import fetch from 'isomorphic-unfetch';
import ky from 'ky-universal';

export const wp = ky.extend({
	prefixUrl: 'https://api.faris-group.xyz/wp-json/wp/v2/',
});

export const api = ky.extend({
	prefixUrl: 'https://api.faris-group.xyz/api/',
});

export const wpFetch = async (url, { searchParams }) => {
	const res = await fetch(
		`https://api.faris-group.xyz/wp-json/wp/v2/${url}?${searchParams.toString()}`
	);

	return await res.json();
};
