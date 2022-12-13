import Banner from "../components/home/Banner"
import MarketData from "../components/home/MarketData"
import Services from "../components/home/Services"
import Static from "../components/home/Static"
import HomeNav from "../components/nav/HomeNav"

const Home = () =>{
    return(
        <div>
            <HomeNav />
            <Banner />
            <MarketData />
            <Static />
            <Services />
        </div>
    )
}

export default Home