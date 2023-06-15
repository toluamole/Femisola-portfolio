import { Box, 
	Divider, 
	Flex, 
	Heading, 
	Stack, Text } from '@chakra-ui/react';
import React from 'react';

const works = [
	{
		id:0,
		company: 'UBA',
		year: '2018'
	},
	{
		id:1,
		company: 'Zeedas (Motion)',
		year: '2019'
	},
	{
		id:2,
		company: 'MNG',
		year: '2020'
	},
	{
		id:3,
		company: 'Koins (Motion)',
		year: '2021'
	},
	{
		id:4,
		company: 'Vendy (Motion)',
		year: '2022'
	},
];

export const Works = () => {
	return(
		<Box
			w={'1216px'}
		>
			<Flex
				justifyContent={'space-between'}
				direction={['column', 'row']}
			>
				<Heading
					w={['343px','560px']}
					fontSize={['36px','60px']}
					color={'#fff'}
					fontWeight={500}
				>Some other projects worked on over the years</Heading>
				<Stack w={'568px'} spacing={'50px'}>
					{works.map((item) => {
						return(
							<><Flex justifyContent={'space-between'} key={item.id}>
								<Text fontFamily={'heading'} fontWeight={'600'} color={'#fff'} fontSize={['18px', '24px']}>{item.company}</Text>
								<Text fontFamily={'heading'} fontSize={['18px', '24px']} fontWeight={600} color={'#93979D'}>{item.year}</Text>
							</Flex><Divider /></>
						)
					})}
				</Stack>
			</Flex>
		</Box>
	);
};