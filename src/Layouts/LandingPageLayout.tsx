import { Box, Flex, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Footer } from '../Components/FooterSection';
import backgroundImage from '../Assets/Space-background.png';
import { HamburgerIcon } from '@chakra-ui/icons';
import starBox from '../Assets/Images/star-box.svg';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../Routes/AppRoutes';
import { SmoothScroll } from '../Components/SmoothScroll';
import { Navigation } from '../Components/Navigation';

interface ILandingPageLayoutProps{
    children: React.ReactNode;
    JumbotronSection: React.ReactNode;
}

export const LandingPageLayout = ({children, JumbotronSection}:ILandingPageLayoutProps) => {
	const navigate = useNavigate();
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};
	return(
		<SmoothScroll isOpen={menuOpen}>
			<Box
				bg={'#000'}
				overflowX={'hidden'}
			>
				<Box
					background={`url(${backgroundImage})`}
					backgroundPosition="center"
					backgroundRepeat="no-repeat"
					bgSize={'cover'}
					h={['75vh','100%']}
					px={['20px','70px']}
					// maxW={'1600px'} m={'0 auto'}
				>
					<Flex borderBottom={'1px solid white'} py={4} justifyContent={'space-between'} color={'#fff'}>
						<Image src={starBox} onClick={() => navigate(AppRoutes.home)} cursor={'pointer'} />
						<HamburgerIcon onClick={toggleMenu} cursor={'pointer'}/>
					</Flex>
					<Box  >{JumbotronSection}</Box>
				</Box> 
				<Box
					px={['20px','60px']}
					pb={'100px'}
					bg={'#000'}
					maxW={'1600px'} m={'0 auto'}
				>
					{children}
				</Box> 
				<Footer/>
				<Navigation isOpen={menuOpen} onClose={toggleMenu} />
			</Box>
		</SmoothScroll>
	);
};