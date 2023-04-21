import { Heading, Stack, Image } from '@chakra-ui/react';
import React from 'react';
import Star from '../Assets/Images/Star.svg';
import { MotionBox, rotation } from '../Pages/Home';

export const AboutJumbotron = () => {
	return(
		<Stack
			align={'center'}
			spacing={8}
			py={36}
			// px={['30px','70px']}
			maxW={'1600px'} m={'0 auto'}
		>
			<Heading
				color={'#fff'}
				fontSize={['30px','80px']}
				textAlign={'left'}
				alignSelf={'center'}
				justifySelf={'center'}
				fontWeight={600}
				w={'100%'}
			>
				Okay,  I&apos;m Femisola <br/> Fatogun, a designer and a  <br/> couple of other things 😌
			</Heading>
			<MotionBox
				variants={rotation}
				animate='animate'
				alignSelf={'center'} 
			>
				<Image 
					src={Star} 
					w={'100px'} 
					h={'100px'} 
				/>
			</MotionBox>
		</Stack>
	);
};