import { Grid } from '@material-ui/core'
import React, { useEffect,useState} from 'react';
import { NavLink } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

const PaymentOptions = () => {
    const [cardDetails, setCardDetails] = useState({cardNumber:'',nameOnCard:''  })
    const [paymentdetails, setPaymentDetails] = useLocalStorage('payment', '');
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    })
    const changePaymentData = (filed, value) => {
        let temp = cardDetails;
        temp[filed] = value;
        setCardDetails(temp)
        console.log('data', cardDetails)
    }

    const SaveData = () => {
        alert('sure')
        let temp = cardDetails
        console.log('temp', temp)
        localStorage.setItem('payment', JSON.stringify(temp))
    }
    return (
        <Grid className={'top_Grid_paymentpage'}>
            <Grid className={'Payment_Page'}>
                <h3>Credit or Debit Cards </h3>
                <Grid style={{ display: 'flex' }}>
                    <Grid style={{ padding: '5px' }}>
                        <label>Card Number</label><br />
                        <input onChange={e => changePaymentData('cardNumber', e.target.value,)}/>
                    </Grid>
                    <Grid style={{ padding: '5px' }}>
                        <label>Name on Card</label><br />
                        <input onChange={e => changePaymentData('nameOnCard', e.target.value,)}/>
                    </Grid>
                    <Grid style={{ padding: '5px' }}>
                        <label>expiration date</label><br />
                        <select placeholder="MM" style={{ margin: '5px' }}>
                            <option name={"01"} value={"01"}>01</option>
                            <option name={"02"} value={"02"}>02</option>
                            <option name={"03"} value={"03"}>03</option>
                            <option name={"04"} value={"04"}>04</option>
                            <option name={"05"} value={"05"}>05</option>
                            <option name={"06"} value={"06"}>06</option>
                            <option name={"07"} value={"07"}>07</option>
                            <option name={"08"} value={"08"}>08</option>
                            <option name={"09"} value={"09"}>09</option>
                            <option name={"10"} value={"10"}>10</option>
                            <option name={"11"} value={"11"}>11</option>
                            <option name={"12"} value={"12"}>12</option>
                        </select>
                        <select placeholder="YY" style={{ margin: '5px' }}>
                            <option name={"2021"} value={"2021"}>2021</option>
                            <option name={"2022"} value={"2022"}>2022</option>
                            <option name={"2023"} value={"2023"}>2023</option>
                            <option name={"2024"} value={"2024"}>2024</option>
                            <option name={"2025"} value={"2025"}>2025</option>
                            <option name={"2026"} value={"2026"}>2026</option>
                            <option name={"2027"} value={"2027"}>2027</option>
                        </select>
                            <button onClick={() => SaveData()}>Pay</button>
                    </Grid>
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
export default PaymentOptions
