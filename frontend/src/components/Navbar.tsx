function Navbar() {
    return (
        <div>
            <div className="flex m-auto w-fit gap-12 bg-[#1A73E81C] py-2 px-10 rounded-full">
                <div className="flex flex-col text-[#1A73E8] items-center">
                    <a href="#">Refer</a>
                    <div className="w-1 h-1 rounded-full bg-[#1A73E8]"></div>
                </div>
                <div className="flex flex-col items-center">
                    <a href="#">Benefits</a>
                </div>
                <div className="flex flex-col items-center">
                    <a href="#">FAQs</a>
                </div>
                <div className="flex flex-col items-center">
                    <a href="#">Support</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;