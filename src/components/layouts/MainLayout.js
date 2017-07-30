import React from 'react';
import PropTypes from 'prop-types';
import {Segment, Header, Container} from 'semantic-ui-react';
import Link from '../elements/Link';

const MainLayout = ({children}) => (
  <Container>
    <Logo />
    {children}
    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

const Logo = () => (
  <Segment>
    <Header>
      <Link to='/'>My blog</Link>
    </Header>
  </Segment>
);

const Footer = () => (
  <Segment>
    Powered by TN React Course
  </Segment>
);

export default MainLayout;
