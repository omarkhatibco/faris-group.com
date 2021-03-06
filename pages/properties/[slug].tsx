/**jsx @jsx */
import { Box, Heading, Text } from '@chakra-ui/core';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Router, { useRouter } from 'next/router';
import stripHtml from 'string-strip-html';
import {
	ContactForm,
	Container,
	ImageSlider,
	PropertyAmenities,
	PropertyApartments,
	PropertyAttachments,
	PropertyDescription,
	PropertyHeading,
	PropertyMap,
	PropertyVideo,
} from '~components';
import { getCdnUrl, wpFetch } from '~utls';

interface IProps {
	data?: any;
}

const SingleProperties: NextPage<IProps> = ({ data }) => {
	const imageObj = data?._embedded && data?._embedded['wp:featuredmedia'][0];
	const { asPath } = useRouter();

	return (
		<Box as='main' width='Full' pt={[16, 20]}>
			{data?.media_gallery_data?.length > 0 && <ImageSlider galleries={data?.media_gallery_data} />}
			<Box py={12}>
				<Container display='flex' flexWrap='wrap'>
					<Box as='article' width={['100%', 2 / 3]} bg='blue' pl={[0, 8]}>
						<PropertyHeading data={data} />
						<PropertyDescription data={data} />
						<PropertyAmenities amenities={data?._embedded && data?._embedded['wp:term'][3]} />
						<PropertyApartments appartments={data?.appartments} />
						<PropertyVideo url={data?.oembed} />
						<PropertyAttachments attachments={data?.attachments_data} />
						<PropertyMap
							map={data?.map}
							distances={data?.distances}
							location={data?._embedded && data?._embedded['wp:term'][0]}
						/>
					</Box>
					<Box as='aside' width={['100%', 1 / 3]} bg='red' position='relative'>
						<Box
							position='sticky'
							top='6rem'
							width='100%'
							boxShadow='xl'
							borderRadius='0.5rem'
							borderWidth='1px'
							borderColor='gray.100'
							p={6}>
							<Heading
								as='h3'
								mb='2'
								color='green.500'
								fontSize={['2xl', '4xl']}
								textTransform='uppercase'>
								دعنا نساعدك
							</Heading>
							<Text mb='8'>
								تواصل معنا لمساعدتك بإختيار العقار المناسب لك و للعائلة, إذا لم تجد طلبك على الموقع
								دعنا نطلعك على بعض من أهم عروضنا الحصرية.
							</Text>
							<ContactForm id={data?.id} isPropertyContactForm />
						</Box>
					</Box>
				</Container>
			</Box>
			<NextSeo
				title={stripHtml(data?.title?.rendered)}
				description={stripHtml(data?.excerpt?.rendered)}
				canonical={`https://www.faris-group.com${asPath}`}
				openGraph={{
					url: `https://faris-group.com${asPath}`,
					images: [
						{
							url: getCdnUrl(imageObj?.source_url),
							width: imageObj?.media_details?.width,
							height: imageObj?.media_details?.height,
							alt: imageObj?.alt_text,
						},
					],
				}}
			/>
		</Box>
	);
};

SingleProperties.getInitialProps = async ctx => {
	const { slug } = ctx.query;

	const redirectOnError = () =>
		typeof window !== 'undefined'
			? Router.push('/not_found')
			: ctx.res.writeHead(302, { Location: '/not_found' }).end();

	try {
		const searchParams = new URLSearchParams();
		searchParams.append('slug', `${slug}`);
		searchParams.append('_embed', '');

		const apiData: any = await wpFetch('property', {
			searchParams,
		});

		const data = apiData?.find(item => item.slug === slug);

		if (!data) {
			redirectOnError();
		}

		return { data };
	} catch (error) {
		console.log(error);
		redirectOnError();
	}

	return {};
};

export default SingleProperties;
