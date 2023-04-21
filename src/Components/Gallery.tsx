import { Box, Grid, GridItem, Image } from '@chakra-ui/react';
import React from 'react';
import Garden from '../Assets/Images/Garden.png';
import Beach from '../Assets/Images/Beach.png';
import Sunset from '../Assets/Images/Sunset.png';
import SpaceModel from '../Assets/Images/Space-model.png';

export const Gallery = () => {
	return(
		<Box
		>
			<Grid
				// h='400px'
				templateRows='repeat(2, 1fr)'
				templateColumns={['repeat(1, 1fr)','repeat(5, 1fr)']}
				gap={3}
			>
				<GridItem rowSpan={[1,2]} colSpan={[1,2]}>
					<Image objectFit={'cover'} src={Garden} h={'auto'} />
				</GridItem>
				<GridItem colSpan={1}  >
					<Image objectFit={'cover'} src={SpaceModel} h={'100%'} />
				</GridItem>
				<GridItem colSpan={[1,2]}  >
					<Image objectFit={'fill'} src={Sunset} h={'100%'} w={'100%'} />
				</GridItem>
				<GridItem colSpan={[1,3]}>
					<Image objectFit={'cover'} src={Beach} h={['100%','69%']}  w={'100%'}   />
				</GridItem>
			</Grid>
		</Box>
	);
};