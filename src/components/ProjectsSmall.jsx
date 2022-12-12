import React from "react";
import tw, { styled } from "twin.macro";
import { BsOctagon } from "react-icons/bs"
import musicApp from './../assets/musicApp.png'
const HeaderDiv = styled.div(() => [
    tw`py-24`,
]);
const HeadingDiv = styled.div(() => [
    tw`flex items-center mt-2 mb-10 text-lightOrange` 
])
const HeadingLine = styled.div(() => [
    tw`block h-[1px] w-72 bg-lightestnavy ml-5`
])

const HeadingH1 = styled.h1(() => [
    tw`text-2xl leading-5 text-darkOrange `
])
const UlProject = styled.ul(() => [
    tw``
])
const LiProject = styled.li(() => [
    tw`grid grid-cols-12`
])
const DivContent = styled.div(() => [
    tw`text-right row-span-full col-start-1 col-end-13 z-20`
])
const DivImage = styled.div(() => [
    tw`row-span-full col-start-1 col-end-13 `
])
const UlContent = styled.ul(() => [
    tw`flex justify-start text-slate flex-wrap z-20 mt-6 mb-3`
])
const LiContent = styled.li(() => [
    tw`ml-5 mb-2 `
])
const DivLinks = styled.div(() => [
    tw`flex h-7 justify-start text-slate mt-2 gap-3`
])
const DivPar = styled.div(() => [
    tw`lg:bg-lightnavy p-5 text-lg text-lightslate `
])
const Projects = () => {
  return (
    <div className="py-24 ">
        <div className="flex items-center mt-2 mb-10 text-lightOrange">
            <h1 className='mr-2.5 '>03.</h1>
            <h1 className="text-2xl leading-5 text-darkOrange ">Some Things I've Built</h1>
            <div className="block h-[1px] w-72 bg-lightestnavy ml-5"/>
        </div>
        <ul>
            <li className="grid grid-cols-12">
                <div className="row-span-full col-start-1 col-end-13 relative opacity-20">
                    <div className="absolute bg-lightOrange w-[901px] h-[460px] rounded-xl"></div>
                     <img src={musicApp} className='rounded-xl w-50 grayscale mix-blend-multiply'/>
                
                </div>
                <div className="  rounded-xl text-left row-span-full col-start-1 col-end-13 z-20 ">
                    <div>
                        <p className='text-lightOrange my-2 text-[13px] font-mono leading-[17px] opacity-100'>Featured Project</p>
                        <h3 className='text-[28px] text-[#ff8c00] mb-4'>Spotify Clone</h3>
                        <DivPar>
                           <p>A concept for a web app. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</p> 
                        </DivPar>
                        <UlContent>
                            <LiContent>Vs Code</LiContent>
                            <LiContent>Sublime Text</LiContent>
                            <LiContent>Atom</LiContent>
                            <LiContent>iTerm2</LiContent>
                            <LiContent>Hyper</LiContent>
                        </UlContent>
                        <DivLinks>
                        <svg  xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        <svg  xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </DivLinks>
                    </div>
                </div>
            </li>
            <li>
                <div className="">
                    <div>
                        <p className='text-lightOrange my-2 text-[13px] font-mono leading-[17px]'>Featured Project</p>
                        <h3 className='text-[28px] text-[#ff8c00] mb-4'>Spotify Clone</h3>
                        <DivPar>
                           <p>A concept for a web app. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</p> 
                        </DivPar>
                        <UlContent>
                            <LiContent>Vs Code</LiContent>
                            <LiContent>Sublime Text</LiContent>
                            <LiContent>Atom</LiContent>
                            <LiContent>iTerm2</LiContent>
                            <LiContent>Hyper</LiContent>
                        </UlContent>
                        <DivLinks>
                        <svg  xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        <svg  xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </DivLinks>
                    </div>
                </div>
                <div className="row-span-full col-start-1 col-end-13 relative">
                    <div className="absolute bg-lightOrange w-[240px] h-[240px] rounded-xl"></div>
                     <img src={musicApp} className='w-50'/>
                
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Projects