import React from 'react';
import PostList from '../components/PostList';
import Card from '../components/Card';

const PostsPage = () => {
  return (
    <Card title="Posts from API">
      <PostList />
    </Card>
  );
};

export default PostsPage;