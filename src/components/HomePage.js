import React,{useEffect} from 'react'
import { Grid } from '@material-ui/core'
import Slider from './Slider'
import Item from './Item'

const HomePage = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        <Grid >
            <Slider />
            <Item />
        </Grid>
    )
}

export default HomePage
