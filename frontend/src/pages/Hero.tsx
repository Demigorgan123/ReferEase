import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import banner from "../images/banner.png";
import money from "../images/money.png";
import Modal from "../components/Modal";

function Hero() {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
    }
    return (
        <>
            {
                isClicked ? <Modal toggleModal={setIsClicked} /> :
                    <div>
                        <Header />
                        <Navbar />
                        <div>
                            <div className="bg-[#EEF5FF] m-auto w-[800px] my-10 flex items-center rounded-2xl shadow-[1px_2px_30px_rgba(0,0,0,0.2)] px-8 gap-8 relative">
                                <div className="absolute w-20 top-0 left-0">
                                    <img src={money} alt="money" />
                                </div>
                                <div className="absolute w-20 top-0 right-0 rotate-90">
                                    <img src={money} alt="money" />
                                </div>
                                <div className="flex flex-col w-[35%] mt-8">
                                    <p className="text-5xl font-bold">Let's Learn & Earn</p>
                                    <p className="text-2xl">Get a chance to win up-to <span className="text-3xl text-[#1A73E8] font-semibold">Rs. 15,000</span></p>
                                    <button type="button" onClick={handleClick} className="bg-[#1A73E8] text-white rounded-md py-2 px-4 w-fit mt-16">Refer Now</button>
                                </div>
                                <div className="w-[65%]">
                                    <div className="h-full w-full relative">
                                        <img src={banner} alt="banner" className="w-full h-full scale-[1.4]" />
                                        <div className="absolute w-20 top-4 left-12 rotate-180">
                                            <img src={money} alt="money" />
                                        </div>
                                        <div className="absolute w-20 bottom-4 left-0 rotate-90">
                                            <img src={money} alt="money" />
                                        </div>
                                        <div className="absolute w-20 top-48 right-0">
                                            <img src={money} alt="money" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
}

export default Hero;