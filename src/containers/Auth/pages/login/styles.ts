import styled from 'styled-components';

export const LoadBtnContainer = styled.div`
  position: absolute;
  right: 9px;
  top: 9px;
  bottom: 9px;
`;

export const ForgotPassword = styled.button`
  margin-top: 20px;
  background: transparent;
  padding: 16px;
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: bold;
  font-size: 14px;
  align-self: flex-end;
`;
