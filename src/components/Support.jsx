import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';


const Support = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])
    return (

        <Grid>

            <Grid style={{
                backgroundImage: "url(/images/hero-banner.jpg)",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                color: 'white'
            }}>
                <Grid className={'supportH1'}>
                    <Grid style={{ marginTop: '-400px' }}>
                        <h1 >Wecome to Honey Support</h1>
                        <label>Search Support  </label>
                        <input type="text" aria-label="search support" className={'input'} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid className={'appleIcons'}>
                < a data-analytics-event="link.component_click" data-analytics-link-component_type="Image Grid" data-analytics-link-component_name="iPhone " data-analytics-link-url="/iphone" href="/iphone" className={'iconsPad2'}>
                    <img src="/images/iphone-support.png" alt="" width="68" height="68" /><br />
                    <span style={{ color: 'black' }}> iPhone </span>
                </a>
                < a data-analytics-event="link.component_click" data-analytics-link-component_type="Image Grid" data-analytics-link-component_name="Apple-TV " data-analytics-link-url="/AppleTV" href="/AppleTV" className={'iconsPad'}>
                    <img src="/images/apple-tv.png" alt="" width="68" height="68" /><br />
                    <span style={{ color: 'black' }}> Apple TV </span>
                </a>
                < a data-analytics-event="link.component_click" data-analytics-link-component_type="Image Grid" data-analytics-link-component_name="Apple-Tab " data-analytics-link-url="/Apple-Tab" href="/Apple-Tab" className={'iconsPad'}>
                    <img src="/images/apple-tab.png" alt="" width="68" height="68" /><br />
                    <span style={{ color: 'black' }}> Apple Tab </span>
                </a>
                < a data-analytics-event="link.component_click" data-analytics-link-component_type="Image Grid" data-analytics-link-component_name="Apple-Watch " data-analytics-link-url="/Apple-Watch" href="/Apple-Watch" className={'iconsPad'} >
                    <img src="/images/apple-watch.png" alt="" width="68" height="68" /><br />
                    <span style={{ color: 'black' }}> Apple Watch </span>
                </a>

            </Grid>
            <Grid className={'appleIcons'}>
                < a data-analytics-event="link.component_click" data-analytics-link-component_type="Image Grid" data-analytics-link-component_name="iPhone " data-analytics-link-url="/iphone" href="/iphone" className={'iconsPad2'}>
                    <img src="/images/iphone-support.png" alt="" width="68" height="68" /><br />
                    <span style={{ color: 'black' }}> OnePlus </span>
                </a>
                < a data-analytics-event="link.component_click" data-analytics-link-component_type="Image Grid" data-analytics-link-component_name="Apple-TV " data-analytics-link-url="/AppleTV" href="/AppleTV" className={'iconsPad'}>
                    <img src="/images/apple-tv.png" alt="" width="68" height="68" /><br />
                    <span style={{ color: 'black' }}> OnePlus TV </span>
                </a>
                < a data-analytics-event="link.component_click" data-analytics-link-component_type="Image Grid" data-analytics-link-component_name="OnePlus-Tab " data-analytics-link-url="/OnePlus-Tab" href="/OnePlus-Tab" className={'iconsPad'}>
                    <img src="/images/apple-tab.png" alt="" width="68" height="68" /><br />
                    <span style={{ color: 'black' }}> OnePlus Tab </span>
                </a>
                < a data-analytics-event="link.component_click" data-analytics-link-component_type="Image Grid" data-analytics-link-component_name="OnePlus-Watch " data-analytics-link-url="/OnePlus-Watch" href="/OnePlus-Watch" className={'iconsPad'} >
                    <img src="/images/apple-watch.png" alt="" width="68" height="68" /><br />
                    <span style={{ color: 'black' }}> OnePlus Watch </span>
                </a>

            </Grid>
            <Grid className={'appleIcons'}>
                < a data-analytics-event="link.component_click" data-analytics-link-component_type="Image Grid" data-analytics-link-component_name="Samsung " data-analytics-link-url="/Samsung" href="/Samsung" className={'iconsPad2'}>
                    <img src="/images/iphone-support.png" alt="" width="68" height="68" /><br />
                    <span style={{ color: 'black' }}> Samsung</span>
                </a>
                < a data-analytics-event="link.component_click" data-analytics-link-component_type="Image Grid" data-analytics-link-component_name="Samsung-TV " data-analytics-link-url="/SamsungTV" href="/SamsungTV" className={'iconsPad'}>
                    <img src="/images/apple-tv.png" alt="" width="68" height="68" /><br />
                    <span style={{ color: 'black' }}> Samsung TV </span>
                </a>
                < a data-analytics-event="link.component_click" data-analytics-link-component_type="Image Grid" data-analytics-link-component_name="Samsung-Tab" data-analytics-link-url="/Samsung-Tab" href="/Samsung-Tab" className={'iconsPad'}>
                    <img src="/images/apple-tab.png" alt="" width="68" height="68" /><br />
                    <span style={{ color: 'black' }}> Samsung Tab </span>
                </a>
                < a data-analytics-event="link.component_click" data-analytics-link-component_type="Image Grid" data-analytics-link-component_name="Samsung-Watch " data-analytics-link-url="/Samsung-Watch" href="/Samsung-Watch" className={'iconsPad'} >
                    <img src="/images/apple-watch.png" alt="" width="68" height="68" /><br />
                    <span style={{ color: 'black' }}> Samsung Watch </span>
                </a>

            </Grid>
        </Grid>

    )
}

export default Support
