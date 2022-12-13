import Banner from "../components/home/Banner"
import HomeCases from "../components/home/HomeCases"
import MarketData from "../components/home/MarketData"
import Price from "../components/home/Price"
import Services from "../components/home/Services"
import Static from "../components/home/Static"
import Trial from "../components/home/Trial"
// import Trial from "../components/home/Trial"
import HomeNav from "../components/nav/HomeNav"

const Home = () =>{
    return(
        <div>
            <HomeNav />
            <Banner />
            <MarketData />
            <Static />
            <Services />
            <HomeCases />
            <Trial />
            <Price />
        </div>
    )
}

export default Home