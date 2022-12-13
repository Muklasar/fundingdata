import './marketData.css'

const MarketData = () => {
    return (
        <div>
            <div className="home-market-data-section">
                <div className='text-center'>
                    <h3 className='text-dark pt-5'>Market Datasets</h3>
                </div>
                <div className='home-market-data-nav-container'>
                    <div className=''></div>
                    <div className='mt-4'>
                        <div className="home-market-data-nav-ui d-flex  justify-content-between text-dark">
                            <p className="" href="#">Investor</p>
                            <p className="" href="#">Companies</p>
                            <p className="" href="#">Funds</p>
                            <p className="" href="#">Deals</p>
                        </div>
                    </div>
                </div>
                <div className='row m-0 mt-2 border border-success ms-2 me-2'>
                    <div className='col-6'>
                        <div className=' p-4 m-1'>
                            <div className='row'>
                                <div className='col-3 border border-success m-2 p-5'></div>
                                <div className='col-8 border border-success m-2 p-5'></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className=' p-4 m-1'>
                            <div className='row'>
                                <div className='col-3 border border-success m-2 p-5'></div>
                                <div className='col-8 border border-success m-2 p-5'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketData