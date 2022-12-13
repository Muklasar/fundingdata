import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './pages/Home';
import UserDashboard from './pages/UserDashboard';

const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));

const App = () => {
  return (
    <div>
      <Routes>
      <Route path='' element={
          <Suspense fallback={<Nav/>}>
            <Home />
          </Suspense>} />
      <Route path='/user-dashboard' element={
          <Suspense fallback={<Nav/>}>
            <UserDashboard />
          </Suspense>} />
        <Route path='/sign-in' element={
          <Suspense fallback={<Nav/>}>
            <Login />
          </Suspense>
        } />
        <Route path='/sign-up' element={
          <Suspense fallback={<Nav/>}>
            <Register />
          </Suspense>} />
      </Routes>
    </div>
  )
}

export default App;