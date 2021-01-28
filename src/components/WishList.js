import { Grid } from '@material-ui/core';
import React, { useEffect, useState}from 'react';
import _ from 'lodash';
import { ProductList } from '../common/Data';

const WishList = () => {
    const [productList, setProductList] = useState([])
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
        getData()
    }, [])
    const getData = () => {
        let tempLdata = localStorage.getItem('wishlist')
        tempLdata = JSON.parse(tempLdata);
        console.log(tempLdata)
        // _.intersectionby work like map
        let pList = _.intersectionBy(ProductList, tempLdata, 'id');
        if (pList && pList.length) {
            setProductList(pList)
        }
    }
    const removeToCart = (pId) => {
        let cart = JSON.parse(localStorage.getItem('wishlist'));
        let newCart = cart.filter((item) => item.id !== pId)
        localStorage.setItem('wishlist', JSON.stringify(newCart))
    }
    return (
        <Grid>
            <Grid>
                {(productList && productList.length > 0) && (
                    productList.map((product, index) => {

                        return <Grid style={{ margin: '150px 10px 10px 20px', display: 'flex' }}>
                            <Grid>
                                <img src={product.imageList} style={{ width: '400px', height: '300px' }} />
                            </Grid>
                            <Grid style={{ width: '20%', paddingTop: '30px', marginLeft: '100px' }}>
                                <h3>{product.protitle}</h3>
                                <p > {product.shortDescription} </p>
                                <h3> Price {product.price} </h3>
                                <button className={'buttonDesign'} onClick={() => removeToCart(product.id)}>Remove</button>
                            </Grid>
                            <Grid className={'confirm'}>
                                <h3 style={{ padding: '5px', marginLeft: '150px' }}>confirmation</h3>
                                <p style={{ padding: '5px' }}>M.R.P ==== <strong style={{ color: 'black' }}>
                                    {parseInt(product.price)} rs</strong></p>
                                <p style={{ padding: '5px' }}> Delivery Charges ==  <strong style={{ color: 'black' }} >Free</strong></p>
                                <p style={{ padding: '5px' }}>Discount === <strong style={{ color: 'black' }}>{((parseInt(product.price) * 20) / 100)}</strong></p>
                                <p style={{ padding: '5px' }}>You Pay  <strong style={{ color: 'black' }}>  {(parseInt(product.price) - ((parseInt(product.price) * 20) / 100))} rs </strong>  only</p>
                                <a href={"/cart/"} ><button style={{ padding: '5px 85px 5px 85px', marginLeft: '80px', marginTop: '10px' }} onClick={() => removeToCart(product.id)}>Add to cart</button></a>
                            </Grid>
                        </Grid>
                    })

                )}
            </Grid>
        </Grid>
    )
}

export default WishList
