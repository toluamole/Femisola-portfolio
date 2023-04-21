import { Global } from '@emotion/react';
import React from 'react';
export const Fonts = () => (
	<Global
		styles={`
            @font-face {
            font-family: 'Clash Display';
            font-style: normal;
            src: url('https://fonts.cdnfonts.com/css/clash-display?styles=106288,106285,106286,106287,106289,106284');
            }
        `}
	/>
);