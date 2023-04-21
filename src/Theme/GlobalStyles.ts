import { css } from '@emotion/react';

export const GlobalStyles = css`
    @font-face {
        font-family: 'Clash Display';
        font-style: normal;
        src: url('https://fonts.cdnfonts.com/css/clash-display?styles=106288,106285,106286,106287,106289,106284');
    }
    @font-face {
        font-family: 'Clash Grotesk';
        font-style: normal;
        font-weight: 200;
        src: url('/ClashGrotesk-light.otf');
    }    
    @font-face {
        font-family: 'Clash Grotesk';
        font-style: normal;
        font-weight: 500;
        src: url('/ClashGrotesk-Medium.otf');
    } 
    @font-face {
        font-family: 'Clash Grotesk';
        font-style: normal;
        font-weight: 400;
        src: url('/ClashGrotesk-Regular.otf');
    } 
    .chakra-button:hover p{
        padding-right: 10px ;
        transition: all .3s ease;
    }
`;