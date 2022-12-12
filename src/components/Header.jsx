import React from "react";
import { BsOctagon } from "react-icons/bs"
import useScroll from "../hooks/useScroll";
const Header = () => {
    const { scrollY, scrollDirection } = useScroll();

	const [mobileNav, setMobileNav] = React.useState(false);
    return (
        
        <header className={"h-24 fixed min-w-full"}>
            <nav className={scrollY >= 250 ? scrollDirection === 'down' ? 'bg-black w-full h-full align-center  flex justify-between ' : 'hidden' : 'bg-black w-full h-full align-center  flex'}>
                <div className="flex flex-col flex-wrap items-center justify-between min-w-full px-12 text-5xl md:flex-row" >
                    <a className='relative flex items-center mb-4 font-medium text-gray-900 md:mb-0' href={ '/'}>
                        <BsOctagon size={45} color="#ffa500" />
                        <span class="ml-3 text-3xl font-[Proxima Nova] text-lightOrange absolute right-[9px] top-1  ">M</span>
                    </a>
                    <nav class="flex flex-wrap items-center justify-center text-base md:ml-auto">
                        <a href={ '/'} class="mr-5 text-[#CCD6F1] before:content-['1.'] before:text-lightOrange hover:text-lightOrange"> About</a>
                        <a href={ '/'} class="mr-5 text-[#CCD6F1] before:content-['2.'] before:text-lightOrange hover:text-lightOrange"> Experience</a>
                        <a href={ '/'} class="mr-5 text-[#CCD6F1] before:content-['3.'] before:text-lightOrange hover:text-lightOrange"> Work</a>
                        <a href={ '/'} class="mr-5 text-[#CCD6F1] before:content-['4.'] before:text-lightOrange hover:text-lightOrange"> Contact</a>
                    </nav>
                    <button className="inline-flex font-mono items-center px-4 py-2 text-base ml-3 text-lightOrange bg-transparent rounded focus:outline-none hover:bg-gray-200 md:mt-0 border-lightOrange border-[1px]">
                        Resume
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
