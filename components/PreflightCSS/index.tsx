import { CSSReset } from '@chakra-ui/core';
import { css, Global } from '@emotion/core';

export const PreflightCSS: React.FC = () => {
	return (
		<>
			<CSSReset />
			<Global
				styles={css`
					#__next {
						min-height: 100vh;
					}
					html,
					body {
						direction: rtl;
						scroll-behavior: smooth;
						font-family: 'Dubai', Helvetica Neue, sans-serif;
						-webkit-font-smoothing: antialiased;
						-moz-osx-font-smoothing: grayscale;
					}

					@font-face {
						font-family: 'Dubai';
						font-style: normal;
						font-weight: 300;
						font-display: swap;
						src: url('/fonts/DubaiW23-Light.woff2') format('woff2'),
							url('/fonts/DubaiW23-Light.woff') format('woff');
					}
					@font-face {
						font-family: 'Dubai';
						font-style: normal;
						font-weight: 400;
						font-display: swap;
						src: url('/fonts/DubaiW23-Regular.woff2') format('woff2'),
							url('/fonts/DubaiW23-Regular.woff') format('woff');
					}
					@font-face {
						font-family: 'Dubai';
						font-style: normal;
						font-weight: 500;
						font-display: swap;
						src: url('/fonts/DubaiW23-Medium.woff2') format('woff2'),
							url('/fonts/DubaiW23-Medium.woff') format('woff');
					}
					@font-face {
						font-family: 'Dubai';
						font-style: normal;
						font-weight: 700;
						font-display: swap;
						src: url('/fonts/DubaiW23-Bold.woff2') format('woff2'),
							url('/fonts/DubaiW23-Bold.woff') format('woff');
					}
				`}
			/>
		</>
	);
};
