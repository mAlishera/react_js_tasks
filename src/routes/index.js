import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';

import { postsPath } from 'helpers/routes/index';

import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';


export default [
  {
    exact: true,
    path: '/',
    component: PostsContainer,
    prepareData: (store) => {
      store.dispatch(fetchPosts());
    }
  },
  {
    path: postsPath(),
    component: PostContainer,
    prepareData: (store, query, params) => {
      store.dispatch(fetchPost(params.id));
    }
  },
];
