import React from 'react';
import { Carousel } from 'antd';
import './banner.css'
import Banner1 from '../../assects/banner/bannerImage2.jpg'
import Banner2 from '../../assects/banner/bannerImage3.jpg'
import Banner3 from '../../assects/banner/bannerImage4.jpg'
import Banner4 from '../../assects/banner/bannerImage5.jpg'
// import Banner7 from '../../assects/banner/bannerImage7.jpg'
import Banner8 from '../../assects/banner/bannerImage7.jpg'

const contentStyle = {
    height: '72vh',
    color: '#fff',
    lineHeight: '74vh',
    textAlign: 'center',
    background: '#364d79',
    marginTop: "55px"
}

const Banner = () => {
    return (
        <div className="">
            <Carousel >
                <div>
                    <div style={contentStyle}>
                        <div className="position-relative">
                            <img src={Banner8} class="img-fluid" width="100%" height="100%" />
                            <div className='banner-text w-100'>
                                {/* <div className='row w-100'> */}
                                    <div className='col-6'>
                                        <h1 className='text-dark'>
                                            Gain insight from our VC, PE and M&A data with the Funding Data Platform
                                        </h1>
                                        <div className='trial-btn btn'>
                                            Request for free trial
                                        </div>
                                    </div>
                                {/* </div> */}
                                {/* <div className='d-flex flex-column'> */}

                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                        <div className="banner1">
                            <img src={Banner2} width="100%" height="100%" />
                        </div>
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                        <div className="banner1">
                            <img src={Banner1} class="img-fluid" alt="..." />
                            {/* <img src={Banner1} width="100%" height="100%" /> */}
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}
export default Banner