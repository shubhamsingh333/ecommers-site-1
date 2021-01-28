import { Grid } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
const YourOrders = () => {
    return (
        <Grid>
        <Grid>
            <h2 style={{paddingTop:'100px',paddingLeft:'450px',paddingBottom:'20px'}}> you have not  any orders</h2>
        </Grid>
        <Grid className={'foterGrid'}>
            <NavLink to="/paymentOptions" activeClassName="extra--Active" className="extra">Payment options</NavLink>
            <NavLink exact to="/addressDetails" activeClassName="extra--Active" className="extra">Your Addresses</NavLink>
            <NavLink to="/yourorders" activeClassName="extra--Active" className="extra">Your Orders</NavLink>
            <NavLink exact to="/profile" activeClassName="extra--Active" className="extra">Your Account</NavLink>
</Grid>
</Grid >
    )
}
export default YourOrders
