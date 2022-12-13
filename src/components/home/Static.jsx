import Chart from './Chart'
import DatasetCard from './DatasetCards'
import './static.css'

const Static = () => {
    return (
        <div className="home-static-container p-5">
            <h4>Static (User Data Stats)</h4>
            <div className='row ' style={{ height: "195px" }}>
                <div className='col-8 p-2'>
                    <DatasetCard />
                </div>
                <div className='col-4 p-2 border h-100 mt-2' >
                    <Chart />
                </div>
            </div>
            {/* <div className='border '>
                <h4 className='text-start'>Static (User Data Stats)</h4>
                <div>
                    <div className='border'></div>
                </div>
            </div> */}
        </div>
    )
}

export default Static