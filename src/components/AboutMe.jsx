import React from 'react'
import tw, { styled } from 'twin.macro'
import cover from './../assets/cover.jpg'

const MeSection = styled.section(() => [
    tw`lg:mx-[150px] py-24`
])

const InnerDiv = styled.div(() => {
    tw`grid grid-cols-2 gap-12 `
})
const AboutDiv = styled.div(() => {
    tw`col-span-3 bg-black`
})
const PhotoDiv = styled.div(() => {
    tw`col-span-2 bg-blue-100`
})

const AboutMe = () => {
  return (
    <section className='lg:mx-[150px] py-24'>
        <div className='flex items-center mt-2 mb-10 text-lightOrange'>
            <h1 className='mr-2.5'>01.</h1>
            <h1 className='text-2xl leading-5 text-darkOrange'>About me</h1>
            <div className='block h-[1px] w-72 bg-lightestnavy ml-5'/>
        </div>
        <div className='grid'></div>
        <div className='grid grid-cols-10 gap-12'>
            <div className='col-span-6 2fr text-slate'>
                <div>
                <p className='mb-3.5 '>Hello! My name is Matthew and I enjoy creating things that live on the internet. My intrest in the web started back when I built my first computer in elementary school. Since then I have lived on the internet and embraced its culture.</p>
                <p className='mb-3.5'>stFa-forward I have completed a bootcamp and have been programming every single day furthering my skills</p>
                <p className='mb-3.5'>I also recently have been coding alot of projects on my github.</p>
                </div>
                <ul className='grid grid-cols-2'>
                    <li className='before:content-["▹"] before:text-lightOrange'>{`Javascript (ES6+)`}</li>
                    <li className='before:content-["▹"] before:text-lightOrange'>{`React`}</li>
                    <li className='before:content-["▹"] before:text-lightOrange'>{`Node.js`}</li>
                    <li className='before:content-["▹"] before:text-lightOrange'>{`TypeScript`}</li>
                    <li className='before:content-["▹"] before:text-lightOrange'>{`React`}</li>
                    <li className='before:content-["▹"] before:text-lightOrange'>{`React`}</li>
                </ul>
            </div>
            <div className='relative col-span-4'>
                <div className='top-5 left-5 absolute w-[240px] h-[240px] rounded-xl z-0 border-lightOrange border-2'></div>
                <div className='absolute bg-lightOrange w-[240px] h-[240px] rounded-xl'></div>
                <img src={cover} alt='cover' className='w-[240px] h-[240px] rounded-xl z-11 grayscale mix-blend-multiply hover:grayscale-0 hover:mix-blend-normal' ></img>
            </div>
        </div>
    </section>
  )
}

export default AboutMe