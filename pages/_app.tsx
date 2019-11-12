import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { PreflightCSS } from '@components';
import theme from '../theme';

const MyApp = ({ Component, pageProps }) => {
	const { Layout } = Component;
	return (
		<ThemeProvider theme={theme}>
			<PreflightCSS />
			{Layout ? (
				<Component.Layout>
					<Component {...pageProps} />
				</Component.Layout>
			) : (
				<Component {...pageProps} />
			)}
		</ThemeProvider>
	);
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
