const description =
	'مجموعة الفارس متخصصة بالاستشارات العقارية والوساطة، مقرها في إسطنبول ، ولديها تعامل في مدن أخرى في تركيا، واتفاقيات عديدة مع شركات الإنشاء الكبرى في إسطنبول، تركّز اهتمامها على المستثمرين العقاريين الأجانب، والراغبين بالتملك في تركيا';

export default {
	title: 'للإستشارات العقارية',
	titleTemplate: 'مجموعة الفارس | %s',
	description,
	canonical: 'https://www.faris-group.com',
	facebook: {
		appId: '811128792732260',
	},
	openGraph: {
		type: 'website',
		locale: 'ar_AE',
		url: 'https://faris-group.com/',
		site_name: 'مجموعة الفارس',
		images: [
			{
				url: 'https://faris-group.com/social/facebook-og.png',
				width: 1200,
				height: 630,
				alt: 'شعار مجموعة الفارس على خلفية مموهة لمبنى طابقي حديث',
			},
		],
	},
	twitter: {
		handle: '@farisgrouptr',
		site: '@site',
		cardType: 'summary_large_image',
	},
};
