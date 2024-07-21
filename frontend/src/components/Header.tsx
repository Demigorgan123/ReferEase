import { useState } from 'react';
import logo from '../images/logo.png'
function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <div className="bg-[#1A73E826] p-3 text-center">
                <p>Navigate your ideal career path with tailored expert advice
                    <span className="text-[#1A73E8] ml-3">Contact Expert</span>
                </p>
            </div>
            <div className='flex items-center justify-between py-3 px-8 shadow-md lg:py-4 lg:gap-10'>
                <div className='md:flex md:items-center md:w-fit md:gap-8'>
                    <div className='mt-2'>
                        <img src={logo} alt="logo" className='w-24' />
                    </div>
                    <button className='hidden lg:flex md:flex bg-[#1A73E8] text-white items-center justify-center py-2 px-4 gap-1 rounded-md'>
                        Courses
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 mt-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                </div>
                <div className='hidden lg:flex lg:items-center lg:w-fit lg:gap-8'>
                    <a href="#">Refer & Earn</a>
                    <a href="#">Resources</a>
                    <a href="#">About Us</a>
                    <button className='bg-[#94A3B833] py-2 px-4 rounded-md'>Login</button>
                    <button className='flex bg-[#1A73E8] text-white py-2 px-4 rounded-md'>Try for free</button>
                </div>
                <div className="lg:hidden flex justify-end mt-2">
                    <button onClick={toggleMenu}>
                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="lg:hidden absolute w-full bg-white">
                    <div className="flex flex-col items-center py-3 gap-4">
                        <button className='md:hidden flex w-fit bg-[#1A73E8] text-white items-center justify-center py-2 px-4 gap-1 rounded-md'>
                            Courses
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 mt-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                        <a href="#">Refer & Earn</a>
                        <a href="#">Resources</a>
                        <a href="#">About Us</a>
                        <button className='w-fit bg-[#94A3B833] py-2 px-4 rounded-md'>Login</button>
                        <button className='flex w-fit bg-[#1A73E8] text-white py-2 px-4 rounded-md'>Try for free</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header;