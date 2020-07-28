import styled from 'styled-components';
import { images } from '../../assets';

export const RegisterWrapper = styled.div`
	margin-top: 0!important;
	height: 100%;
	background-image: url(${images.background});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center top;
	display: flex;
	justify-content: center;
	overflow-y: scroll;
	color: white;
	padding: 36px;
	@media (max-width: 600px) {
		padding: 0;
	}

	&::-webkit-scrollbar { 
		width: 4px 
	}
	&::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.colors.primary};
		outline: 3px solid slategrey;
		/* border-radius: 5px; */
	}
	&::-webkit-scrollbar-track {
		/* background-color: white; */
	}

	.wrapper {
		width: 600px;

		h1 {
			text-align: center;
			color: ${({theme}) => theme.colors.primary};
			margin-bottom: 80px;
			font-family: 'Ubuntu', sans-serif;
			font-size: 42px;
			@media (max-width: 600px) {
				font-size: 34px;
			}

		}

		form {
			width: 100%;
			background-color: white;
			padding: 50px;
			box-shadow: rgba(0,0,0,0.2) 1px 1px 5px 1px;
			margin-bottom: 36px;

			input {
				width: 100%;
				margin-bottom: 24px;
			}
		}
	}
`;