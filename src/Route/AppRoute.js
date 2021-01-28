import React from 'react';
import { Grid } from '@material-ui/core';
import { Route, Switch } from "react-router-dom";
import Product from '../components/Product.js';
import HomePage from '../components/HomePage.js';
import NotFoundPage from '../components/NotFoundPage.js';
import Cart from '../components/Cart';
import Support from './../components/Support';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import ProductDetails from '../components/ProductDetails.js';
import LogOut from '../components/LogOut';
import Thanks from '../components/Thanks.js';
import WishList from '../components/WishList.js';
import Profile from '../components/ProfilePages/Profile.js';
import YourOrders from '../components/ProfilePages/YourOrders.js';
import LoginSecurity from '../components/ProfilePages/LoginSecurity.js';
import YourAddresses from '../components/ProfilePages/YourAddresses.js';
import PaymentOptions from '../components/ProfilePages/PaymentOptions.js';
import OfficeAddress from '../components/ProfilePages/OfficeAddress.js';
const AppRoute = () => {

    return (
        <Grid style={{ marginTop: 100 }}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/product/:slug" component={Product} />
                <Route exact path="/productdetail/:id" component={ProductDetails} />
                <Route path="/thanks" component={Thanks} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/support" component={Support} />
                <Route exact path="/signin" component={SignInForm} />
                <Route exact path="/signup" component={SignUpForm} />
                <Route path="/logout" component={LogOut} />
                <Route path="/wishlist" component={WishList} />
                <Route path="/yourorders" component={YourOrders} />
                <Route path="/loginDetails" component={LoginSecurity} />
                <Route path="/addressDetails" component={YourAddresses} />
                <Route path="/officeaddressDetails" component={OfficeAddress} />
                <Route path="/paymentOptions" component={PaymentOptions} />
                <Route path="/profile" component={Profile} />
                <Route path="" component={NotFoundPage} />
               
            </Switch>
        </Grid>

    )
}

export default AppRoute

