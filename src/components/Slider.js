import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        imgPath:
            '/images/11.webp',
    },
    {
        imgPath:
            '/images/2.webp',
    }, {
        imgPath:
            '/images/1.webp',
    }, {
        imgPath:
            '/images/3.webp',
    },
    {
        imgPath:
            '/images/iphone.png',
    },
    {
        imgPath:
           '/images/iPhone_11_Purple_carousel.webp',
    },
    {
        imgPath:
          '/images/11 pro.png',
    },
    {
        imgPath:
            '/images/oneplus.webp',
    },
    {
        imgPath:
            '/images/iphone.png',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 555,
        display: 'block',
        overflow: 'hidden',
        width: '100%',
    },
}));

function Slider() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Grid>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {tutorialSteps.map((step, index) => (
                    <Grid key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <img className={classes.img} src={step.imgPath} alt={step.label} />
                        ) : null}
                    </Grid>
                ))}
            </AutoPlaySwipeableViews>
         
        </Grid>
    );
}

export default Slider;
