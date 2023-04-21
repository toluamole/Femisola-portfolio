import * as React from 'react';
import {
	ChakraProvider
} from '@chakra-ui/react';
import { MainRoute } from './Routes/MainRoutes';
import {theme} from './Theme/BaseTheme';
import { Global } from '@emotion/react';
import { GlobalStyles } from './Theme/GlobalStyles';

export const App = () => (
	<ChakraProvider theme={theme}>
		{/* <Fonts/> */}
		<Global styles={GlobalStyles}/>
		<MainRoute/>
	</ChakraProvider>
);
