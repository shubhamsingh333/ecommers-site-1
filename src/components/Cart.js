import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { ProductList } from '../common/Data';
import _ from 'lodash';
import useLocalStorage from 'react-use-localstorage';

const Cart = (props) => {
    const [productList, setProductList] = useState([])
    const [cartTotal, setCartTotal] = useState([])
    const [totalDiscount, setTotalDiscount] = useState([])
    const [item, setItem] = useLocalStorage('wishlist', '');
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
        getData()
    }, [])
    const getData = () => {
        let tempLdata = localStorage.getItem('mydata')
        tempLdata = JSON.parse(tempLdata);
        // _.intersectionby work like map
        let pList = _.intersectionBy(ProductList, tempLdata, 'id');
        if (pList && pList.length) {
            setProductList(pList)
            let subTotal = 0;
            pList.map(item => (subTotal += (parseInt(item.price))));
            let tempSubTotal = (parseInt(subTotal) * 20 / 100);
            setTotalDiscount(tempSubTotal)
            let totalTemp = subTotal - tempSubTotal;
            setCartTotal(totalTemp);
        }
    }
    const removeToCart = (pId) => {
        alert('sure')
        let cart = JSON.parse(localStorage.getItem('mydata'));
        let newCart = cart.filter((item) => item.id !== pId)
        localStorage.setItem('mydata', JSON.stringify(newCart))
    }
    const addToWishLIst = (product) => {
        alert('sure')
        let temp = product;
        localStorage.setItem('wishlist',JSON.stringify(temp))
    }
const pay =(pId) => {
    removeToCart(pId)
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
                                <button className={'buttonDesign'} onClick={() => addToWishLIst(product)}> Add to WishList</button>
                            </Grid>
                            <Grid className={'confirm'}>
                                <h3 style={{ padding: '5px', marginLeft: '150px' }}>confirmation</h3>
                                <p style={{ padding: '5px' }}>M.R.P ==== <strong style={{ color: 'black' }}>
                                    {parseInt(product.price)} rs</strong></p>
                                <p style={{ padding: '5px' }}> Delivery Charges ==  <strong style={{ color: 'black' }} >Free</strong></p>
                                <p style={{ padding: '5px' }}>Discount === <strong style={{ color: 'black' }}>{((parseInt(product.price) * 20) / 100)}</strong></p>
                                <p style={{ padding: '5px' }}>You Pay  <strong style={{ color: 'black' }}>  {(parseInt(product.price) - ((parseInt(product.price) * 20) / 100))} rs </strong>  only</p>
                                <a href={"/thanks/"} ><button style={{ padding: '5px 85px 5px 85px', marginLeft: '80px', marginTop: '10px' }} onClick={()=> pay(product.id)}>Pay</button></a>
                            </Grid>
                        </Grid>
                    })

                )}
            </Grid>
            <Grid className={'price'}>
                <p className={'total'}>Grand Total <span className={'priceBg'}> {cartTotal + totalDiscount} </span> </p> <hr />
                <p className={'total'}>Total Discount - <span className={'priceBg'}> {totalDiscount} </span> </p> <hr />
                <p className={'total'}>You Pay <span className={'priceBg'}> {cartTotal} </span> </p>
            </Grid>
        </Grid>

    )
}
export default Cart
