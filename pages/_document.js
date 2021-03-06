import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang='ar' dir='rtl'>
				<Head>
					<link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
					<link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
					<link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
					<link rel='manifest' href='/favicons/site.webmanifest' />
					<link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#00a65a' />
					<link rel='shortcut icon' href='/favicons/favicon.ico' />
					<meta name='msapplication-TileColor' content='#ffffff' />
					<meta name='msapplication-config' content='/favicons/browserconfig.xml' />
					<meta name='theme-color' content='#ffffff' />
					<link
						rel='preload'
						href='/fonts/DubaiW23-Bold.woff2'
						as='font'
						type='font/woff2'
						crossOrigin='true'
					/>
					<link
						rel='preload'
						href='/fonts/DubaiW23-Light.woff2'
						as='font'
						type='font/woff2'
						crossOrigin='true'
					/>
					<link
						rel='preload'
						href='/fonts/DubaiW23-Medium.woff2'
						as='font'
						type='font/woff2'
						crossOrigin='true'
					/>
					<link
						rel='preload'
						href='/fonts/DubaiW23-Regular.woff2'
						as='font'
						type='font/woff2'
						crossOrigin='true'
					/>
					<link rel='preconnect' href='https://images.weserv.nl' />
					<link rel='preconnect' href='https://api.faris-group.com' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
