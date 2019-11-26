import { theme } from '@chakra-ui/core';

const customIcons = {
	facebook: {
		path: (
			<path d='M288 176v-64c0-17.664 14.336-32 32-32h32V0h-64c-53.024 0-96 42.976-96 96v80h-64v80h64v256h96V256h64l32-80h-96z' />
		),
		// If the icon's viewBox is `0 0 24 24`, you can ignore `viewBox`
		// viewBox: '0 0 40 40',
	},
};

const customTheme = {
	...theme,
	colors: {
		...theme.colors,
		social: {
			facebook: '#4267B2',
			instagram: '#405DE6',
			youtube: '#FF0000',
			messenger: '#00B2FF',
			whatsapp: '#25D366',
			twitter: '#1DA1F2',
		},
	},
	icons: {
		...theme.icons,
		// ...customIcons,
	},
};

export default customTheme;
