import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from 'pages/home/home';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import MainLoader from 'components/MainLoader/MainLoader';

const Contacts = lazy(() => import('pages/contacts/Contacts'));
const Register = lazy(() => import('pages/register/Register'));
const Login = lazy(() => import('pages/login/Login'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<MainLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
