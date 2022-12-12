import React from "react";
import tw, { styled } from "twin.macro";
import { BsOctagon } from "react-icons/bs"
const HeaderDiv = styled.div(() => [
    tw`flex flex-col flex-wrap items-center justify-between min-w-full px-12 text-5xl md:flex-row`,
]);
const LogoA = styled.a(() => [
    tw`relative flex items-center mb-4 font-medium text-gray-900 md:mb-0`,
])

const NavSec = styled.nav(() => [
    tw`flex flex-wrap items-center justify-center text-base md:ml-auto`
])

const Button = styled.nav(() => [
    tw`inline-flex font-mono items-center px-4 py-2 text-base ml-3 text-lightOrange bg-transparent rounded focus:outline-none hover:bg-gray-200 md:mt-0 border-lightOrange border-[1px]`
])
const NavLinks = styled.a(() => [
    tw`mr-5 hover:text-gray-900 before:content-['1.'] before:text-lightOrange max-w-full`
])
const Header = () => {
    return (
        <header class="text-gray-600 body-font flex justify-between align-center h-24 fixed min-w-full">
            <HeaderDiv >
                <LogoA href={ '/'}>
                    <BsOctagon size={45} color="#ffa500" />
                    <span class="ml-3 text-3xl font-[Proxima Nova] text-lightOrange absolute right-[9px] top-1  ">M</span>
                </LogoA>
                <NavSec class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a href={ '/'} class="mr-5 text-[#CCD6F1] before:content-['1.'] before:text-lightOrange hover:text-lightOrange"> About</a>
                    <a href={ '/'} class="mr-5 text-[#CCD6F1] before:content-['2.'] before:text-lightOrange hover:text-lightOrange"> Experience</a>
                    <a href={ '/'} class="mr-5 text-[#CCD6F1] before:content-['3.'] before:text-lightOrange hover:text-lightOrange"> Work</a>
                    <a href={ '/'} class="mr-5 text-[#CCD6F1] before:content-['4.'] before:text-lightOrange hover:text-lightOrange"> Contact</a>
                </NavSec>
                <Button>
                    Resume
                </Button>
            </HeaderDiv>
        </header>

    );
};

export default Header;
