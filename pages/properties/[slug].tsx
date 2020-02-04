/**jsx @jsx */
import { useEffect, useState } from 'react';
import { Spinner, Flex, Box, Grid, Image, IconButton, Heading, Text } from '@chakra-ui/core';
import { AppPage } from '~@types/global';
import { DefaultLayout } from '~components/layouts';
import {
	ImageSlider,
	Container,
	ContactForm,
	PropertyHeading,
	PropertyDescription,
	PropertyAmenities,
	PropertyVideo,
} from '~components';
import { useRouter } from 'next/router';
import { wp, chunk, getCdnUrl } from '~utls';
import { css } from '@emotion/core';

const SingleProperties: AppPage = () => {
	const [data, setData] = useState<any>({});
	const [galleries, setGalleries] = useState<any>([]);
	const [featuredmedia, setFeaturedmedia] = useState<any>({});
	const {
		query: { slug },
	} = useRouter();
	// console.log(slug);

	const getData = async () => {
		if (!slug) {
			return;
		}
		const searchParams = new URLSearchParams();
		searchParams.append('slug', `${slug}`);
		searchParams.append('_embed', '');

		try {
			const response: any = await wp
				.get('property', {
					searchParams,
				})
				.json();
			const data = response.find(item => item.slug === slug);
			console.log();
			if (!data) {
				throw new Error('Property not found');
				// 404 not found
			}

			const featuredmedia = {
				...(data?._embedded && data?._embedded['wp:featuredmedia'][0]),
				source_url: getCdnUrl(data?._embedded && data?._embedded['wp:featuredmedia'][0].source_url),
			};
			setFeaturedmedia(featuredmedia);

			const gallerySearchParam = new URLSearchParams();
			gallerySearchParam.append('per_page', '100');
			gallerySearchParam.append('include', data.media_gallery.toString());
			const gallery: any = await wp
				.get('media', {
					searchParams: gallerySearchParam,
				})
				.json();
			// const sortedGalleries = chunk(
			// 	[...gallery]
			// 		.sort((a, b) => b.source_url - a.source_url)
			// 		.map(obj => {
			// 			const source_url = getCdnUrl(obj?.source_url);
			// 			return {
			// 				...obj,
			// 				source_url,
			// 			};
			// 		})
			// 		.reverse(),
			// 	9
			// );
			const sortedGalleries = [...gallery]
				.sort((a, b) => b.source_url - a.source_url)
				.map(obj => {
					const source_url = getCdnUrl(obj?.source_url);
					return {
						...obj,
						source_url,
					};
				})
				.reverse();
			setData(data);
			setGalleries(sortedGalleries);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getData();
	}, [slug]);

	return (
		<Box as='main' width='Full' pt={[16, 20]}>
			<ImageSlider galleries={galleries} featuredmedia={featuredmedia} />
			<Box pt='4' pb='8'>
				<Container display='flex' flexWrap='wrap'>
					<Box as='article' width={['100%', 2 / 3]} bg='blue' pl={[0, 8]}>
						<PropertyHeading data={data} />
						<PropertyDescription data={data} />
						<PropertyAmenities data={data} />
						<PropertyVideo data={data} />
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
								textTransform='uppercase'
								fontFamily='inherit'>
								دعنا نساعدك
							</Heading>
							<Text mb='8' fontFamily='inherit'>
								تواصل معنا لمساعدتك بإختيار العقار المناسب لك و للعائلة, إذا لم تجد طلبك على الموقع
								دعنا نطلعك على بعض من أهم عروضنا الحصرية.
							</Text>
							<ContactForm />
						</Box>
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

SingleProperties.Layout = DefaultLayout;

export default SingleProperties;
