import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
	color:#071928;
	font-family: 'Open Sans Condensed';
}

a {
	text-decoration: none;
	color:#071928;
}

* {
	box-sizing: border-box;
}

h1{
	font-weight:600;
}
@media screen and (max-width:700px){
	h1{
		margin-top:10px!important;
	}
}

`;

export const Container = styled.div``;
