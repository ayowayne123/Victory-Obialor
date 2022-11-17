import React,{useState} from 'react';

function Newhome() {

    const [clicked, setClicked] = useState(false);

    const Clicker = () => {

      clicked?setClicked(false) : setClicked(true);
    }

  return (
    <div className='h-screen w-full flex flex-col items-center justify-center '>
      <div className={clicked ? 'switchedmain' : "group cursor-pointer h-full w-full flex items-center justify-center "}> 
        <div onClick={Clicker} className= {clicked ? 'switched showa' :' absolute h-96 w-60 bg-white rounded-md border border-black p-2 z-30'}>
        <span className='  h-full w-full bg-violet-300 border border-black rounded-md flex'>
            
        </span>
            </div> 
            <div className={clicked ? 'switched showb' :  'web origin-bottom-center    border border-black -rotate-[10deg] absolute h-96 z-20 w-60 bg-white rounded-md p-2'}>
        <span className='h-full w-full bg-red-300 border border-black rounded-md flex '>
            
        </span>
            </div>
            <div className={clicked ? 'switched showc' : 'web origin-bottom-center   -rotate-[20deg] z-10 absolute h-96 w-60 bg-white rounded-md border border-black p-2'}>
        <span className='h-full w-full bg-yellow-300 border border-black rounded-md flex '>
            
        </span>
            </div>
            <div className={clicked ? 'switched showd' : 'web origin-bottom-center   -rotate-[40deg] =z=10 absolute h-96 w-60 bg-white rounded-md border border-black p-2'}>
        <span className='h-full w-full bg-orange-300 border border-black rounded-md flex '>
            
        </span>
            </div>
            <div className={clicked ? 'switched showe' : 'web origin-bottom-center   -rotate-[30deg] absolute h-96 w-60 bg-white rounded-md border border-black p-2'}>
        <span className='h-full w-full bg-pink-800 border border-black rounded-md flex '>
            
        </span>
            </div>
            </div>
           </div>
  )
}

export default Newhome