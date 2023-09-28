import Banner from "../Banner/Banner";
import Download from "../Download/Download";


const Service = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="flex w-9/12 mx-auto">
                <div className="w-8/12">
                    <h2>Hello</h2>
                </div>
                <div className="w-4/12">
                    <Download></Download>
                </div>
            </div>
        </div>
    );
};

export default Service;