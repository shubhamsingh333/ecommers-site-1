import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core'
import { ProductList, Menu } from '../common/Data';
import ProductItem from './ProductItem';

const Product = (props) => {
    const [pList, setPList] = useState([]);
    const [bItem, setBItem] = useState('');

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        loadData();
    }, [props.match.params])

    // handle load data for product 
    const loadData = () => {
        if (props && props.match && props.match.params && props.match.params.slug) {
            if (Menu && Menu.length) {
                let menuItem = Menu.filter((v) => v.slug === props.match.params.slug);
                if (menuItem && menuItem.length) {
                    setBItem(menuItem[0].banner)
                    let pItem = ProductList.filter((v) => v.menuId === menuItem[0].id);
                    setPList(pItem)
                }
            }
        }
    }

    return (
        <Grid>
            <Grid className={'product'}>
                <img src={process.env.PUBLIC_URL + bItem} alt={'hello'} />
                <h2 className={'font'}>{props.match.params.slug} Accessories</h2>
            </Grid>
            <Grid className={'productPhoto'} style={{ display: 'flex', flexFlow: 'wrap' }}>
                {(pList && pList.length > 0) && (
                    pList.map((item, index) => (
                        <ProductItem
                            item={item}
                            key={index}
                            {...props}
                        />


                    ))
                )}
             
            </Grid>
        </Grid>
    )
}

export default Product