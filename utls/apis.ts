import ky from 'ky-universal';

export const property = ky.extend({
	prefixUrl: 'https://api.faris-group.xyz/wp-json/wp/v2/property/',
	timeout: 30000,
});

export const gallery = ky.extend({
	prefixUrl: 'https://api.faris-group.xyz/wp-json/wp/v2/property/',
	timeout: 30000,
});
