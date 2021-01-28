import { Grid } from '@material-ui/core';
import React, { useEffect}from 'react';
import { useCookies } from 'react-cookie';
import useLocalStorage from 'react-use-localstorage';
const Thanks = () => {
    const [cookies, setCookies] = useCookies("userdata");
   
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        }); 

    })
    console.log(localStorage.HomeAddress)
    return (
        <Grid className={'thankPage'}>
            <h1>Thanks dear <span className={'nameUpperCase'}> {cookies.userdata.name} </span> for shopping with us</h1>
            <h3>your order has submited </h3>
            <h3> Your order number <span className={'nameUpperCase'}> {Math.floor(Math.random() * 987654321234) + 1} </span></h3>
            <p>your shipping address {localStorage.HomeAddress}</p>
            <p></p>
        </Grid>
    )
}
export default Thanks
