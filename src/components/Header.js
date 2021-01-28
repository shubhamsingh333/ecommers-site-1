import React from 'react';
import { Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import MenuBar from '../components/MenuBar';

const Header = () => {

    return (
        <Grid style={{ position: 'fixed', top: '0px', zIndex: 3, width: '100%' }}>
            <Grid>
                <Grid className={'header'}>
                    <img src={process.env.PUBLIC_URL + '/images/Honey_Logo.png'} alt={'hello'} className={'honey'} />
                    <ul className={'headerUL'}  >
                        <MenuBar />
                    </ul>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default withRouter(Header)
