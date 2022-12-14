import React from 'react'

const HeroSection = () => {
  return (
      <section className='flex flex-col items-start justify-center min-h-screen mx-auto'>
        <div class="block">
          <h1 class="font-mono text-lightOrange text-[14px] mb-5">
            Hi, my name is
          </h1>
        </div>
        <div class=" block">
          <h2 className='text-[50px] font-semibold text-lightOrange'>Matthew Wardlow.</h2>
        </div>
        <div class="block">
          <h3 className='text-slate mt-[10px] text-[50px]'>I build things for the web</h3>
        </div>
        <div>
          <p className='max-w-xl mt-3 font-sans text-slate'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on finding my first fulltime role.</p>
        </div>
        <div>
          <button className='inline-block font-mono py-5 px-7 text-lightOrange bg-transparent mt-12 rounded focus:outline-none hover:bg-darkOrange hover:text-black md:mt-12 border-lightOrange border-[1px]'> Check out my Github!</button>
        </div>
      </section>
  );
};

export default HeroSection