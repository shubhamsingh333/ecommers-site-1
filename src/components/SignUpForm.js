import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { useCookies } from 'react-cookie';

const SignUpForm = () => {
    const [enterData , setEnterData] = useState({ name: '', password: '', email: ''});
    const [agree , setAgree] = useState({hasAgreed:false})
    const [cookies , setCookies] = useCookies();


    const onChangeData = (filed, value) => {
        setEnterData(name => ({ ...enterData, [filed]: value }));
    }
    const onChangeAgree = () => {
        setAgree({
            hasAgreed:true
        })
    }
  const SaveData =() => {
      alert('sure')
      setCookies('userdata',JSON.stringify(enterData))
        reset();
    }

    const reset = () => {
        setEnterData({
            name: '',
            password: '',
            email: ''
        });
        setAgree({
            agree : false
        })
    }

    const onSubmiteF = (event) => {
        event.preventDefault()
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        <Grid className={'Aside'}>

            <Grid>

                <form className="FormFields" onSubmit={onSubmiteF}>
                    <Grid className="PageSwitcher">
                        <NavLink to="/signin" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                        <NavLink exact to="/signup" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                    </Grid>
                    <Grid className="FormField">
                        <label className="FormField__Label" htmlFor="name">Full Name</label>
                        <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={enterData.name} onChange={e => onChangeData('name', e.target.value)} />
                    </Grid>
                    <Grid className="FormField2">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={enterData.password} onChange={e => onChangeData('password', e.target.value)} />
                    </Grid>
                    <Grid className="FormField2">
                        <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={enterData.email} onChange={e => onChangeData('email', e.target.value)} />
                    </Grid>

                    <Grid className="FormField2">
                        <label className="FormField__CheckboxLabel">
                            <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={agree.hasAgreed} onChange={e => onChangeAgree('hasAgreed', e.target.value)} />
                                I agree all statements in
                            <a href="/"  className="FormField__TermsLink">terms of service</a>
                        </label>
                    </Grid>

                    <Grid className="FormField3">
                        <button className="FormField__Button mr-20" onClick={() => SaveData()}>Sign Up</button> <Link to="/signin" className="FormField__Link">I'm already member</Link>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}

export default SignUpForm
