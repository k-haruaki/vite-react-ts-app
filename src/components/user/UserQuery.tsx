import { useQuery } from 'react-query';
import { User } from './User';

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

const UserQuery = () => {
  const { data, isLoading, isError, error } = useQuery<User[], Error>(
    'users',
    fetchUsers,
    {
      // windowを表示した時にrefetchするかどうか（デフォルトはtrue）
      // 例えば、タブなどを変更した場合などにrefetchされたりする
      refetchOnWindowFocus: false,
    },
  );
  console.log(data);

  return (
    <div>
      <h2>ユーザー一覧</h2>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          {isError ? (
            <span>Error: {error.message}</span>
          ) : (
            <div>{data?.map((d) => <div key={d.id}>{d.name}</div>)}</div>
          )}
        </>
      )}
    </div>
  );
};

export default UserQuery;
