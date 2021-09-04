import styled from 'styled-components';

interface TextProps {
  light?: boolean;
}

export const Container = styled.header`
  max-width: calc(100vw - 140px);
  height: 55px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.palette.grey[200]};
  padding: 0px 30px 0px 110px;
  position: relative;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.14);

  @media (max-width: 768px) {
    background-color: ${({ theme }) => theme.palette.primary.main};
    max-width: calc(100vw - 50px);
    padding-left: 20px;
  }

  @media (max-width: 450px) {
    max-width: calc(100vw - 32px);
    padding: 0px 16px;
  }
`;

export const RespContent = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Text = styled.h4<TextProps>`
  font-weight: ${props => (props.light ? 300 : 'bolder')};
  font-size: 18px;
  margin-left: ${props => (props.light ? 5 : 0)}px;
  text-align: right;

  @media (max-width: 768px) {
    color: #fff;
  }
`;

export const Name = styled.span`
  font-size: 14px;
  color: #000;
  font-weight: bold;
  text-align: right;

  @media (max-width: 768px) {
    color: #fff;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #fff;
  margin-left: 10px;
`;

export const LogoutButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  transition: 180ms ease-in-out;
  cursor: pointer;
  margin-left: 30px;
  border-radius: 50%;

  &:hover {
    filter: brightness(0.4);
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
  }

  > svg {
    width: 30px;
    color: ${({ theme }) => theme.palette.secondary.main};
  }

  @media (max-width: 450px) {
    margin-left: 10px;
  }
`;

export const MenuButton = styled.button`
  width: 48px;
  height: 48px;
  display: none;
  justify-content: center;
  align-items: center;
  background: none;
  cursor: pointer;

  > svg {
    color: #fff;
    font-size: 34px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
