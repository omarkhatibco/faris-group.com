import { Box, Heading, Link, List, ListIcon, ListItem } from '@chakra-ui/core';

export const PropertyAttachments = ({ attachments }) => {
	return attachments?.length > 0 ? (
		<Box as='section'>
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
						<ListItem display='flex' alignItems='center' fontWeight='bold' fontSize='lg' key={id}>
							<ListIcon
								icon={mime_type.includes('pdf') ? 'pdfFile' : 'docFile'}
								size='1.5rem'
								color='green.400'
								mr={0}
								ml={2}
							/>
							<Link
								href={source_url}
								color='green.700'
								target='_blank'
								rel='noopener noreferrer'
								download>
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
