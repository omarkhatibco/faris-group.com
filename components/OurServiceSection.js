import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/core';
import { useContext } from 'react';
import { ConfigContext, Image } from '~components';
import { getCdnUrl } from '~utls';

export const OurServiceSection = () => {
	const { aboutUs } = useContext(ConfigContext);
	return (
		<Flex as='section' flexWrap='wrap' width='100%'>
			<Box width={['100%', 2 / 5]} height={['50vh', 'auto']} position='relative'>
				<Image
					src={`${getCdnUrl(aboutUs?.ServiceImage)}&w=600`}
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
			<Box width={['100%', 3 / 5]} p={[6, 12]}>
				<Heading as='h2' fontSize={['xl', '5xl']} color='green.500' mb='4'>
					خدماتنا
				</Heading>
				<Flex flexWrap='wrap' mb='4'>
					<Box width={['100%', 1 / 2]} pl={[0, 4]} mb={[4, 0]}>
						<Icon name='office' size='16' mb='4' />
						<Heading as='h3' color='green.500' size='md' mb='2' fontWeight='medium'>
							التسويق العقاري
						</Heading>
						<Text textAlign='justify'>
							التسويق العقاري في تركيا، غدا علماً يبحث في حاجات ورغبات العملاء الحالية والمستقبلية
							بالتملك العقاري، حيث نعمل – في مجموعة الفارس – على تحقيقها مقابل ربح مناسب للشركة.
						</Text>
					</Box>
					<Box width={['100%', 1 / 2]} pr={[0, 4]}>
						<Icon name='invest' size='16' mb='4' />
						<Heading as='h3' color='green.500' size='md' mb='2' fontWeight='medium'>
							الإستشارات العقارية
						</Heading>
						<Text textAlign='justify'>
							توفر الاستشارات العقارية في تركيا، المعلومات والتوقعات المبدئية اللازمة للمستثمرين في
							قطاع العقارات التركية سواء حول تكاليف المشاريع الاستثمارية، أو المردود المتوقع.
						</Text>
					</Box>
				</Flex>
				<Flex flexWrap='wrap'>
					<Box width={['100%', 1 / 2]} pl={[0, 4]} mb={[4, 0]}>
						<Icon name='diagram' size='16' mb='4' />
						<Heading as='h3' color='green.500' size='md' mb='2' fontWeight='medium'>
							إدارة الأملاك العقارية
						</Heading>
						<Text textAlign='justify'>
							عند طلب خدمة إدارة الأملاك العقارية في تركيا سوف تقوم مجموعة الفارس العقارية بتقديم
							باقات مميزة من الخدمات، تتضمن التصميم والديكور، والتأجير، وحتى التقييم العقاري.
						</Text>
					</Box>
					<Box width={['100%', 1 / 2]} pr={[0, 4]}>
						<Icon name='board' size='16' mb='4' />
						<Heading as='h3' color='green.500' size='md' mb='2' fontWeight='medium'>
							الجولات العقارية
						</Heading>
						<Text textAlign='justify'>
							تشمل خدمات الفارس العقارية المواصلات من و إلى المطار و الجسور والأماكن السياحية في
							اسطنبول من خلال توفيرها سيارات وفانات حديثة و فاخرة مع السائقين المختصين.
						</Text>
					</Box>
				</Flex>
			</Box>
		</Flex>
	);
};
