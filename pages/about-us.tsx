import { useContext } from 'react';
import { ConfigContext } from '~components';
import { Box, Flex, Text, Heading, Image, Grid, Stack, PseudoBox } from '@chakra-ui/core';
import { useWindowSize } from 'react-use';
import { AppPage } from '~@types/global';
import { DefaultLayout } from '~components/layouts';
import { getCdnUrl } from '~utls';

// ICONS
import { CheckList, Office, Planning, Search } from '~assets/svgComponents';
import { Container, BgImage, Video } from '~components';

const AboutUs: AppPage = () => {
	const { aboutUs } = useContext<any>(ConfigContext);
	const { width: windowWidth, height: windowHeight } = useWindowSize();
	return (
		<Flex as='main' w='full' flexDirection='column' justifyItems='center' alignItems='center'>
			<Flex
				width='100%'
				h={['100vh', '90vh']}
				overflow='hidden'
				position='relative'
				justifyItems='center'
				alignItems='center'>
				<BgImage
					src={`${getCdnUrl(aboutUs?.IntroImage)}?w=${windowWidth}&quality=100`}
					alt='Istanbul bridge'
				/>
				<Container
					zIndex={1}
					display='flex'
					flexWrap='wrap'
					alignItems='center'
					justifyContent='center'>
					<Box width={['100%', 1 / 2]} pr={[0, 4]} py='4'>
						<Heading
							as='h1'
							mb='4'
							fontSize={['2xl', '5xl']}
							textTransform='uppercase'
							fontFamily='inherit'>
							نحن دليلك{' '}
							<Text as='span' color='green.500' fontFamily='inherit'>
								في كل شيء
							</Text>
							<br />
							يتعلق باستشاراتك العقارية
						</Heading>
						<Box>
							<Text fontSize={['sm', 'md']} fontFamily='inherit'>
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

			<Flex as='section' flexWrap='wrap' width='100%'>
				<Box width={['100%', '100%', 2 / 5]} height={['50vh', '50vh', 'auto']} position='relative'>
					<Image
						src={aboutUs?.ServiceImage}
						alt='Modern real estate'
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
				<Box width={['100%', '100%', 3 / 5]} p={[6, 12]}>
					<Heading
						as='h2'
						fontSize={['xl', '5xl']}
						color='green.500'
						textTransform='uppercase'
						mb='4'
						fontFamily='inherit'>
						خدماتنا
					</Heading>
					<Flex flexWrap='wrap' mb='4'>
						<Box width={['100%', 1 / 2]} pl={[0, 4]} mb={[4, 0]}>
							<Box as={Office} size={16} mb='4' />

							<Heading
								as='h3'
								color='green.500'
								size='md'
								mb='2'
								fontWeight='medium'
								fontFamily='inherit'>
								التسويق العقاري
							</Heading>
							<Text fontSize='sm' textAlign='justify' fontFamily='inherit'>
								التسويق العقاري في تركيا، غدا علماً يبحث في حاجات ورغبات العملاء الحالية والمستقبلية
								بالتملك العقاري، حيث نعمل – في مجموعة الفارس – على تحقيقها مقابل ربح مناسب للشركة.
							</Text>
						</Box>
						<Box width={['100%', 1 / 2]} pr={[0, 4]}>
							<Box as={Planning} size={16} mb='4' />

							<Heading
								as='h3'
								color='green.500'
								size='md'
								mb='2'
								fontWeight='medium'
								fontFamily='inherit'>
								الإستشارات العقارية
							</Heading>
							<Text fontSize='sm' textAlign='justify' fontFamily='inherit'>
								توفر الاستشارات العقارية في تركيا، المعلومات والتوقعات المبدئية اللازمة للمستثمرين
								في قطاع العقارات التركية سواء حول تكاليف المشاريع الاستثمارية، أو المردود المتوقع.
							</Text>
						</Box>
					</Flex>
					<Flex flexWrap='wrap'>
						<Box width={['100%', 1 / 2]} pl={[0, 4]} mb={[4, 0]}>
							<Box as={Search} size={16} mb='4' />

							<Heading
								as='h3'
								color='green.500'
								size='md'
								mb='2'
								fontWeight='medium'
								fontFamily='inherit'>
								إدارة الأملاك العقارية
							</Heading>
							<Text fontSize='sm' textAlign='justify' fontFamily='inherit'>
								عند طلب خدمة إدارة الأملاك العقارية في تركيا سوف تقوم مجموعة الفارس العقارية بتقديم
								باقات مميزة من الخدمات، تتضمن التصميم والديكور، والتأجير، وحتى التقييم العقاري.
							</Text>
						</Box>
						<Box width={['100%', 1 / 2]} pr={[0, 4]}>
							<Box as={CheckList} size={16} mb='4' />

							<Heading
								as='h3'
								color='green.500'
								size='md'
								mb='2'
								fontWeight='medium'
								fontFamily='inherit'>
								الجولات العقارية
							</Heading>
							<Text fontSize='sm' textAlign='justify' fontFamily='inherit'>
								تشمل خدمات الفارس العقارية المواصلات من وإلى المطار والجسور والأماكن السياحية في
								اسطنبول من خلال توفيرها سيارات وفانات حديثة وفاخرة مع السائقين المختصين.
							</Text>
						</Box>
					</Flex>
				</Box>

				<Flex as='section' flexWrap='wrap' width='100%'>
					<Box
						width={['100%', '100%', 4 / 7, 3 / 5]}
						p={[6, 12]}
						order={[1, 0]}
						backgroundColor='gray.50'>
						<Heading
							as='h3'
							color='green.500'
							textTransform='uppercase'
							mb='2'
							mt='8'
							fontFamily='inherit'>
							فلسفتنا
						</Heading>
						<Text fontFamily='inherit'>
							ننظر إلى تركيا على أنها جنة الاستثمار القادم، وكما أنها جنة الأرض يأوي إليها السائحون،
							كذلك تتطلع إليها آمال المستثمرين. ونؤمن بمبدأ أخوة البلدان، وصداقة الشعوب، وأينما كنت
							فتركيا بيتك الثاني، والناس فيها أهلك، والبلد بلدك.
						</Text>
						<Heading
							as='h3'
							color='green.500'
							textTransform='uppercase'
							mb='2'
							mt='8'
							fontFamily='inherit'>
							التثقيف العقاري
						</Heading>
						<Text fontFamily='inherit'>
							نقوم بنشر سلسلة حلقات عن التملك العقاري في تركيا، كما نترجم وننشر مقالات متخصصة عن
							الاقتصاد التركي، وأهم مستجدات البنية التحتية، والقوانين الجديدة المتعلقة بالعقار،
							وسائر ما يهم المستثمر والراغب بالتملك أو العيش في تركيا.
						</Text>
						<Heading
							as='h3'
							color='green.500'
							textTransform='uppercase'
							mb='2'
							mt='8'
							fontFamily='inherit'>
							لماذا تركيا؟
						</Heading>
						<Text fontFamily='inherit'>
							تركيا الجديدة بلد صاعد بسرعة وثقة، ومؤشر النمو فيه لم يعرف سوى القفز والصعود، تزامناً
							مع ثورة البنى التحتية، والتسهيلات الحكومية، والتطور الصناعي والطبي، والمشاريع العملاقة
							التي تأخذ تركيا من الماضي إلى المستقبل بسرعة النور.
						</Text>
					</Box>
					<Box
						width={['100%', '100%', 3 / 7, 2 / 5]}
						height={['50vh', '50vh', 'auto']}
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
		</Flex>
	);
};

AboutUs.Layout = DefaultLayout;

export default AboutUs;
