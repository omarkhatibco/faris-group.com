import { Box, Flex, Heading, Text } from '@chakra-ui/core';
import { useContext } from 'react';
import { BgImage, ConfigContext, Container, Image, OurServiceSection, Video } from '~components';

const AboutUs = () => {
	const { aboutUs } = useContext(ConfigContext);

	return (
		<Flex as='main' w='full' flexDirection='column' justifyItems='center' alignItems='center'>
			<Flex
				width='100%'
				h={['100vh', '90vh']}
				overflow='hidden'
				position='relative'
				justifyItems='center'
				alignItems='center'>
				<BgImage src={aboutUs?.IntroImage} alt='Istanbul bridge' />
				<Container
					zIndex={1}
					display='flex'
					flexWrap='wrap'
					alignItems='center'
					justifyContent='center'>
					<Box width={['100%', 1 / 2]} pr={[0, 4]} py='4'>
						<Heading as='h1' mb='4' fontSize={['2xl', '5xl']} textTransform='uppercase'>
							نحن دليلك{' '}
							<Text as='span' color='green.500'>
								في كل شيء
							</Text>
							<br />
							يتعلق باستشاراتك العقارية
						</Heading>
						<Box>
							<Text fontSize={['sm', 'md']}>
								مجموعة الفارس متخصصة بالاستشارات العقارية والوساطة، مقرها في إسطنبول ، ولديها تعامل
								في مدن أخرى في تركيا، واتفاقيات عديدة مع شركات الإنشاء الكبرى في إسطنبول، تركّز
								اهتمامها على المستثمرين العقاريين الأجانب، والراغبين بالتملك في تركيا
							</Text>
						</Box>
					</Box>
					<Box width={['100%', 1 / 2]} pr={[0, 4]}>
						<Video url={aboutUs?.introVideo} />
					</Box>
				</Container>
			</Flex>
			<OurServiceSection />
			<Flex as='section' flexWrap='wrap' width='100%'>
				<Box width={['100%', 4 / 7, 3 / 5]} p={[6, 12]} order={[1, 0]} backgroundColor='gray.50'>
					<Heading as='h3' color='green.500' textTransform='uppercase' mb='2' mt='8'>
						فلسفتنا
					</Heading>
					<Text>
						ننظر إلى تركيا على أنها جنة الاستثمار القادم، وكما أنها جنة الأرض يأوي إليها السائحون،
						كذلك تتطلع إليها آمال المستثمرين. ونؤمن بمبدأ أخوة البلدان، وصداقة الشعوب، وأينما كنت
						فتركيا بيتك الثاني، والناس فيها أهلك، والبلد بلدك.
					</Text>
					<Heading as='h3' color='green.500' textTransform='uppercase' mb='2' mt='8'>
						التثقيف العقاري
					</Heading>
					<Text>
						نقوم بنشر سلسلة حلقات عن التملك العقاري في تركيا، كما نترجم وننشر مقالات متخصصة عن
						الاقتصاد التركي، وأهم مستجدات البنية التحتية، والقوانين الجديدة المتعلقة بالعقار، وسائر
						ما يهم المستثمر والراغب بالتملك أو العيش في تركيا.
					</Text>
					<Heading as='h3' color='green.500' textTransform='uppercase' mb='2' mt='8'>
						لماذا تركيا؟
					</Heading>
					<Text>
						تركيا الجديدة بلد صاعد بسرعة وثقة، ومؤشر النمو فيه لم يعرف سوى القفز والصعود، تزامناً مع
						ثورة البنى التحتية، والتسهيلات الحكومية، والتطور الصناعي والطبي، والمشاريع العملاقة التي
						تأخذ تركيا من الماضي إلى المستقبل بسرعة النور.
					</Text>
				</Box>
				<Box
					width={['100%', 3 / 7, 2 / 5]}
					height={['50vh', 'auto']}
					position='relative'
					order={[0, 1]}>
					<Image
						src={aboutUs?.whyUsImage}
						alt='turkey flag on Dolmabahçe Sarayı'
						objectFit='cover'
						position='absolute'
						top='0'
						bottom='0'
						right='0'
						left='0'
						width='100%'
						height='100%'
					/>
				</Box>
			</Flex>
		</Flex>
	);
};

export default AboutUs;
