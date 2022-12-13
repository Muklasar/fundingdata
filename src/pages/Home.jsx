import Banner from "../components/home/Banner"
import MarketData from "../components/home/MarketData"
import HomeNav from "../components/nav/HomeNav"

const Home = () =>{
    return(
        <div>
            <HomeNav />
            <Banner />
            <MarketData />
        </div>
    )
}

export default Home