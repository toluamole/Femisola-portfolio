import { Box, 
	Flex, 
	Heading,
	Spacer, 
	Table, 
	TableContainer, 
	Tbody, Td, Tr } from '@chakra-ui/react';
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
		<Box>
			<Flex
				justifyContent={'space-between'}
				direction={['column', 'row']}
			>
				<Heading
					w={['343px','45%']}
					fontSize={['36px','60px']}
					color={'#fff'}
					fontWeight={500}
				>Some other projects worked on over the years</Heading>
			
				<TableContainer
					w={['auto','550px']}
				>
					<Table size={['md','lg']} variant='simple'>
						<Tbody>
							{works.map((item) => {
								return(
									<><Tr key={item.id} >
										<Td  fontFamily={'heading'} fontWeight={'600'} color={'#fff'} fontSize={['18px','24px']}>{item.company}</Td>
										<Td isNumeric fontFamily={'heading'} fontSize={['18px','24px']} fontWeight={600}  color={'#93979D'}>{item.year}</Td>
									</Tr>
									<Spacer h={'56px'}/>
									</>
								);})};
						</Tbody>
					</Table>
				</TableContainer>
			</Flex>
		</Box>
	);
};