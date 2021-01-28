import { Grid } from '@material-ui/core'
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, LoginMenu } from '../common/Data';
import { useCookies } from 'react-cookie';

const MenuBar = () => {
    const [cookies, setCookies] = useCookies();
    
    if ( cookies.login === "true") {
        
        return (
            <Grid style={{ display: 'flex' }}>
                {
                    (LoginMenu && LoginMenu.length > 0) && (
                        LoginMenu.map((item, index) => {
                            return <li key={index} > <Link to={item.path}>{item.title} </Link> </li>
                        })
                    )
                }
            </Grid>
        )
    }
    else {
    
        return (
            <Grid style={{ display: 'flex' }}>
                {
                    (Menu && Menu.length > 0) && (
                        Menu.map((item, index) => {
                            return <li key={index}> <Link to={item.path}>{item.title} </Link> </li>
                        })
                    )
                }
            </Grid>
        )
    }
}
export default MenuBar
