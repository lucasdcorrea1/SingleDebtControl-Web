import React from 'react';
import { useTheme, Theme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Card, Container, Description, Title } from './styles';

const Expired: React.FC = () => {
  const { palette } = useTheme() as Theme;
  const history = useHistory();

  const handleLogout = (): void => {
    history.push('/');
  };

  return (
    <Container>
      <Card>
        <Title>Sua sessão expirou!!</Title>
        <Description>
          Por motivos de segurança, reciclamos a sessão de usuário após algum
          período. Clique no botão abaixo para realizar o login novamente.
        </Description>
      </Card>
    </Container>
  );
};

export default Expired;
