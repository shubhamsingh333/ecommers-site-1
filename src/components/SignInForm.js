import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const SignInForm = () => {

    const [name, setName] = useState([{
        email: '',
        password: ''
    }])
    const [cookies, setCookies] = useCookies(["userdata"]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

   const readCookie = () => { 
        let cTemp = cookies.userdata;
        if( name.email === cTemp.email && name.password === cTemp.password)
        {
            setCookies('login',true)
            alert('welcome')

        }
        else    {
            alert('please check email & password and retry')
        }

    }

    const fetchData = () => {
        alert('sure')
      readCookie();
      reset();
    
    }

    const onChangeData = (filed, value) => {
        setName(name => ({ ...name, [filed]: value }));
    }
    const reset = () => {
        setName([{ email: '' },
        { password: '' },
        ])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Grid className={'Aside'}>
            <Grid className="PageSwitcher">
                <NavLink to="/signin" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/signup" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </Grid>
            <form onSubmit={handleSubmit} className="FormFields" >
                <Grid className="FormField6">
                    <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                    <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={name.email} onChange={e => onChangeData('email', e.target.value)} />
                </Grid>
                <Grid className="FormField2">
                    <label className="FormField__Label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={name.password} onChange={e => onChangeData('password', e.target.value)} />
                </Grid>
                <Grid className="FormField5">
                    <button className="FormField__Button mr-20" onClick={() => fetchData()}>Sign In</button> <Link to="/signup" className="FormField__Link">Create an account</Link>
                </Grid>
            </form>
        </Grid>
    )
}
export default SignInForm
