import styled from 'styled-components';
import { Paper } from '@material-ui/core';

export const Card = styled(Paper)`
  width: 98%;
  max-width: 480px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.span`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 16px;
`;

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  background-size: cover;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
`;
