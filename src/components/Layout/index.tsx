import React, { ReactNode } from 'react';
import { Container, Content } from './styles';

interface LayoutProps {
  children?: ReactNode;
  contentMaxWidth?: string;
  alignItems?: string;
  flexDirection?: string;
  justifyContent?: string;
  width?: string;
  height?: string;
  paddingLeft?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children = null,
  contentMaxWidth = '100%',
  alignItems = 'normal',
  flexDirection = 'column',
  justifyContent = 'center',
  paddingLeft = true,
  width = 'calc(100vw - 90px)',
  height = 'calc(100vh - 70px)',
}) => {
  return (
    <Container width={width} height={height} paddingLeft={paddingLeft}>
      <Content
        alignItems={alignItems}
        contentMaxWidth={contentMaxWidth}
        flexDirection={flexDirection}
        justifyContent={justifyContent}
      >
        {children}
      </Content>
    </Container>
  );
};

export default Layout;
