import styled from 'styled-components';

export const ButtonWrapper = styled.div`
	width: 100%;

	button {
	width: 100%;
	height: 42px;
	border: none;
	background-color: ${({ theme }) => theme.colors.primary};
	border-radius: 5px;
	padding: 8px 12px;
	color: white;
	}
`;