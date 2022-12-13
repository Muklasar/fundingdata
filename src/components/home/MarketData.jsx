import './marketData.css'
import dataImage from '../../assects/marketDatasets/data1.jpg'

const MarketData = () => {
    return (
        <div>
            <div className="home-market-data-section">
                <div className='text-center'>
                    <h3 className='text-dark pt-5'>Market Datasets</h3>
                </div>
                <div className='home-market-data-nav-container'>
                    <div className=''></div>
                    <div className='mt-2'>
                        <div className="home-market-data-nav-ui d-flex  justify-content-between text-dark">
                            <p className="" href="#">Investor</p>
                            <p className="" href="#">Companies</p>
                            <p className="" href="#">Funds</p>
                            <p className="" href="#">Deals</p>
                        </div>
                    </div>
                </div>
                <div className='row m-0   ms-2 me-2 pt-2'>
                    <div className='col-6 ps-5 pe-5  '>
                            <div className='row' style={{ boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)", borderRadius: "10px", background: "white", height: "230px" }}>
                                <div className='col-4  m-1 p-0' height="">
                                    <img src={dataImage} className='' width="100%" height="100%" style={{ borderRadius: "5px" }} />
                                </div>
                                <div className='col-7  pt-3 ms-2'>
                                    <h3>Lorem</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                    <div className='text-center'>
                                        <button className='btn btn-success'>Discover More data</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className='col-6 ps-5 pe-5'>
                    <div className=''>
                            <div className='row' style={{ boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)", borderRadius: "10px", background: "white", height: "230px" }}>
                                <div className='col-4  m-1 p-0' height="">
                                    <img src={dataImage} className='' width="100%" height="100%" style={{ borderRadius: "5px" }} />
                                </div>
                                <div className='col-7  pt-3 ms-2'>
                                    <h3>Lorem</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                    <div className='text-center'>
                                        <button className='btn btn-success'>Discover More data</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketData