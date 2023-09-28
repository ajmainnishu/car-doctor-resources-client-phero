import { Outlet } from "react-router-dom";
import Navigation from "../../shared/Navigation/Navigation";

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;