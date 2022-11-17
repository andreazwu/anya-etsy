import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginFormModal/LoginForm';
import SignUpForm from './components/auth/SignupFormModal/SignUpForm';
import NavBar from './components/Navigation/NavBar.js';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import ProductDetails from './components/ProductDetails';
import ProductsBrowser from './components/ProductsBrowser';
import { authenticate } from './store/session';
import Cart from './components/Cart';
import CreatePreoduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';
import LoadUserReviews from './components/Reviews/LoadUserReviews';
import CreateReviewForm from './components/Reviews/CreateReviewForm';
import EditReviewForm from './components/Reviews/EditReviewForm';
import StoreManager from './components/StoreManager';
import ProductsBySearch from './components/ProductsBySearch'
import PageNotFound from './components/PageNotFound'

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
          <ProductsBrowser/>
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
        <Route path='/products/:productId/new-review' exact={true} >
          <CreateReviewForm />
        </Route>
        <Route path='/reviews/:reviewId/edit-review' exact={true} >
          <EditReviewForm />
        </Route>
        <Route path='/products/:productId' exact={true} >
          <ProductDetails />
        </Route>
        <Route path='/new-product' exact={true} >
          <CreatePreoduct />
        </Route>
        <Route path='/my-reviews' exact={true} >
          <LoadUserReviews />
        </Route>
        <Route path='/store-manager' exact={true} >
          <StoreManager />
        </Route>
        <Route path='/cart' exact={true}>
            <Cart />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
