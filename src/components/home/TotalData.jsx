import './totalData.css'

const TotalData = () =>{
    return(
        <div className="home-total-data-sections p-5 ">
            <p className='pe-5 ps-4 total-data-heading'>
            Robust public and private market datasets, meticulously kept and ever-expanding
            </p>
            <div className='row mt-5'>
                <div className='col-3'>
                    <div className='d-flex flex-column align-items-center justify-content-between'>
                        <div className='data-counts'>3.5M</div>
                        <div className='data-company'>Compaines</div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='d-flex flex-column align-items-center justify-content-between'>
                        <div className='data-counts'>1.9M</div>
                        <div className='data-company'>Deals</div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='d-flex flex-column align-items-center justify-content-between'>
                        <div className='data-counts'>447K</div>
                        <div className='data-company'>Investors</div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='d-flex flex-column align-items-center justify-content-between'>
                        <div className='data-counts'>106K</div>
                        <div className='data-company'>Funds</div>
                    </div>
                </div>
            </div>
            <div className='data-footer-text pt-5'>To follow an evolving financial market landscape, discern trends and make informed predictions, you need access to timely, trusted data—and we have more of that than anyone else.</div>
        </div>
    )
}

export default TotalData