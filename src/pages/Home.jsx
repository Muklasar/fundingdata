import Banner from "../components/home/Banner"
import Footer from "../components/home/Footer"
import HomeCases from "../components/home/HomeCases"
import MarketData from "../components/home/MarketData"
import Price from "../components/home/Price"
import Services from "../components/home/Services"
import Static from "../components/home/Static"
import TotalData from "../components/home/TotalData"
import Trial from "../components/home/Trial"
// import Trial from "../components/home/Trial"
import HomeNav from "../components/nav/HomeNav"

const Home = () =>{
    return(
        <div>
            <HomeNav />
            <Banner />
            {/* <MarketData /> */}
            <TotalData />
            <Static />
            <Services />
            <HomeCases />
            <Trial />
            <Price />
            <Footer />
        </div>
    )
}

export default Home