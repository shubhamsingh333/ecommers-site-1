import { Grid } from '@material-ui/core';
import React from 'react';
import { useCookies } from 'react-cookie';
const LogOut = () => {
    const [cookies, setCookies] = useCookies();
    const [mydata, setMyData] = useCookies();
    const deleteLogin = () => {
        alert('sure')
        let loginTemp = cookies.login;
        setCookies('login', false)
    }
    const ShowMyData = () => {
        let tempData = cookies.userdata;
        setMyData(tempData)
    }
  
    return (
        <Grid style={{
            backgroundImage: "url(/images/hero-banner.jpg)",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            color: 'white',
            padding: '200px 50px 200px 350px'
        }}> <h1 className={'data'}>Name :- {mydata.userdata.name}</h1> <br />
            <h1 className={'data'}>Email id :- {mydata.userdata.email}</h1> <br />
            <h1 className={'data'}>Password :- {mydata.userdata.password}</h1> <br />
            <Grid style={{ display: 'flex', textAlign: 'center' }}>
                <h2 style={{ color: 'CaptionText' }}>Show me my login details  </h2>
                <button style={{ padding: '10px 11px 12px 13px', borderRadius: '12px',marginRight:'12px' }} onClick={() => ShowMyData()}> Show</button>
              
            </Grid>
            <br />
            <Grid style={{ display: 'flex', textAlign: 'center' }}>
                <h2 style={{ color: 'CaptionText' }}> click me! to logout  </h2>
                <button className={'logoutBg'} onClick={() => deleteLogin()}> click me! to logout</button>
            </Grid>
        </Grid>
    )
}

export default LogOut
