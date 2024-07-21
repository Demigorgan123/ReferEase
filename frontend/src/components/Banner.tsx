import { Dispatch, SetStateAction } from "react";
import banner from '../images/banner.png'
function Banner({ openModal }: { openModal: Dispatch<SetStateAction<boolean>> }) {
    return (
        <div className="my-8 px-3">
            <div className="bg-[#EEF5FF] rounded-md shadow-[1px_2px_30px_rgba(0,0,0,0.2)] md:flex md:w-[750px] md:m-auto">
                <div className="flex flex-col items-center justify-center md:w-[40%] md:items-start md:pl-8">
                    <p className="text-4xl md:text-5xl font-bold mt-8 mb-2">Let's Learn & Earn</p>
                    <p className="text-lg md:text-2xl">Get a chance to win up-to <span className="text-xl md:text-3xl text-[#1A73E8] font-semibold">Rs. 15,000</span>
                    </p>
                    <button type="button" onClick={() => openModal(true)} className="bg-[#1A73E8] text-white rounded-md py-2 px-4 w-fit mt-4 md:mt-10 mb-8">Refer Now</button>
                </div>
                <div className="px-3 md:w-[60%]">
                    <img src={banner} alt="banner" />
                </div>
            </div>
        </div>
    )
}

export default Banner;