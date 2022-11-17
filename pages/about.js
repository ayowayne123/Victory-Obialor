import React from 'react';

function About () {
  return (
    <div className='container'>About Me

        <div className='bg-gray-200 grid grid-cols-3'> 
        <div className='col-span-2 flex flex-col gap-4 justify-between m-4'>
            <span className='Bio flex flex-col'>
            <span className='text-3xl'> Bio</span>
            <span>
            Victory Kosisochim Obialor. Studied Graphic design i am seeking an opportunity in
            a reputable organization that can improve my skills and experience in the field of
            design and marketing which is highly competitive and offers professional career
            development. I believe that my educational background in the fields of Graphic design will make me a very competitive candidate to work in anycompanies that is
            willing to recruit my services. Fluent in various Adobe applications such Photoshop,
            Illustrator, lightroom, premiere pro, after effects, Indesign etc.
            </span>
            </span>
            <span className='Work flex flex-col '>
                <span className='text-3xl font-bold'>Work Experience</span>
                <span className='grid grid-cols-2 gap-6 '>
                    <span className='flex flex-col'>
                        <span className="font-bold">Graphic Designer  </span>
                        <span>Design Lab Advertising </span>
                        <span> Nov 2021-Present (3 months +) </span> </span>
                    <span className='flex flex-col'>
                        <span className="font-bold"> Assistant  </span>
                        <span>Break the Eyes Media </span>
                        <span> Dec 2020 -Present (2 years+) </span> </span>
                    <span className='flex flex-col'>
                        <span className="font-bold"> Graphic Designer </span>
                        <span>Multimix Academy </span>
                        <span>Feb 2021 - Nov 2021 (10 months ) </span> </span>
                    <span className='flex flex-col'>
                        <span className="font-bold">Media Director(volunteer) </span>
                        <span>TEDx CIU </span>
                        <span> March 2022 - April 2022(2 months)</span> </span>
                    <span className='flex flex-col'>
                        <span className="font-bold">Freelance </span>
                        <span> Sep 2018 - Present (3 years +)</span>
                        <span> </span> </span>
                </span>
            </span>
            <span className='Education flex flex-col'>
            <span className='text-3xl font-bold'>Education </span>
            <span>Cyprus International University </span>
            <span>2018 - 2022 </span>
            </span>
        </div>
        <div className='bg-gray-400'></div>
         </div>
    </div>
  )
}

export default About 