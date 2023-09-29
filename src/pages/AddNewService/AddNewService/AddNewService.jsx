import Banner from "../Banner/Banner";

const AddNewService = () => {
    return (
        <div className="lg:w-9/12 mx-auto px-5 lg:px-0 space-y-32">
            <Banner></Banner>
            <form className="space-y-6 p-10 md:p-24 bg-[#F3F3F3] rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <input type="text" name="name" placeholder="Name here" className="input input-bordered w-full" />
                    <input type="email" placeholder="Email here" className="input input-bordered w-full" />
                    <input type="date" className="input input-bordered w-full" />
                    <input type="text" placeholder="Service Name here" className="input input-bordered w-full" />
                </div>
                <textarea placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                <button className="btn capitalize text-xl btn-block font-semibold bg-[#FF3811] border-none text-white rounded-lg">Submit</button>
            </form>
        </div>
    );
};

export default AddNewService;