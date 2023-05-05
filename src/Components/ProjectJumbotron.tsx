import { Flex, HStack, Stack, Text,Image, Heading } from '@chakra-ui/react';
import React from 'react';
import Star from '../Assets/Images/Star.svg';
import { MotionBox, rotation } from '../Pages/Home';

export const ProjectJumbotron = () => {
	return(
		<Flex
			direction={['column', 'row']}
			justifyContent={'space-between'}
			alignItems={['flex-start','center']}
			py={['98px','224px']}
			px={['10px','70px']}
			maxW={'1600px'} m={'0 auto'}
		>
			<Stack mb={6}>
				<HStack spacing={'32px'}>
					<Heading
						color={'#fff'}
						fontSize={['48px','96px']}
						fontWeight={600}
					>Building</Heading>
					<MotionBox
						variants={rotation}
						animate='animate'
						// alignSelf={'center'} 
					>
						<Image 
							src={Star} 
							w={['70px','100px']} 
							h={['70px','100px']} 
						/>
					</MotionBox>
				</HStack>
				<Heading
					color={'#fff'}
					fontSize={['48px','96px']}
					fontWeight={600}
				>Experiences</Heading>
			</Stack>
			<Text
				fontSize={['18px','20px']}
				fontWeight={500}
				color={'#fff'}
				w={['auto','436px']}
			>
            These are selected projects I’ve worked on over the past few years that I’m excited about. Some were done with me as the sole designer and others while working with a team of awesome individuals
			</Text>
		</Flex>
	);
};