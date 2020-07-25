import styled from 'styled-components';
import { images } from '../../assets';

export const RegisterWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	background-image: url(${images.background});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center top;
	padding: 36px 20%;
	@media (max-width: 980px) {
		padding: 36px;
	}
	@media (max-width: 980px) {
		padding: 0;
	}

	.register-wrapper {
		width: 100%;
		padding: 36px;
		background-color: white;
		box-shadow: rgba(0,0,0,0.2) 1px 1px 5px 1px;
		display: flex;
		justify-content: center;
		@media (max-width: 768px) {
			height: 100%;
		}

		.form-wrapper {
			width: 50%;
			@media (max-width: 980px) {
				width: 75%;
			}

			h1 {
				text-align: center;
				margin-bottom: 60px;
				color: ${({ theme }) => theme.colors.primary};
			}

			.form-input {
				margin-bottom: 24px;
			}

			.register-btn {
				font-size: 18px;
				margin-top: 60px;
			}
		}
	}
`;