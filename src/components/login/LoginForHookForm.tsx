import { SubmitHandler, useForm } from 'react-hook-form';

type FormData = {
  email: string;
  password: string;
};

const LoginForHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ criteriaMode: 'all' });

  console.log(errors.email);

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <div className="App">
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            autoComplete="email"
            {...register('email', {
              required: { value: true, message: '入力が必須の項目です' },
            })}
          />
          {errors.email?.message && <div>{errors.email.message}</div>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            {...register('password', {
              required: {
                value: true,
                message: '入力が必須の項目です。',
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: 'アルファベットのみ入力してください。',
              },
              minLength: {
                value: 8,
                message: '8文字以上入力してください。',
              },
            })}
            type="password"
            autoComplete="password"
          />
          {errors.password?.types?.required && (
            <div>{errors.password.types.required}</div>
          )}
          {errors.password?.types?.pattern && (
            <div>{errors.password.types.pattern}</div>
          )}
          {errors.password?.types?.minLength && (
            <div>8文字以上入力してください。</div>
          )}
        </div>
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};

export default LoginForHookForm;
