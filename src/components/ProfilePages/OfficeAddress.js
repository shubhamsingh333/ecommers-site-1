import { Grid } from '@material-ui/core'
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

const OfficeAddress = () => {
    const [details, setDetails] = useLocalStorage('OfficeAddress', '');
    const [companyDetails, setCompanyDetails] = useState({ companyName: '', streetName: '', city: '', state: '', country: '', pin: '', number: '' })
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    })

    const changeCompanyData = (filed, value) => {
        let temp = companyDetails;
        temp[filed] = value;
        setCompanyDetails(temp)
        console.log('data', companyDetails)
    }

    const SaveData = () => {
        alert('sure')
        let temp = companyDetails
        console.log('temp', temp)
        localStorage.setItem('OfficeAddress', JSON.stringify(temp))
    }
    return (
        <Grid className={'top_Grid_loginPage'}>
            <Grid className={'LoginPage'}>
                <h2 >Your Addresses</h2>
                <Grid className={'form'}>
                    <NavLink to="/addressDetails" activeClassName="PageSwitcher__Address--Active" className="PageSwitcher__Address">Communication Address</NavLink>
                    <NavLink exact to="officeaddressDetails" activeClassName="PageSwitcher__Address--Active" className="PageSwitcher__Address">-: Office Address</NavLink>
                    <form >
                        <label >Company Name : </label>
                        <input type={'text'} onChange={e => changeCompanyData('companyName', e.target.value,)} /> <br />
                        <label >Company Street Name : </label>
                        <input type={'text'} onChange={e => changeCompanyData('streetName', e.target.value,)} /> <br />
                        <label >City / Town : </label>
                        <input type={'text'} onChange={e => changeCompanyData('city', e.target.value,)} /> <br />
                        <label >State Name : </label>
                        <input type={'text'} onChange={e => changeCompanyData('state', e.target.value,)} /> <br />
                        <label >Country Name : </label>
                        <input type={'text'} onChange={e => changeCompanyData('country', e.target.value,)} /> <br />
                        <label >Pin Code : </label>
                        <input type={'text'} onChange={e => changeCompanyData('pin', e.target.value,)} /> <br />
                        <label >Alternate number : </label>
                        <input type={'text'} onChange={e => changeCompanyData('number', e.target.value,)} /> <br /> <br />
                        <button onClick={() => SaveData()}>Save</button>
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

export default OfficeAddress
