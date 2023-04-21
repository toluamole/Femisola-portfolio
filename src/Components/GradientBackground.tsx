import { Box,  Flex,Text, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import backgroundImage from '../Assets/Space-background.png';
import starBox from '../Assets/Images/star-box.svg';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../Routes/AppRoutes';
import { Navigation } from './Navigation';
interface IGradientBackgroundProp{
    children: React.ReactNode;
	display: 'none' | 'block' | 'flex';
}

export const GradientBackground = ({children, display}:IGradientBackgroundProp) => {
	const navigate = useNavigate();
	const [menuOpen, setMenuOpen] = useState(false);

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
			h={['full','100vh']}
			// px={'80px'}
			px={['30px','80px']}
			// maxW={'1600px'} m={'0 auto'}
		>
			<Flex borderBottom={'1px solid white'} py={4} justifyContent={'space-between'} color={'#fff'}>
				<Image src={starBox} onClick={() => navigate(AppRoutes.home)} />
				<Box onClick={toggleMenu}><HamburgerIcon /></Box>
			</Flex>
			<Box>{children}</Box>
			<Flex display={display} borderTop={'1px solid white'} py={4}  justifyContent={'space-between'} color={'#fff'}>
				<Text>Socials</Text>
				<Text>fatogunf@gmail.com</Text>
				<Text>Resume</Text>
			</Flex>
			<Navigation isOpen={menuOpen} onClose={toggleMenu} />
		</Flex>
	);
};