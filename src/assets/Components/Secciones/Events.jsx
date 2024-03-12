import familyDesktop from '../../images/homepage/family-gathering-desktop.webp'
import familyTablet from '../../images/homepage/family-gathering-tablet.webp'
import familyMobile from '../../images/homepage/family-gathering-mobile.webp'

import specialDesktop from '../../images/homepage/special-events-desktop.webp'
import specialTablet from '../../images/homepage/special-events-tablet.webp'
import specialMobile from '../../images/homepage/special-events-mobile.webp'

import socialDesktop from '../../images/homepage/social-events-desktop.webp'
import socialTablet from '../../images/homepage/social-events-tablet.webp'
import socialMobile from '../../images/homepage/social-events-mobile.webp'

import fondo from '../../images/patterns/pattern-curve-top-right.svg'
import lines from '../../images/patterns/pattern-lines.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const familia = {
        'titulo':'Family Gathering',
        'texto':'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.',
        'img': [familyDesktop, familyTablet, familyMobile]
    }
 const special = {
        'titulo':'Special Events',
        'texto':'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.',
        'img': [specialDesktop, specialTablet, specialMobile]
    }

    const social = {
        'titulo':'Social Events',
        'texto':'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.',
        'img': [socialDesktop, socialTablet, socialMobile]
    }


const Events = () => {

    const [activo1, setActivo1] = useState(true)
    const [activo2, setActivo2] = useState(false)
    const [activo3, setActivo3] = useState(false)

    
    const [select, setSelect] = useState (familia)
    

    

   const activarFamilia = ()=> 
   {
        setSelect(familia)
        setActivo1(true)
        setActivo2(false)
        setActivo3(false)

    }

    
   const activarSpecial = ()=> 
   {
        setSelect(special)
        setActivo1(false)
        setActivo2(true)
        setActivo3(false)

    }

    
   const activarSocial = ()=> 
   {
        setSelect(social)
        setActivo1(false)
        setActivo2(false)
        setActivo3(true)

    }






  return (
    <div className='relative -mt-12  m-auto   mb-12 xl:ml-20'>

        <div className='max-w-[1440px] w-full m-auto mt-12 flex flex-col justify-center items-center  xl:flex-row xl:justify-start   gap-12 p-6 xl:gap-32 '>
            <div className='relative mt-20 '>
                <img src={fondo} alt="fondo" className='hidden md:flex absolute z-0 -top-20 -left-44 w-full'/>
                <img src={lines} alt="lines" className='hidden md:flex absolute -top-8 -left-16 z-10' />
                <img src={select.img[2]} alt=" Mobile"className='shadow-2xl md:hidden'/>
                <img src={select.img[1]} alt=" Tablet" className='hidden md:flex shadow-2xl relative z-0 xl:hidden'/>
                <img src={select.img[0]} alt="desktop" className='hidden xl:flex  shadow-2xl z-10 relative'/>
                <div className='flex flex-col justify-center items-center gap-4 mt-12 md:flex-row md:justify-between xl:hidden'>
                    <div>
                        
                        <button onClick={activarFamilia} className={activo1 ? 'text-Cod-Gray uppercase text-xl tracking-widest font-semibold  md:text-base ':'text-ShuttleGray uppercase text-xl hover:text-Cod-Gray tracking-widest md:text-base'}><p>Family Gathering</p></button>
                        <hr className={activo1 ? 'text-Cod-Gray w-12 h-1 m-auto':'hidden'}/>
                    </div>
                    <div>
                      
                        <button onClick={activarSpecial} className={activo2 ? 'text-Cod-Gray uppercase tracking-widest font-semibold md:text-base text-xl':'text-ShuttleGray uppercase text-xl hover:text-Cod-Gray tracking-widest md:text-base'}><p>special events</p></button>
                        <hr className={activo2 ? 'text-Cod-Gray w-12 h-1 m-auto':'hidden'}/>
                    </div>
                    <div>
                       
                        <button onClick={activarSocial}className={activo3 ? 'text-Cod-Gray uppercase text-xl tracking-widest font-semibold md:text-base':'text-ShuttleGray uppercase text-xl hover:text-Cod-Gray tracking-widest md:text-base'}><p>social events</p></button>
                        <hr className={activo3 ? 'text-Cod-Gray w-12 h-1 m-auto':'hidden'}/>
                    </div>
                </div>
            </div>
            <div className='text-center flex flex-col gap-5 -mt-4 justify-center items-center m-auto xl:mt-40 xl:items-start xl:mx-0 relative'>
                <h2 className='text-3xl font-bold xl:text-5xl '>{select.titulo}</h2>
                <p className='font-semibold md:w-96 text-center m-auto xl:text-left xl:w-[500px] xl:text-xl '>{select.texto}</p>
                <Link to='/reservation'>
                    <button className='border border-Cod-Gray bg-Cod-Gray  py-4 mt-2 md:mt-7 md:mb-12 w-60 m-auto text-white hover:text-Cod-Gray hover:bg-white  tracking-[4px]  lg:text-xl xl:ml-0  xl:py-5 cursor-pointer '>BOOK A TABLE</button>
                </Link>

                <div className='hidden xl:flex flex-col gap-4 justify-center items-start'>
                    <div>
                    <hr className={activo1 ? 'absolute  -left-72 mt-3 w-56 z-0' : 'hidden'}/>
                        <button onClick={activarFamilia} className={activo1 ? 'text-Cod-Gray uppercase text-xl tracking-widest':'text-ShuttleGray uppercase text-xl hover:text-Cod-Gray tracking-widest'}><p>Family Gathering</p></button>
                    </div>
                    <div>
                    <hr className={activo2 ? 'absolute  -left-72 mt-3 w-56 z-0' : 'hidden'}/>
                        <button onClick={activarSpecial} className={activo2 ? 'text-Cod-Gray uppercase text-xl tracking-widest':'text-ShuttleGray uppercase text-xl hover:text-Cod-Gray tracking-widest'}><p>special events</p></button>
                    </div>
                    <div>
                    <hr className={activo3 ? 'absolute  -left-72 mt-3 w-56 z-0' : 'hidden'}/>
                        <button onClick={activarSocial}className={activo3 ? 'text-Cod-Gray uppercase text-xl tracking-widest':'text-ShuttleGray uppercase text-xl hover:text-Cod-Gray tracking-widest'}><p>social events</p></button>
                    </div>
                </div>
            </div>
        </div>



    </div>
  )
}

export default Events