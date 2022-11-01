import React from "react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container ">
      <div className="justify-center flex flex-col h-[70vh] w-full bg-gray-200 my-auto"> 
    <div className="grid grid-cols-2 self-center">
     <div className="flex flex-col text-lime-800">
      <span className="text-4xl font-bold text-black"> Victory Obialor </span> 
      <span  className="text-2xl font-semibold"> Graphic Designer </span>
      <span> Hi there!, My name is Victory Obialor a
        Multimedia designer. Below is my body
          of work portfolio </span></div> 
     
      </div>
      
      </div>
      <div className="bg-gray-400 grid h-16 text-white text-xl grid-cols-6">
      <Link className="hover:bg-gray-500 grid items-center justify-center" href='/about'>
      <span className=""> About Me</span>
      </Link>
      <Link className="hover:bg-gray-500 grid items-center justify-center" href='/'>
      <span> Brand Identity Designs</span>
      </Link>
      <Link className="hover:bg-gray-500 grid items-center justify-center" href='/'>
      <span> UI/UX Design</span>
      </Link>
      <Link className="hover:bg-gray-500 grid items-center justify-center" href='/'>
      <span> Music art Designs</span>
      </Link>
      <Link className="hover:bg-gray-500 grid items-center justify-center" href='/'>
      <span> Social Media Design</span>
      </Link>
      <Link className="hover:bg-gray-500 grid items-center justify-center" href='/'>
      <span> get in touch</span>
      </Link>
         </div>

    </div>
  )
}
