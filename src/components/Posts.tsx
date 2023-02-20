import React, { useEffect, useState } from 'react';
import { User } from './User';

interface Post {
  userId: User['id'];
  id: number;
  title: string;
  body: string;
}

function Posts({ userId }: Pick<Post, 'userId'>) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((posts) => {
        setTimeout(() => {
          setPosts(posts);
          setLoading(false);
        }, 3000);
      });
  });

  if (loading) return <p>글목록 로딩중...</p>;
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {post.id}. {post.title}
        </li>
      ))}
    </ul>
  );
}

export default Posts;
