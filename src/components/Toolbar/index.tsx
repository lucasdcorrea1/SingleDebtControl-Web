import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToAppRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

import {
  Container,
  LogoutButton,
  MenuButton,
  Text,
  Row,
} from './styles';

interface ToolbarProps {
  handleDrawer: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ handleDrawer }) => {
  const history = useHistory();

  const handleLogout = (): void => {
    history.push('/');
  };

  return (
    <Container>
      <MenuButton onClick={handleDrawer}>
        <MenuRoundedIcon />
      </MenuButton>
        <Row>
          <Text>Debit Control - </Text>
          <Text light>{document.title.toUpperCase()}</Text>
          <LogoutButton onClick={() => handleLogout()}>
            <ExitToAppIcon />
          </LogoutButton>
        </Row>
    </Container>
  );
};

export default Toolbar;
