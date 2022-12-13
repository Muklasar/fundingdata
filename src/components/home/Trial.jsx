import './trial.css'

const Trial = () => {
    return (
        <div className="home-trial-section ">
             <div className='text-center pt-5 fw-bold'>
                <h2>Go further and achieve more with Funding Data</h2>
            </div>
            <div className="d-flex justify-content-center align-items-center pt-4">
                <div className='w-50'>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Email address" aria-label="Email address" aria-describedby="basic-addon2" style={{ lineHeight: "30px" }}/>
                        <div class="input-group-append">
                            <button class="btn btn-warning text-bold ps-4 pe-4" type="button" style={{ lineHeight: "30px", fontSize:"16px", fontWeight:"bold" }}>Request for free trial</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trial