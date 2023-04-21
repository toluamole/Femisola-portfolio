import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export const Footer = () => {
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
			<Flex borderTop={'1px solid white'} py={4}  justifyContent={'space-between'} color={'#fff'}>
				<Text fontSize={'14px'} fontWeight={'light'}>Socials</Text>
				<Text fontSize={'14px'} fontWeight={'light'}>fatogunf@gmail.com</Text>
				<Text fontSize={'14px'} fontWeight={'light'}>Resume</Text>
			</Flex>
		</Stack>
	);
};