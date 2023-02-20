import React, { useEffect, useState } from 'react';
import Posts from './Posts';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface Props {
  userId: User['id'];
}

function User({ userId }: Props) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((user) => {
        setTimeout(() => {
          setUser(user);
          setLoading(false);
        }, 3000);
      });
  });

  if (loading) return <p>사용자 정보 로딩중...</p>;
  return (
    <div>
      <p>{user?.name} 님이 작성한 글</p>
      <Posts userId={userId} />
    </div>
  );
}

export default User;
