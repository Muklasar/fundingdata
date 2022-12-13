import { BiSearchAlt2 } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import './homeNav.css'
const HomeNav = () => {
    return (
        <div className='main_nav_container top-0 w-100'>
            <div className="rows">
                <div className='column main-logo'>Funding Data</div>
                <div className='column '>
                    <ul className='list-content d-flex align-items-end justify-content-evenly column m-0 pe-xl-5 pe-lg-1'>
                        <li>Product</li>
                        <li>Solutions</li>
                        <li>Data</li>
                        <li>News & Analytics</li>
                        <li>By Offering</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='column'></div>
                {/* <div className='column  '>
                    <form className=" position-relative  p-0 m-0">
                        <input className="main-nav-search border" type="search" aria-label="Search" />
                        <div className="main-search-icon d-flex align-items-center">
                            <BiSearchAlt2 />
                            <div className='main-search-text'>Search</div>
                        </div>
                    </form>
                </div> */}
                <div className='column '>
                    <Link to='login' className='text-decoration-none'>
                        <div className='main-login-button'>Login</div>
                    </Link>
                </div>
                <div className='column book-demo-button self-align-end'>Book for demo</div>
            </div>
        </div>
    )
}

export default HomeNav