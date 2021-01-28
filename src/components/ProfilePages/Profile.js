import { Grid } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";


const Profile = () => {
    let history = useHistory();

    const yourOrders = () => {
        history.push("/yourorders");
    }
    const loginSecurity = () => {
        history.push("/loginDetails");
    }
    const yourAddresses = () => {
        history.push("/addressDetails");
    }
    const paymentOptions = () => {
        history.push("/paymentOptions");
    }
    return (
        <Grid>
            <Grid className={'styling'}>
                <h1>Your Account</h1>
                <Grid className={'box'} >
                    <Grid className={'column'} onClick={() => yourOrders()}>
                        <Grid >
                            <img src={'/images/amazon.png'} alt={'your orders'} className={'span'} />
                        </Grid>
                        <Grid className={'font-size'}>
                            <h2 style={{ fontWeight: '100' }}>Your Orders</h2>
                            <span>Track, return, or buy things again</span>
                        </Grid>
                    </Grid>
                    <Grid className={'column'} onClick={() => loginSecurity()}>
                        <Grid >
                            <img src={'/images/amazon2.png'} alt={'login'} className={'span'} />
                        </Grid>
                        <Grid className={'font-size'}>
                            <h2 style={{ fontWeight: '100' }}> Login & security</h2>
                            <span>Edit login, name, and mobile number</span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid style={{ display: 'flex' }}>
                    <Grid className={'column'} onClick={() => yourAddresses()}>
                        <Grid >
                            <img src={'/images/amazon3.png'} alt={'login'} className={'span'} />
                        </Grid>
                        <Grid className={'font-size'}>
                            <h2 style={{ fontWeight: '100' }}> Your Addresses</h2>
                            <span>Edit addresses for orders and gifts</span>
                        </Grid>
                    </Grid>
                    <Grid className={'column'} onClick={() => paymentOptions()}>
                        <Grid>
                            <img src={'/images/amazon4.png'} alt={'login'} className={'span'} />
                        </Grid>
                        <Grid className={'font-size'}>
                            <h2 style={{ fontWeight: '100' }}>Payment options</h2>
                            <span>Edit or add payment methods</span>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={'foterGrid'}>
            <NavLink to="/paymentOptions" activeClassName="extra--Active" className="extra">Payment options</NavLink>
            <NavLink exact to="/addressDetails" activeClassName="extra--Active" className="extra">Your Addresses</NavLink>
            <NavLink to="/yourorders" activeClassName="extra--Active" className="extra">Your Orders</NavLink>
            <NavLink exact to="/profile" activeClassName="extra--Active" className="extra">Your Account</NavLink>
        </Grid >
        </Grid>
    )
}
export default Profile