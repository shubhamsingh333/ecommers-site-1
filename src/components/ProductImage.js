import React from 'react';
import { Grid } from '@material-ui/core';;

const ProductImage = (props) => {
    const { imageData } = props;

    return (
        <Grid >
            <img src={imageData} alt={'hi'} style={{ width: '500px', height: '400px', margin: '50px 150px 40px 10px' }} />
        </Grid>
    )

}
export default ProductImage
