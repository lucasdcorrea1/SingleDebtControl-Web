import styled from 'styled-components';

interface ContentProps {
  contentMaxWidth?: string;
  alignItems?: string;
  flexDirection?: string;
  justifyContent?: string;
  width?: string;
  height?: string;
}

interface ContainerProps {
  width?: string;
  height?: string;
  paddingLeft?: boolean;
}

export const Container = styled.section<ContainerProps>`
  max-width: ${props => props.width};
  min-height: ${props => props.height};
  padding-left: ${props => (props.paddingLeft ? '90px' : 0)};
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: auto;

  @media (max-width: 768px) {
    padding-left: 0px;
    max-width: 100vw;
  }
`;

export const Content = styled.div<ContentProps>`
  width: 100%;
  max-width: ${props =>
    props.contentMaxWidth ? `${props.contentMaxWidth}` : '100%'};
  height: 100%;
  padding: 32px;
  justify-content: ${props => props.justifyContent};
  display: flex;
  align-items: ${props => props.alignItems};
  flex-direction: ${props => props.flexDirection};

  @media (max-width: 840px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 425px) {
    padding: 16px;
  }
`;
