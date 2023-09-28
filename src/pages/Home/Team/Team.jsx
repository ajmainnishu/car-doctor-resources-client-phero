import { Link } from 'react-router-dom';
import teamPhoto1 from '../../../assets/team/team-1.jpg';
import teamPhoto2 from '../../../assets/team/team-2.jpg';
import teamPhoto3 from '../../../assets/team/team-3.jpg';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Team = () => {
    // box container info
    const boxInfo = <div className='text-center pt-5 pb-1.5 space-y-2.5'>
        <h3 className='text-[#444444] text-2xl font-bold'>Car Engine Plug</h3>
        <p className='text-[#737373] text-xl font-semibold'>Engine Expert</p>
        <div className="space-x-3">
            <Link to={`https://www.facebook.com/`} target='_blank' className='btn btn-circle bg-[#395185] text-white btn-sm border-0'><FaFacebookF /></Link>
            <Link to={`https://twitter.com/`} target='_blank' className='btn btn-circle bg-[#55ACEE] text-white btn-sm border-0'><FaTwitter /></Link>
            <Link to={`https://www.linkedin.com/`} target='_blank' className='btn btn-circle bg-[#0A66C2] text-white btn-sm border-0'><FaLinkedinIn /></Link>
            <Link to={`https://www.instagram.com/`} target='_blank' style={{background: 'linear-gradient(150deg, #774ADF 4%, #9748BE 15%, #BD4697 30%, #D8447A 45%, #E94369 57%, #EF4363 66%, #EF545E 72%, #F08053 84%, #F2C141 100%)'}} className='btn btn-circle text-white btn-sm border-0'><FaInstagram /></Link>
        </div>
    </div>

    return (
        <div className='lg:w-9/12 mx-auto px-5 lg:px-0 space-y-12'>
            <div className='space-y-5 text-center'>
                <h5 className='text-[#FF3811] text-xl font-bold'>Team</h5>
                <h2 className='text-[#151515] font-bold text-5xl'>Meet Our Team</h2>
                <p className='text-[#737373] capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised <br className='hidden md:block' /> words which don&apos; look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {/* team 1 */}
                <div className='px-5 py-6 border shadow rounded-lg'>
                    <div className='bg-[#F3F3F3] rounded-lg'>
                        <img src={teamPhoto1} alt="Team Photo 1" />
                    </div>
                    {boxInfo}
                </div>
                {/* team 2 */}
                <div className='px-5 py-6 border shadow rounded-lg'>
                    <div className='bg-[#F3F3F3] rounded-lg'>
                        <img src={teamPhoto2} alt="Team Photo 2" />
                    </div>
                    {boxInfo}
                </div>
                {/* team 3 */}
                <div className='px-5 py-6 border shadow rounded-lg'>
                    <div className='bg-[#F3F3F3] rounded-lg'>
                        <img src={teamPhoto3} alt="Team Photo 3" />
                    </div>
                    {boxInfo}
                </div>
            </div>
        </div>
    );
};

export default Team;