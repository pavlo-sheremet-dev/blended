import { IoLogoReact } from 'react-icons/io5';
import { NavBar, HeaderWrapper, NavText } from './Header.styled';

import { useTheme } from '@emotion/react';
import { Container } from '../Container/Container.styled';

export const Header = () => {
  const theme = useTheme();

  return (
    <>
      <header>
        <div></div>
      </header>

      <NavBar>
        <Container>
          <HeaderWrapper>
            <IoLogoReact size="40px" color={theme.colors.accent} />

            <NavText>Lesson 2</NavText>
          </HeaderWrapper>
        </Container>
      </NavBar>
    </>
  );
};
