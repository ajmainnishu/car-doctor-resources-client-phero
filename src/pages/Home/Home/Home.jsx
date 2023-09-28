import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import Products from "../Products/Products";

const Home = () => {
    return (
        <div className="space-y-32">
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Info></Info>
            <Products></Products>
        </div>
    );
};

export default Home;