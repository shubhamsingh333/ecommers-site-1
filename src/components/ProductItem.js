import React from 'react'
import { Grid } from '@material-ui/core';
import {Link }from 'react-router-dom';

const ProductItem = (props) => {
    const { item } = props;

    return (
        <Grid className={'GridSize'}>
            <Grid>  <img src={item.imgPath} alt={'hi'} style={{ width: '100%', height: '450px', display: 'flex' }} />
                <h1 style={{ textAlign: 'center' }}>{item.title}</h1>
                <Link to={`/productdetail/${item.id}`}>
                    <button className={'buttonPad'}>View More</button>
                </Link>

            </Grid>
        </Grid>

    )
}

export default ProductItem
