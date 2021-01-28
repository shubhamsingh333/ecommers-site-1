import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import useLocalStorage from 'react-use-localstorage';
import { NavLink } from 'react-router-dom';

const LoginSecurity = () => {
    const [loginDetails, setLoginDetails] = useLocalStorage('login', '');
    const [name,setName] = useState({ namee:'', email:'', password:'', number:'' })
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    })
  
    const changeLoginData = (filed, value) => {
        let temp = name;
        temp[filed] = value;
        setName(temp)
        console.log('logindata', name)
    }
    const SaveLoginData = () => {
        alert('sure')
        let temp = name
        console.log('temp', temp)
        localStorage.setItem('login', JSON.stringify(temp))
    }

    return (
        <Grid className={'top_Grid_loginPage'}>
            <Grid className={'LoginPage'}>
                <h2 > Login & security</h2>
                <Grid>
                    <form>
                        <label >Name : </label>
                        <input type={'text'} onChange={e => changeLoginData('namee', e.target.value,)}/> <br />
                        <label >Email : </label>
                        <input type={'text'} type={"password"} id={"password"} onChange={e => changeLoginData('email', e.target.value,)}/> <br />
                        <label htmlFor={"password"}>Password : </label>
                        <input type={'text'} onChange={e => changeLoginData('password', e.target.value,)}/> <br />
                        <label >Mobile Number : </label>
                        <input type={'text'} onChange={e => changeLoginData('number', e.target.value,)}/> <br /> <br />
                        <button onClick={() => SaveLoginData()}>Save</button>
                    </form>
                </Grid>
            </Grid>
            <Grid className={'foterGrid'}>
            <NavLink to="/paymentOptions" activeClassName="extra--Active" className="extra">Payment options</NavLink>
            <NavLink exact to="/addressDetails" activeClassName="extra--Active" className="extra">Your Addresses</NavLink>
            <NavLink to="/yourorders" activeClassName="extra--Active" className="extra">Your Orders</NavLink>
            <NavLink exact to="/profile" activeClassName="extra--Active" className="extra">Your Account</NavLink>
        </Grid>
        </Grid>
    )
}
export default LoginSecurity
