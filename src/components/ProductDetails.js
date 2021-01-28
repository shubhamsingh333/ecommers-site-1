import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { ProductList } from '../common/Data';
import useLocalStorage from 'react-use-localstorage';


const ProductDetails = (props) => {
    const [pDetails, setPDetails] = useState([]);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        loadDetails();
    }, [props.match && props.match.params])
    const loadDetails = () => {
        if (props && props.match && props.match.params && props.match.params.id) {
            if (ProductList && ProductList.length) {
                let pItem = ProductList.find((v) => v.id === Number(props.match.params.id));
                if (pItem) {
                    setPDetails(pItem)
                }
            }
        }
    }
    const [item, setItem] = useLocalStorage('mydata', '');

    const AddToCart = () => {
        alert('sure')
        let temp = []
        let addedIds  = localStorage.getItem('mydata');
        if (addedIds){
            temp = JSON.parse(addedIds);
        }
        temp.push({id:pDetails.id});
        localStorage.setItem('mydata', JSON.stringify(temp))
    }
    return (
        <Grid style={{ paddingTop: '10px', display: 'flex' }}>
            <Grid style={{ display: 'flex' }}>
                <img src={pDetails && pDetails.imageList} style={{ width: '500px', height: '500px' }} />
            </Grid>
            <Grid style={{ display: 'flex' }}>
                <Grid style={{ margin: '80px 100px 10px 50px' }}>
                    <h3 style={{ margin: '2px 10px 5px 20px' }}>{pDetails && pDetails.protitle}</h3>
                    <p style={{ width: '80%', margin: '10px 10px 10px 20px' }}>{pDetails && pDetails.shortDescription}</p>
                    <h3 style={{ margin: '2px 10px 0px 20px' }}> Price {pDetails && pDetails.price}</h3>
                    <a href={"/cart/"}> <button style={{ width: '20%', margin: '10px 10px 10px 20px', padding: '10px' }} onClick={() => AddToCart(pDetails)}>Buy</button></a>  
                    <button style={{ width: '35%', margin: '10px 10px 10px 20px', padding: '10px' }} onClick={() => AddToCart(pDetails)}>Add to cart</button>
                </Grid>

            </Grid>
        </Grid>
    )
}
export default ProductDetails
{/*
     let buyItem = pDetails;
    localStorage.setItem('buyNow', JSON.stringify(buyItem))
        */
}