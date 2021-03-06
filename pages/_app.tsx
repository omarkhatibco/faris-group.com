import { ThemeProvider } from '@chakra-ui/core';
import { DefaultSeo } from 'next-seo';
import { ConfigProvider, CurrencyProvider, DefaultLayout, PreflightCSS } from '~components';
import SEO from '../next-seo.config';
import theme from '../theme';

// import App from 'next/app';

const MyApp = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>
			<PreflightCSS />
			<DefaultSeo {...SEO} />

			<CurrencyProvider>
				<ConfigProvider>
					<DefaultLayout>
						<Component {...pageProps} />
					</DefaultLayout>
				</ConfigProvider>
			</CurrencyProvider>
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
