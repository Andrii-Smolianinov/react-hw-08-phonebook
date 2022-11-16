import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import { LoginFormStyled } from 'components/LoginForm/LoginFormStyled';
import { SlLogin } from 'react-icons/sl';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input type="email" name="email" placeholder="Enter user email" />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          placeholder="Enter user password"
        />
      </label>
      <button type="submit">Log In <SlLogin /></button>
    </LoginFormStyled>
  );
};
