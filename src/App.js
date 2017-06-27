import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom';
import BlogPage from 'components/containers/BlogPage';
import MainLayout from 'components/layouts/MainLayout';
import Post from 'components/containers/Post';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Route exact path="/" render={({match, location, history}) => (
        <BlogPage match={match}
          location={location}
          history={history}/>
      ) }/>
      <Route exact path="/posts/:id" render={({match, location, history}) => (
        <Post id={match.params.id}
          location={location}
          history={history}/>
      )} />
    </MainLayout>
  </BrowserRouter>
);

export default App;
