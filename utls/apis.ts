import ky from 'ky-universal';

export const api = ky.extend({
	prefixUrl: 'https://api.faris-group.xyz/wp-json/wp/v2/',
	timeout: 30000,
});

// export const galleryApi = ky.extend({
// 	prefixUrl: 'https://api.faris-group.xyz/api/gallery/',
// 	timeout: 30000,
// });
