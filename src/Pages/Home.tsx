import {
	Box,
	Heading,
	Text,
	Flex,
	Button,
	Image,
	BoxProps,
	Stack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { GradientBackground } from '../Components/GradientBackground';
import Star from '../Assets/Images/Star.svg';
import Arrow from '../Assets/Images/button-arrow.svg';
import buttonArrowIcon from '../Assets/Images/buttonArrowIcon.svg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../Routes/AppRoutes';
import selfie from '../Assets/Images/selfie.png';

export const MotionBox = motion<Omit<BoxProps, 'transition'>>(Box);
export const rotation = {
	animate: {
		rotate: 360,
		transition: {
			type: 'linear',
			repeat: Infinity,
			duration: 10,
		},
	},
};

export const Home = () => {
	const navigate = useNavigate();
	const [isHovering, setIsHovering] = useState(false);
	const [hovered, setHovered] = useState(false);

	const handleHover = () => {
		setHovered(true);
	};

	const handleMouseLeave = () => {
		setHovered(false);
	};

	return (
		<GradientBackground display={'flex'}>
			<Stack
				justifyContent={'space-around'}
				alignItems={'center'}
				direction={['column', 'row']}
				w={'full'}
			>
				<Stack
					align={'flex-start'}
					justify={'flex-start'}
					// mt={'-150px'}
					position={'relative'}
					bottom={'150px'}			
				>
					<MotionBox
						initial={{ visibility: 'hidden', opacity: 0 }}
						animate={{ visibility: isHovering ? 'visible' : 'hidden', opacity: isHovering ? 1 : 0 }}
						transition={{ duration: 0.5, ease: 'easeIn' }}
						style={{ overflow: 'hidden'}}
						alignSelf={'flex-end'}
						position={'relative'}
						// top={'7%'}
						right={'19%'}
						transform={'rotate(7.11deg)'} 
					>
						<Image width={'174px'} h={'234px'} src={selfie} />
					</MotionBox>
					<Heading
						sx={{ WebkitTextStroke: '1px #fff' }}
						color={'transparent'}
						fontSize={['50px', '96px']}
						fontWeight={600}
						transition={'color .5s ease'}
						_hover={{
							'color': '#4F4CEA',
							WebkitTextStroke: '#4F4CEA',
							cursor: 'pointer',
						}}
						onMouseEnter={() => setIsHovering(true)}
						onMouseLeave={() => setIsHovering(false)}
						// mb={'32px'}
					>
						Femisola
					</Heading>
					<Heading color={'white'} fontSize={['50px', '96px']} fontWeight={600} mb={'32px'}>
						Fatogun
					</Heading>
					<Button
						w={'311px'}
						h={'72px'}
						position={'relative'}
						borderRadius={'42px'}
						bg={'#4F4CEA'}
						color={'#fff'}
						fontSize={'16px'}
						fontWeight={400}
						onClick={() => navigate(AppRoutes.projects)}
						onMouseEnter={handleHover}
						onMouseLeave={handleMouseLeave}
						transition={'all .3s ease'}
						_hover={{
							bg: '#9175FF',
							color: '#fff',
							
						}}
					>
						<Image 
							
							visibility={hovered ? 'hidden' : 'visible'} 
							opacity={hovered ? 0 :  1}  
							src={Arrow} mr={hovered ? '-10' :3} 
							transition={'all .3s ease'}
						/>
							VIEW PROJECTS
						<Image 
							transition={'opacity .3s ease'}
							visibility={!hovered ? 'hidden' : 'visible'} 
							opacity={!hovered ? 0 : 1}  
							bg={'#FFF'} 
							borderRadius={'50%'} 
							w={'34px'} 
							h={'34px'} 
							p={1.5} 
							ml={3} 
							src={buttonArrowIcon} 
						/>
					</Button>
				</Stack>
				
				<MotionBox 
					variants={rotation} 
					animate="animate" 
					alignSelf={'center'}
				>
					<Image src={Star} w={'100px'} h={'100px'} />
				</MotionBox>

				<Flex align={'flex-end'} py={'80px'} justify={'center'} direction={'column'} >
					<Text
						w={['auto', null, null, '624px']}
						color={'#fff'}
						fontSize={'20px'}
						mb={'18px'}
						fontWeight={500}
					>
						Hi there 👋🏾,
					</Text>
					<Text 
						w={['auto', null, null, '624px']}
						color={'#fff'}
						fontSize={'20px'}
						mb={'18px'}
						fontWeight={500}
					>
						I&apos;m Femisola Fatogun, a product designer based in Lagos,
						Nigeria. With 5 years of experience designing user-centric products,
						I thrive on collaborating with stakeholders to exceed expectations and solve real-world problems.
						My strengths lie in user research, prototyping, wire-framing and bringing ideas to life with precision.
					</Text>
					<Text 
						w={['auto', null, null, '624px']}
						color={'#fff'}
						fontSize={'20px'}
						mb={'18px'}
						fontWeight={500}
					>
						I find joy in delivering memorable experiences that users love, whether it&apos;s designing apps, websites, or other digital products. 
						If you&apos;re seeking a product designer to bring your ideas to life, I&apos;m here to help. 
						My creativity, attention to detail, and team collaboration skills make me an invaluable asset. 
						Let&apos;s create something amazing together!
					</Text>
				</Flex>
			</Stack>
		</GradientBackground>
	);
};