import React, { useState, useEffect } from 'react';
import { Box, Flex, Image, Stack, Heading } from '@chakra-ui/react';
import backgroundImage from '../Assets/Space-background.png';
import starBox from '../Assets/Images/star-box.svg';
import { AppRoutes } from '../Routes/AppRoutes';
import { useNavigate } from 'react-router-dom';
import circleArrow from '../Assets/Images/circleArrow.svg'
import { MotionBox, rotation } from '../Pages/Home';
import Star from '../Assets/Images/Star.svg';
import closeIcon from '../Assets/Images/closeIcon.svg';

interface INavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavigationItems =[
	{
		id: 0,
		menu: 'Home',
		path: AppRoutes.home
	},
	{
		id: 1,
		menu: 'About Me',
		path: AppRoutes.about
	},
	{
		id: 1,
		menu: 'Projects',
		path: AppRoutes.projects
	}
]

export const Navigation = ({ isOpen, onClose }:INavigationProps) => {
	const [open, setOpen] = useState<boolean>(isOpen);
	const [hoveredLink, setHoveredLink] = useState('');
	const navigate = useNavigate();

	const _handleMouseEnter = (menuItem:string) => {
		if(menuItem){
			setHoveredLink(menuItem);
		}
		
		
	}

	const _handleMouseLeave = (menuItem:string) => {
		if(menuItem){
			setHoveredLink('');
		}
	}

	useEffect(() => {
		setOpen(isOpen);
	}, [isOpen]);

	return (
		<Box
			position="fixed"
			top={0}
			left={0}
			width="100%"
			height="100%"
			background={`url(${backgroundImage})`}
			backgroundPosition="center"
			backgroundRepeat="no-repeat"
			bgSize={'cover'}
			h={'100vh'}
			overflow={'hidden'}
			display={open ? 'block' : 'none'}
			transition="all 0.3s ease-in-out"
			zIndex={1}
			px={['30px','60px']}
		>
			<Box  overflow="hidden">
				<Flex borderBottom={'1px solid white'} py={6}  justifyContent={'space-between'} color={'#fff'}>
					<Image src={starBox} onClick={() => navigate(AppRoutes.home)} cursor={'pointer'} />
					<Box cursor={'pointer'} onClick={onClose}><Image src={closeIcon}   /></Box>
				</Flex>
				<Flex direction={['column', 'row']} justifyContent={'space-between'}>
					<Stack pt={20} spacing={8}>
						{
							NavigationItems.map((item, index) => {
								return(
									<Stack 
										cursor={'pointer'} 
										onClick={() => navigate(item.path)} 
										direction={'row'} 
										spacing={'48px'} 
										justifyContent={'flex-start'} 
										alignItems={'center'}  
										key={index}
										border={'none'}
										transition={'all .3s ease'}
										onMouseEnter={() =>_handleMouseEnter(item.menu)}
										onMouseLeave={() => _handleMouseLeave(item.menu)}
										_hover={{
											border:'2px solid #FFFFFF',
											borderRadius:'98px',
											px:' 40px',
											bg: 'none'
										}}
									>
										<Heading fontSize={['45px','96px']} fontWeight={500} color={'#fff'}>{item.menu}</Heading>
										<Image 
											width={['80px','128px']} 
											cursor={'pointer'} 
											height={['80px','128px']} 
											src={circleArrow} 
											onClick={() => navigate(item.path)} 
											bgColor={ hoveredLink === item.menu ? 'transparent' : '#FFF'}
											borderRadius={'50%'}
											py={'32px'} px={'16px'}
											transition={'all .3s ease'}
											// _hover={{
											// 	bg: 'none'
											// }}
										/>
									</Stack>
								)
							})
						}
					</Stack>
					{/* Menu content here */}
					<MotionBox
						variants={rotation}
						animate='animate'
						alignSelf={['center','flex-end']} 
					>
						<Image 
							src={Star} 
							w={'100px'} 
							h={'100px'} 
						/>
					</MotionBox>
				</Flex>
			</Box>
			
		</Box>
	);
};
