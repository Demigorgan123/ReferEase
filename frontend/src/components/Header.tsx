import logo from '../images/logo.png'
function Header() {
    return (
        <div>
            <div className="bg-[#1A73E826] p-3 text-center">
                <p>Navigate your ideal career path with tailored expert advice
                    <span className="text-[#1A73E8] ml-3">Contact Expert</span>
                </p>
            </div>
            <div className='flex justify-center py-4 gap-[25rem]'>
                <div className='flex items-center w-fit gap-8'>
                    <div className='w-24 mt-1'>
                        <img src={logo} alt='logo' />
                    </div>
                    <button className='flex bg-[#1A73E8] text-white items-center justify-center py-2 px-4 gap-1 rounded-md'>
                        Courses
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 mt-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                </div>
                <div className='flex items-center w-fit gap-8'>
                    <a href="#">Refer & Earn</a>
                    <a href="#">Resources</a>
                    <a href="#">About Us</a>
                    <button className='bg-[#94A3B833] py-2 px-4 rounded-md'>Login</button>
                    <button className='flex bg-[#1A73E8] text-white py-2 px-4 rounded-md'>Try for free</button>
                </div>
            </div>
        </div>
    );
}
export default Header;