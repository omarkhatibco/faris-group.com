import { Box, Heading, Link, List, ListIcon, ListItem } from '@chakra-ui/core';
import { FaFileAlt, FaFilePdf } from 'react-icons/fa';

export const PropertyAttachments = ({ attachments }) => {
	return attachments?.length > 0 ? (
		<Box>
			<Heading
				as='h2'
				mb={6}
				color='green.500'
				fontSize={['xl', '3xl']}
				textTransform='uppercase'
				fontFamily='inherit'>
				ملحقات إضافية
			</Heading>
			<List spacing={2}>
				{attachments?.map(({ id, source_url, title, mime_type }, index) => {
					return (
						<ListItem fontWeight='bold' fontSize='lg' key={id}>
							{mime_type.includes('pdf') && (
								<ListIcon
									icon={FaFilePdf}
									width='1.25em'
									height='1.25em'
									color='green.400'
									mr={0}
									ml={2}
								/>
							)}
							{mime_type.includes('doc') && (
								<ListIcon
									icon={FaFileAlt}
									width='1.25em'
									height='1.25em'
									color='green.400'
									mr={0}
									ml={2}
								/>
							)}
							<Link href={source_url} target='_blank' download>
								{title?.rendered}
							</Link>
						</ListItem>
					);
				})}
			</List>
			<Box as='hr' my={8}></Box>
		</Box>
	) : null;
};
