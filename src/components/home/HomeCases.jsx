import './homeCases.css'
import React from 'react';
import { Card, Col, Row } from 'antd';
import Banner1 from '../../assects/banner/bannerImage4.jpg'
import Banner2 from '../../assects/banner/bannerImage5.jpg'
import Banner3 from '../../assects/banner/bannerImage6.jpg'
import Banner4 from '../../assects/banner/bannerImage3.jpg'

const HomeCases = () => {
    const data = [
        {
            title: "Fundind Data institutional research on global market volatility",
            desc: "",
            img: Banner1
        },
        {
            title: "The 4 questions every corporation needs to ask (and answer) about its competitors",
            desc: "",
            img: Banner2
        },
        {
            title: "Analyst Q&A: What is Portfolio Forecasting and why is it important?",
            desc: "",
            img: Banner3
        },
        {
            title: "The 4 questions every corporation needs to ask (and answer) about its competitors",
            desc: "",
            img: Banner4
        }
    ]
    return (
        <div className="home-cases-container p-5">
            <div className='text-start mt-3'>
                <h4>Cases and Insights</h4>
            </div>
            <div className='d-flex justify-content-between mt-5'>
                {data.map(dt =>
                    <div class="card" style={{ width: "18rem" }}>
                        <img src={dt.img} class="card-img-top" alt="..."  height="160px"/>
                        <div class="card-body">
                            <h5 class="card-title">{dt.title}</h5>
                            <p class="card-text">{dt.desc}</p>
                            <a href="#" class="btn btn-primary">Read more</a>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default HomeCases