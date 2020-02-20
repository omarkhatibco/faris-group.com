/**jsx @jsx */
import { Box, Heading, Text } from '@chakra-ui/core';
import { NextPage } from 'next';
import Router from 'next/router';
import {
	Container,
	ImageSlider,
	PropertyAmenities,
	PropertyApartments,
	PropertyAttachments,
	PropertyContactForm,
	PropertyDescription,
	PropertyHeading,
	PropertyMap,
	PropertyVideo,
} from '~components';
import { getCdnUrl, wpFetch } from '~utls';

interface IProps {
	data?: any;
	galleries?: any;
	attachments?: any;
}

const SingleProperties: NextPage<IProps> = ({ data, attachments, galleries }) => {
	return (
		<Box as='main' width='Full' pt={[16, 20]}>
			{galleries?.length > 0 && <ImageSlider galleries={galleries} />}
			<Box py={12}>
				<Container display='flex' flexWrap='wrap'>
					<Box as='article' width={['100%', 2 / 3]} bg='blue' pl={[0, 8]}>
						<PropertyHeading data={data} />
						<PropertyDescription data={data} />
						<PropertyAmenities amenities={data?.amenities} />
						<PropertyApartments appartments={data?.appartments} />
						<PropertyVideo url={data?.oembed} />
						<PropertyAttachments attachments={attachments} />
						<PropertyMap
							map={data?.map}
							distances={data?.distances}
							location={data?.location}
							sublocation={data?.sublocation}
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
							<PropertyContactForm />
						</Box>
					</Box>
				</Container>
			</Box>
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

		const apiMediaSearchParam = new URLSearchParams();
		apiMediaSearchParam.append('per_page', '100');
		apiMediaSearchParam.append(
			'include',
			[...data?.media_gallery, ...data?.attachments].toString()
		);

		const apiMedia: any = await wpFetch('media', {
			searchParams: apiMediaSearchParam,
		});

		const unsortedGalleries = apiMedia.filter(({ id }) => data?.media_gallery.includes(`${id}`));

		const galleries = [...unsortedGalleries]
			?.sort((a, b) => b.source_url - a.source_url)
			?.map(obj => {
				const source_url = getCdnUrl(obj?.source_url);
				return {
					...obj,
					source_url,
				};
			})
			?.reverse();

		const attachments = apiMedia.filter(({ id }) => data?.attachments.includes(`${id}`));

		return { data, attachments, galleries };
	} catch (error) {
		console.log(error);
		redirectOnError();
	}

	return {};
};

export default SingleProperties;
