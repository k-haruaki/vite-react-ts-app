import { useState, useEffect } from 'react';
import userData from './data.json';

export type User = typeof userData;

// Omitを利用してUser型からageを除外
export type UserWithoutAge = Omit<User, 'age'>;

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

const User = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div>
      <h2>ユーザー一覧</h2>
      <div>
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </div>
  );
};

export default User;
