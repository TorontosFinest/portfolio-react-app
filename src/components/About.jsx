import React from 'react'

 const About = () => {
  return (
   <div name='about' className='w-full h-screen bg-[#2e3243] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-orange-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Abdi, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>
              I'm an enthusiastic junior developer passionate about building full-stack web applications that improve the lives of those around me. I'm proficient in front-end web application development using  vanilla JavaScript,  React,  CSS, and HTML.  Furthermore, I also have skills in the development of the back-end side of applications using Express and Node. I recognize the importance of a strong, collaborative team as well as the process of design, analysis, and evaluation when building applications.</p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About;