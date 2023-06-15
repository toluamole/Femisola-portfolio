import { Box,  Flex,Text, Image, HStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import backgroundImage from '../Assets/Space-background.png';
import starBox from '../Assets/Images/star-box.svg';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../Routes/AppRoutes';
import { Navigation } from './Navigation';
import menu from '../Assets/Images/menu.svg';
import socialStar from '../Assets/Images/socialStar.svg';
import starIcon from '../Assets/Images/starIcon.svg';
import { MotionBox } from './SmoothScroll';
// import { Link as RLink } from 'react-router-dom';

interface IGradientBackgroundProp{
    children: React.ReactNode;
	display: 'none' | 'block' | 'flex';
}

export const socialItems = [
	{
		id: 0,
		platform: 'Socials',
		visibile: true,
		icon: socialStar
	},
	{
		id: 1,
		platform: 'Linkedin',
		visibile: false,
		icon: starIcon
	},
	{
		id: 2,
		platform: 'Dribble',
		visibile: false,
		icon: starIcon
	},
	{
		id: 3,
		platform: 'Behance',
		visibile: false,
		icon: starIcon
	},
	{
		id: 4,
		platform: 'Medium',
		visibile: false,
		icon: starIcon
	}
]

export const GradientBackground = ({children, display}:IGradientBackgroundProp) => {
	const navigate = useNavigate();
	const [menuOpen, setMenuOpen] = useState(false);
	const [visible, setVisible] = useState([true, false, false, false, false]);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};
	
	return(
		<Flex
			direction={'column'}
			justifyContent={'space-between'}
			background={`url(${backgroundImage})`}
			backgroundPosition="center"
			backgroundRepeat="no-repeat"
			bgSize={'cover'}
			h={['100vh']}
			overflow={'auto'}
			px={['30px','60px']}
		>
			<Flex borderBottom={'1px solid white'} py={6} justifyContent={'space-between'} color={'#fff'}>
				<Image src={starBox} onClick={() => navigate(AppRoutes.home)} />
				<Box cursor={'pointer'} onClick={toggleMenu}><Image src={ menu}/></Box>
			</Flex>
			<Box >{children}</Box>
			<Flex display={display} borderTop={'1px solid white'} py={4} alignItems={'center'} justifyContent={'space-between'} color={'#fff'}>
				<HStack justifyContent={'space-between'}>
					{socialItems.map((item, index) => {
						return(
							<MotionBox
								key={item.id}
								whileHover={
									index === item.id
										? { cursor: 'pointer' }
										: { visibility: 'visible', cursor: 'pointer' }
								}
								cursor={'pointer'}
							>
								<HStack
									style={{
										visibility: visible[item.id] ?  'visible' : 'hidden',
										opacity: visible[item.id] ? 1 : 0,
									}}
									transition={'all .3s ease'}
									onMouseEnter={() => {
										setVisible([true, true, true, true, true]);
									}}
									onMouseLeave={() => {
										setVisible([true, false, false, false, false]);
									}}
									justify={'center'}
									align={'center'}
								>
									<Text 
										key={item.id}
										fontSize={'14px'}
										transition={'all .3s ease'}
										_hover={{color: '#4F4CEA'}}
									>
										{item.platform}
									</Text>
									<Image 
										w={'4px'} 
										h={'4px'} 
										ml={2} 
										src={item.icon} 
									/>
								</HStack>
							</MotionBox>
							
						)
					})}
				</HStack>
				
				<Text onClick={() => window.location.href = 'mailto:fatogunf@gmail.com'} 
					textDecoration={'underline'} 
					transition={'all .3s ease'} 
					cursor={'pointer'} 
					fontSize={'14px'} 
					_hover={{color: '#4F4CEA'}}
				>fatogunf@gmail.com</Text>
				<Text transition={'all .3s ease'} cursor={'pointer'} fontSize={'14px'} _hover={{color: '#4F4CEA'}}>Resume</Text>
			</Flex>
			<Navigation isOpen={menuOpen} onClose={toggleMenu} />
		</Flex>
	);
};