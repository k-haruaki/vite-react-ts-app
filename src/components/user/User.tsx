import { useState, useEffect } from 'react';
import userData from './data.json';

export type User = typeof userData;

// Omitを利用してUser型からnameを除外
export type UserWithoutAge = Omit<User, 'name'>;

// 通常のOmitは第2引数に存在しない値を渡してもエラーにならない
// タイポなどを防ぐため、Omitのラッパーを作成することがある。実装例
export type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type myOmitUserWithoutAge = MyOmit<User, 'name'>;

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
