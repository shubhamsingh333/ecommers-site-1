import React from 'react';
import { Grid } from '@material-ui/core';


const Fotter = () => {
    return (
        <Grid className={''} style={{
            backgroundImage: 'url(/images/logooo.webp)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}>
            <Grid style={{ display: 'flex' }}>
                <Grid className={'fotter'}>
                    <h1><a href="http://2minfotech.com/">2mInfotech</a></h1>
                    <p>302 Royal Heigths, Plot No . 33, Sugam Path Mahatma Ghandhi Nagar, Church Road, Dcm Ajmer Road</p>

                </Grid>
                <Grid style={{ color: 'white' }} className={'fotter footerContact'}>
                    <h1>Contact us</h1>

                    <p>  hanif@2mInfotech.com </p>
                    <p>+ 9549234786 </p>
                    <p>  + 8003937490 </p>

                </Grid>
            </Grid>
            <h3 style={{ color: 'white', textAlign: 'center' }} > &copy; {new Date().getFullYear()} Copyright: <a href="http://2minfotech.com/" style={{ color: 'blue' }}> 2minfotech.com </a></h3>
        </Grid>
    )
}

export default Fotter