import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import Banner from "../components/Banner";

function Hero() {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    return (
        <>
            {
                isClicked ? <Modal toggleModal={setIsClicked} /> :
                    <div>
                        <Header />
                        <Navbar />
                        <Banner openModal={setIsClicked}/>
                    </div>
            }
        </>
    );
}

export default Hero;