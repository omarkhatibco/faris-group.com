import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/core';

export const Overlay = props => {
	const { children, isOpen, onClose, size, bg, p, color, ...rest } = props;
	return (
		<Modal isOpen={isOpen} onClose={onClose} size='6xl' {...rest}>
			<ModalCloseButton
				zIndex={1500}
				borderRadius='100%'
				position='fixed'
				bg='rgba(0,0,0,0.5)'
				color='white'
			/>
			<ModalOverlay bg='rgba(0,0,0,0.8)' onClick={onClose} />
			<ModalContent bg='transparent' boxShadow='none'>
				<ModalBody flexBasis='auto' bg='transparent' p={2}>
					{children}
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
