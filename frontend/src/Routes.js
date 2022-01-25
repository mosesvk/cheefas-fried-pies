import React from 'react';
import {Routes, Route} from 'react-router-dom'

import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';



export default (
  <Routes>
    <Route path='/shipping' element={<ShippingScreen />} />
    <Route path='/login' element={<LoginScreen />} />
    <Route path='/register' element={<RegisterScreen />} />
    <Route path='/profile' element={<ProfileScreen />} />
    <Route path='/product/:id' element={<ProductScreen />} />
    <Route path='cart' element={<CartScreen />} >
      <Route path=':id' element={<CartScreen />} />
    </Route>
    <Route exact path='/' element={<HomeScreen />} />
  </Routes>
)