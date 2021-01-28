import { Grid } from '@material-ui/core'
import React, { useEffect,useState} from 'react';
import { NavLink } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

const YourAddresses = () => {
    const[homedetails, setHomeDetails] = useLocalStorage('HomeAddress', '');
    const [addressDetails, setAddressDetails] = useState({ house: '', streetName: '', city: '', state: '', country: '', pin: '', number: '' })
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    })
    const changeCompanyData = (filed, value) => {
        let temp = addressDetails;
        temp[filed] = value;
        setAddressDetails(temp)
        console.log('data', addressDetails)
    }

    const SaveData = () => {
        alert('sure')
        let temp = addressDetails
        console.log('temp', temp)
        localStorage.setItem('HomeAddress', JSON.stringify(temp))
    }
    return (
        <Grid className={'top_Grid_loginPage'}>
            <Grid className={'LoginPage'}>
                <h2 >Your Addresses</h2>
                <Grid>
                    <NavLink to="/addressDetails" activeClassName="PageSwitcher__Address--Active" className="PageSwitcher__Address">Communication Address</NavLink>
                    <NavLink exact to="officeaddressDetails" activeClassName="PageSwitcher__Address--Active" className="PageSwitcher__Address">-: Office Address</NavLink>
                    <form >
                        <label >House/Flat no. : </label>
                        <input type={'text'} onChange={e => changeCompanyData('house', e.target.value,)}/> <br />
                        <label >Street Name : </label>
                        <input type={'text'} onChange={e => changeCompanyData('streetName', e.target.value,)}/> <br />
                        <label >City / Town : </label>
                        <input type={'text'} onChange={e => changeCompanyData('city', e.target.value,)}/> <br />
                        <label >State Name : </label>
                        <input type={'text'} onChange={e => changeCompanyData('state', e.target.value,)}/> <br />
                        <label >Country Name : </label>
                        <input type={'text'} onChange={e => changeCompanyData('country', e.target.value,)}/> <br />
                        <label >Pin Code : </label>
                        <input type={'text'} onChange={e => changeCompanyData('pin', e.target.value,)}/> <br />
                        <label >Alternate number : </label>
                        <input type={'text'} onChange={e => changeCompanyData('number', e.target.value,)}/> <br /> <br />
                        <button onClick={() => SaveData()}>Save</button>
                    </form>
                </Grid>
            </Grid>
            <Grid className={'foterGrid'}>
            <NavLink to="/paymentOptions" activeClassName="PageSwitcher__Address--Active" className="PageSwitcher__Address">Payment options</NavLink>
            <NavLink exact to="/addressDetails" activeClassName="PageSwitcher__Address--Active" className="PageSwitcher__Address">Your Addresses</NavLink>
            <NavLink to="/yourorders" activeClassName="PageSwitcher__Address--Active" className="PageSwitcher__Address">Your Orders</NavLink>
            <NavLink exact to="/profile" activeClassName="PageSwitcher__Address--Active" className="PageSwitcher__Address">Your Account</NavLink>
        </Grid>
        </Grid>
    )
}

export default YourAddresses
