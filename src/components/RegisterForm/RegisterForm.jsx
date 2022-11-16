
import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/authOperations';
import { RegisterFormStyled } from 'components/RegisterForm/RegisterFormStyled'

export const RegisterForm = () => {
  const dispatch = useDispatch();

 
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      signup({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();    
  };

  return (    
    <RegisterFormStyled onSubmit={handleSubmit} autoComplete="off">
    <label>
      Username
      <input type="text" name="name" placeholder="Enter user name"  />
    </label>
    <label>
      Email
      <input type="email" name="email" placeholder="Enter user email" />
    </label>
    <label>
      Password
      <input type="password" name="password" placeholder="Enter user password" />
    </label>
    <button type="submit">Register</button>
  </RegisterFormStyled>
  );
};
