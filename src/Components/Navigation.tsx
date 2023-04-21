import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, Image, Stack } from '@chakra-ui/react';
import backgroundImage from '../Assets/Space-background.png';
import { CloseIcon } from '@chakra-ui/icons';
import starBox from '../Assets/Images/star-box.svg';
import { AppRoutes } from '../Routes/AppRoutes';
import { useNavigate } from 'react-router-dom';
import circleArrow from '../Assets/Images/circleArrow.svg'
import { MotionBox, rotation } from '../Pages/Home';
import Star from '../Assets/Images/Star.svg';

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
		id: 0,
		menu: 'About Me',
		path: AppRoutes.about
	},
	{
		id: 0,
		menu: 'Projects',
		path: AppRoutes.projects
	}
]

export const Navigation = ({ isOpen, onClose }:INavigationProps) => {
	const [open, setOpen] = useState<boolean>(isOpen);
	const navigate = useNavigate();

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
			opacity={open ? '1' : '0'}
			transition="all 0.3s ease-in-out"
			zIndex={1}
			px={['30px','70px']}
		>
			<Box  overflow="hidden">
				<Flex  cursor={'pointer'} borderBottom={'1px solid white'} py={4} justifyContent={'space-between'} color={'#fff'}>
					<Image src={starBox} onClick={() => navigate(AppRoutes.home)} cursor={'pointer'} />
					<CloseIcon onClick={onClose}  />
				</Flex>
				<Flex direction={['column', 'row']} justifyContent={'space-between'}>
					<Stack pt={20} spacing={8}>
						{
							NavigationItems.map((item) => {
								return(
									<Stack cursor={'pointer'} onClick={() => navigate(item.path)}    direction={'row'} spacing={'48px'} justifyContent={'flex-start'} alignItems={'center'}  key={item.id}>
										<Text fontSize={['45px','96px']} fontWeight={500} color={'#fff'}>{item.menu}</Text>
										<Image width={['80px','128px']} cursor={'pointer'} height={['80px','128px']} src={circleArrow}  onClick={() => navigate(item.path)} />
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
