import { Flex, Heading, HStack, Stack, Text, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import { MotionBox } from '../Pages/Home';
import { socialItems } from './GradientBackground';

export const Footer = () => {
	const [visible, setVisible] = useState([true, false, false, false, false]);
	return(
		<Stack
			maxW={'1600px'} m={'0 auto'}
			px={['30px','60px']}
		>
			<Heading
				fontSize={['48px','80px']}
				color={'#fff'}
				fontWeight={'500'}
			>Reach Out</Heading>
			<Flex  borderTop={'1px solid white'} py={4}  justifyContent={'space-between'} color={'#fff'}>
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
										opacity: visible[item.id] ? 1 : 0
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
					cursor={'pointer'} fontSize={'14px'} 
					_hover={{color: '#4F4CEA'}}
				>
					fatogunf@gmail.com
				</Text>
				<Text transition={'all .3s ease'} cursor={'pointer'} fontSize={'14px'} _hover={{color: '#4F4CEA'}}>Resume</Text>
			</Flex>
		</Stack>
	);
};