import {
	Modal, 
	ModalOverlay, 
	ModalContent, 
	ModalCloseButton, 
	ModalBody
} from '@chakra-ui/react';
import React from 'react';
import { SmoothScroll } from './SmoothScroll';

interface IProjectModal{
    open: boolean;
    close: () => void;
	// onOpen: () => void;
	children: React.ReactNode;
	background: string;
}

export const ProjectModal = ({open, close, children,background}:IProjectModal) => {
	return(
		<SmoothScroll>
			<Modal
				// isCentered
				onClose={close}
				isOpen={open}
				size={'full'}
				motionPreset='none'
			>
				<ModalOverlay/>
				<ModalContent
					background={background}
					backgroundPosition="center"
					backgroundRepeat="no-repeat"
					bgSize={'cover'}
					backgroundAttachment={'fixed'}
				>
					<ModalCloseButton 
						bg={'white'}
						// size={'xl'} 
						boxSize={'50px'}
						color={'#9175FF'}
						borderRadius={'50%'}
						position={'fixed'}
						left={'95%'}
						top={'5%'}
					/>
					<ModalBody px={['','150px']} py={['','100px']}>
						{children}
					</ModalBody>
				</ModalContent>
			</Modal>
		</SmoothScroll>
	);
};