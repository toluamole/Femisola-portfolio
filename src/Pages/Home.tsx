import { Box, Heading, Text, Flex, Button, Image, BoxProps } from '@chakra-ui/react';
import React from 'react';
import { GradientBackground } from '../Components/GradientBackground';
import Star from '../Assets/Images/Star.svg';
import Arrow from '../Assets/Images/button-arrow.svg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../Routes/AppRoutes';

export const MotionBox = motion<BoxProps>(Box);
export const rotation ={
	animate: {
		rotate: 360,
		transition:{ 
			type: 'linear',
			repeat: Infinity, 
			duration:10
		}
	}
};

export const Home = () => {
	const navigate = useNavigate();
	return(
		<GradientBackground display={'flex'}>
			<Flex
				justifyContent={'space-between'}
				alignItems={'flex-start'}
				direction={['column', 'row']}
			>
				<Flex
					direction={'column'}
				>
					<Heading sx={{WebkitTextStroke: '1px #fff'}}  color={'transparent'} fontSize={['50px','85px']} mb={'32px'}>Femisola</Heading>
					<Heading color={'white'} fontSize={['50px','85px']} mb={'32px'}>Fatogun</Heading>
					<Flex
						justifyContent={'space-between'}
					>
						<Button
							w={'311px'}
							h={'72px'}
							position={'relative'}
							borderRadius={'42px'}
							bg={'#4F4CEA'}
							color={'#fff'}
							fontSize={'20px'}
							fontWeight={400}
							onClick={() => navigate(AppRoutes.projects)}
							transition= '0.2'
							_hover={{
								bg: '#4F4CEA',
								color: '#fff'
							}}
						>
							<Image src={Arrow} 
								mr={3}
							/>
							<Text>VIEW PROJECTS</Text>
						</Button>
					</Flex>	
					
				</Flex>
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
				
				<Flex
					align={'flex-end'}
					justify={'center'}
					direction={'column'}
				>
					<Text 
						w={['auto', null, null, '650px']}
						color={'#fff'}
						fontSize={'20px'}
						mb={'12px'}
						fontWeight={400}
					>
						Hi there 👋🏾,
					</Text>
					<Text 
						w={['auto', null, null, '650px']}
						color={'#fff'}
						fontSize={'20px'}
						mb={'12px'}
						fontWeight={400}
					>
						I&apos;m Femisola Fatogun, a product designer based in Lagos, Nigeria. 
						With 5 years of experience designing user-centric products, 
						I&apos;ve honed my skills in creating intuitive and engaging experiences that meet business goals.
					</Text>
					<Text 
						w={['auto', null, null, '650px']}
						color={'#fff'}
						fontSize={'20px'}
						mb={'12px'}
						fontWeight={400}
					>
						Working collaboratively with stakeholders is something I&apos;m passionate about, 
						as it allows me to design products that exceed expectations while also solving real-world problems. 
						I take pride in my ability to conduct user research, design prototypes, and create wireframes that bring ideas to life.<br/>
					</Text>
					<Text 
						w={['auto', null, null, '650px']}
						color={'#fff'}
						fontSize={'20px'}
						mb={'12px'}
						fontWeight={400}
					>
						For me, the best part of being a product designer is delivering memorable experiences that users love. 
						Whether it&apos;s designing an app, website, or any other digital product, 
						I&apos;m always excited about every step of the design process.<br/>
					</Text>
					<Text 
						w={['auto', null, null, '650px']}
						color={'#fff'}
						fontSize={'20px'}
						fontWeight={400}
					>
						If you&apos;re looking for a product designer who can help you bring your ideas to life, I&apos;m here to help. 
						My creativity, attention to detail, and ability to work well with teams make me an invaluable asset to any project. 
						Let&apos;s work together to create something amazing!
					</Text>
				</Flex>
			</Flex>
		</GradientBackground>
	);
};