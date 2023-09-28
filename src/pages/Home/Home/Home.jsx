import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import Products from "../Products/Products";
import Team from "../Team/Team";

const Home = () => {
    return (
        <div className="space-y-32">
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Info></Info>
            <Products></Products>
            <Team></Team>
        </div>
    );
};

export default Home;