import React, { useState } from 'react';
import './service.css'
import ServiceCard from './ServiceCard';

const Services = () => {
    let data = [
        {
            title: "Private market intelligence",
            decs: "Gain actionable insight on the flow of capital across VC, PE and M&A",
        },
        {
            title: "Fundraising",
            decs: "Raise a fund efficiently with data-informed peer groups, benchmarks and investors",
        },
        {
            title: "Deal Sourcing",
            decs: "Discover companies that are a strategic fit, seeking funding or primed for acquisition",
        },
        {
            title: "Due diligence",
            decs: "Create the perfect pitch using valuable intel on companies, funds and financial sponsors",
        },
        {
            title: "Business development",
            decs: "Grow your business by targeting opportunities within the private and public markets",
        },
        {
            title: "Networking",
            decs: "Build data-backed comps, buyer and investor lists with technology designed to save time",
        },
        {
            title: "Deal execution",
            decs: "See how 1.9 million pros operate across the industry and grow your connections",
        },
        {
            title: "Asset Allocation",
            decs: "Bring confidence to your allocation strategy with a full view of the private market landscape",
        },
    ]
    return (
        <div className='home-service-container p-5'>
            <div className='text-center'>
                <h4>Our Services</h4>
            </div>
            <div className='d-flex align-items-center justify-content-between mt-4 flex-wrap'>
                {data.map((dt) =>
                    <ServiceCard title={dt.title} decs={dt.decs} />
                )}
            </div>
        </div>
    )
}

export default Services