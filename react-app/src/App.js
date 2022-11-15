import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import ProductDetails from './components/ProductDetails';
import ProductsBrower from './components/ProductsBrowser';
import { authenticate } from './store/session';
import CreatePreoduct from './components/CreateProduct';
import ProductsBySearch from './components/ProductsBySearch'

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <ProductsBrower/>
        </Route>
        <Route path='/search/:keyword'>
            <ProductsBySearch />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/users' exact={true} >
          <UsersList/>
        </Route>
        <Route path='/users/:userId' exact={true} >
          <User />
        </Route>
        <Route path='/products/:productId' exact={true} >
          <ProductDetails />
        </Route>
        <Route path='/new-product' exact={true} >
          <CreatePreoduct />
        </Route>
        <Route path='/' exact={true} >
          <h1>My Home Page</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
