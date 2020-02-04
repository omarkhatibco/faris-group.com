import ky from 'ky-universal';

export const wp = ky.extend({
	prefixUrl: 'https://api.faris-group.xyz/wp-json/wp/v2/',
	timeout: 30000,
});

export const api = ky.extend({
	prefixUrl: 'https://api.faris-group.xyz/api/',
	mode: 'no-cors',
	timeout: 30000,
});
