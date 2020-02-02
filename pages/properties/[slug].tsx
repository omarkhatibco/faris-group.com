import { useEffect, useState } from 'react';
import { Spinner, Flex } from '@chakra-ui/core';
import { AppPage } from '~@types/global';
import { DefaultLayout } from '~components/layouts';
import { useRouter } from 'next/router';
import { property } from '~utls/apis';

const SingleProperties: AppPage = () => {
	const [data, setData] = useState<any>({});
	const {
		query: { slug },
	} = useRouter();
	console.log(slug);

	const getData = async () => {
		if (!slug) {
			return;
		}
		const searchParams = new URLSearchParams();
		searchParams.append('slug', `${slug}`);

		try {
			const response: any = await property
				.get('', {
					searchParams,
				})
				.json();
			const data = response.find(item => item.slug === slug);
			if (!data) {
				// it's 404 page not found
			}

			console.log(data);
			setData(data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getData();
	}, [slug]);
	return (
		<Flex as='main' width='Full' height='50vh' justifyContent='center' alignItems='center'>
			<Spinner color='blau.500' />
			{data?.title?.rendered}
		</Flex>
	);
};

SingleProperties.Layout = DefaultLayout;

export default SingleProperties;
