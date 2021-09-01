import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
	color:#071928;
	font-family: 'Open Sans Condensed';
	padding: 0px 0px;
	@media screen and (max-width:800px){
		padding:10px;
	}
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

`;

export const Container = styled.div``;
