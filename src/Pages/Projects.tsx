import { Box, Stack, Text, Image, Heading, useDisclosure, BoxProps } from '@chakra-ui/react';
import React from 'react';
import { ProjectJumbotron } from '../Components/ProjectJumbotron';
import { LandingPageLayout } from '../Layouts/LandingPageLayout';
import POP from '../Assets/Images/POP.png';
import VENDEASE from '../Assets/Images/VENDEASE.png';
import AFRICA from '../Assets/Images/AFRICA.png';
import OOBLA from '../Assets/Images/OOBLA.png';
import PROCUREMENT from '../Assets/Images/PROCUREMENT.png';
import { Works } from '../Components/Works';
import { PointOfPurchase } from './PointOfPurchase';
import { EnjoyAfrica } from './EnjoyAfrica';
import { motion } from 'framer-motion';

export const MotionBox = motion<BoxProps>(Box);

export const Projects = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { isOpen:open, onOpen:openModal, onClose:close } = useDisclosure();
	const _handleFirstModalClick = () => {
		console.log('click');
		onOpen();
	};

	const _handleSecondModalClick = () => {
		openModal();
	};

	return(
		<><LandingPageLayout JumbotronSection={<ProjectJumbotron />}>
			<Stack
				spacing={'144px'}
				position={'relative'}
				bottom={'80px'}
				alignItems={'center'}
			>
				<Stack
					onClick={_handleSecondModalClick}
					cursor={'pointer'}
					// overflow={'hidden'}
				>
					<Box
						w={['auto', '1216px']}
						h={['400px', '664px']}
						overflow={'hidden'}
						borderRadius={['24px','40px']}
						mb={['40px','40px']}
						
					>
						<Image
							src={POP}
							w={'100%'}
							h={'100%'}
							as={motion.img}
							// objectFit={'cover'}
							whileHover={{
								scale: 1.02,
								transition: { duration: 0.5 },
							}}
						/>
					</Box>
					
					<Box>
						<Heading
							color={'#fff'}
							fontSize={['20px','24px']}
							mb={'12px'}
						>POP</Heading>
						<Text
							color={'#93979D'}
							fontSize={['16px','20px']}
							fontWeight={400}
						>
							Worked as sole designer for Vendease POP, a point of sales solution for Restaurants and Hotels,<br /> which allows them create menus and access easy checkouts.
						</Text>
					</Box>

				</Stack>
				<Stack
					justify={'space-between'}
					align={'flex-start'}
					direction={['column', 'row']}
					spacing={10}
				>
					<Stack
						cursor={'pointer'}						
					>
						<Box
							w={['100%','100%']} 
							height={['400px','500px']}
							overflow={'hidden'}
							borderRadius={['24px','40px']}
							mb={'40px'}
						>
							<Image 
								src={VENDEASE} 
								w={'100%'}
								h={'100%'}
								as={motion.img}
								whileHover={{
									scale: 1.02,
									transition: { duration: 0.5 },
								}}
							/>
						</Box>
						<Heading
							fontSize={['20px','24px']}
							color={'#fff'}
							mb={'12px'}
						>Vendease.com (coming soon)</Heading>
						<Text
							color={'#93979D'}
							fontSize={['16px','20px']}
							fontWeight={400}
						>
							Worked as the lead designer for the redesign of Vendease website. Handled style direction and prototyping.
						</Text>
					</Stack>
					<Box
						onClick={ _handleFirstModalClick}
						cursor={'pointer'}
						overflow={'hidden'}
					>
						<Box
							overflow={'hidden'}
							w={'100%'}
							h={['400px', '664px']}
							mb={'40px'}
							borderRadius={['24px','40px']}
						>
							<Image 
								src={AFRICA} 
								w={'100%'}
								h={'100%'}
								as={motion.img}
								whileHover={{
									scale: 1.02,
									transition: { duration: 0.5 },
								}}
								
							/>
						</Box>
						<Heading
							fontSize={['20px','24px']}
							color={'#fff'}
							mb={'12px'}
						>Enjoy Africa</Heading>
						<Text
							color={'#93979D'}
							fontSize={['16px','20px']}
							fontWeight={400}
						>
							Worked as the lead designer for Enjoy Africa, a platform that gives users access to restaurants around them and allows them make reservations access discounts and place orders.
						</Text>
					</Box>
				</Stack>
				<Stack
					justify={'space-between'}
					align={'flex-start'}
					direction={['column', 'row']}
					spacing={42}
				>
					<Box
						cursor={'pointer'}
					>
						<Box
							overflow={'hidden'}
							w={['100%','800px']} 
							h={['400px', '664px']}
							mb={'40px'}
							borderRadius={['24px','40px']}
						>
							<Image 
								src={PROCUREMENT} 
								w={'100%'}
								h={'100%'}
								as={motion.img}
								whileHover={{
									scale: 1.02,
									transition: { duration: 0.5 },
								}}
							/>
						</Box>
						<Heading
							fontSize={['20px','24px']}
							color={'#fff'}
							pb={'12px'}
						>E-Procurement (Coming Soon)</Heading>
						<Text
							color={'#93979D'}
							fontSize={['16px','20px']}
							fontWeight={400}
						>
							Worked as the lead designer for the redesign of Vendease E-procurement platform, Web and Mobile app.
						</Text>
					</Box>
					<Box
						cursor={'pointer'}
						overflow={'hidden'}
					>
						<Box
							overflow={'hidden'}
							w={['100%', '600px']} 
							h={['400px', '500px']}
							// objectFit={'cover'}
							mb={'40px'}
							borderRadius={['24px','40px']}
						>
							<Image 
								src={OOBLA} 
								w={'100%'}
								h={'100%'}
								as={motion.img}
								whileHover={{
									scale: 1.02,
									transition: { duration: 0.5 },
								}}
							/>
						</Box>
						<Heading
							fontSize={['20px','24px']}
							color={'#fff'}
							mb={'12px'}

						>Oobla Refresh (coming soon)</Heading>
						<Text
							color={'#93979D'}
							fontSize={['16px','20px']}
							fontWeight={400}
						>
							I’ve worked on a couple of other projects over time which I’m super proud of. These projects range from interaction Design to Motion Design and 3D.
						</Text>
					</Box>
				</Stack>
				<Works />
			</Stack>
		</LandingPageLayout>
		<PointOfPurchase open={open} close={close }  />
		<EnjoyAfrica openModal={isOpen} closeModal={onClose}  />
		</>
	);
};