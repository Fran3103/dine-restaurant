import curveLeft from '../../images/patterns/pattern-curve-top-left.svg'
import curveRight from '../../images/patterns/pattern-curve-top-right.svg'

import divide from '../../images/patterns/pattern-divide.svg'
import lines from '../../images/patterns/pattern-lines.svg'

import img1Mobile from '../../images/homepage/enjoyable-place-mobile.webp'
import img1Tablet from '../../images/homepage/enjoyable-place-tablet.webp'
import img1Desktop from '../../images/homepage/enjoyable-place-desktop.webp'

import img2Mobile from '../../images/homepage/locally-sourced-mobile.webp'
import img2Tablet from '../../images/homepage/locally-sourced-tablet.webp'
import img2Desktop from '../../images/homepage/locally-sourced-desktop@2x.webp'

const Section = () => {
  return (
    <div  className='relative  m-auto flex items-center justify-center z-20 bg-white '>
        <div className='max-w-[1440px] m-auto pb-12 md:mb-0  w-full relative z-50   '>
            <div className='flex flex-col justify-center items-center  text-center gap-7 mt-[-70px] md:mt-[-60px]  xl:flex-row xl:justify-start xl:ml-20 z-50  '>
                <img src={img1Mobile} alt="imagen mobile"  className=' md:hidden    shadow-2xl  -mt-12 '/>
                <img src={img1Tablet} alt="imagen tablet"  className='hidden md:flex  xl:hidden shadow-2xl -mt-12'/>
                <img src={img1Desktop} alt="imagen desktop"  className='hidden   xl:flex  shadow-2xl -mt-12'/>
                <div className='flex flex-col justify-center items-center gap-6 mx-6 xl:text-left xl:items-start xl:ml-20 '>
                    <img src={divide} alt="divide" />
                    <h2 className='text-Cod-Gray text-3xl mx-12 font-bold md:w-[300px] md:text-4xl xl:mx-0 xl:text-5xl xl:w-[400px] '>Enjoyable place for all the family</h2>
                    <p className='md:w-[360px] xl:text-xl xl:w-[450px]'>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
                </div>    
                <img src={curveRight} alt="curva izquierda" className='hidden md:flex absolute right-96 top-40 xl:top-60 xl:-left-[500px] w-full' />
            </div>
         
            <div className='flex flex-col   justify-center items-center text-center gap-7 mt-16  relative xl:flex-row-reverse xl:justify-start xl:ml-20 xl:gap-0   '>
                    <div className='relative md:mb-5 xl:mr-12  xl:mb-0'>
                        <img src={img2Mobile} alt="imagen mobile"  className='md:hidden    shadow-2xl'/>
                        <img src={img2Tablet} alt="imagen tablet"  className='hidden md:flex  xl:hidden relative z-50 top-0 '/>
                        <img src={img2Desktop} alt="imagen desktop"  className='hidden   xl:flex  relative z-30 max-w-[540px] top-32 right-6'/>
                        <img src={lines} alt="lines" className='hidden md:flex absolute -right-16 top-56 z-40'/>
                    </div>
                        
                    <div className='flex flex-col justify-start items-center gap-6 mx-6 relative  md:w-full md:h-[250px] xl:text-left xl:items-start  xl:mx-0'>
                        <img src={divide} alt="divide" />
                        <h2 className='text-Cod-Gray text-3xl mx-12 font-bold md:w-[300px] md:text-4xl xl:mx-0 xl:text-5xl xl:w-[400px] '>The most locally sourced food</h2>
                        <p className='md:w-[370px] xl:text-xl xl:w-[450px]'>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
               
                    </div> 
                    
                </div>

                <div className=' w-full bottom-0 -right-96 absolute h-[210px] '>

                    <img src={curveLeft} alt="curva derecha" className=' xl:flex w-full h-80 absolute  left-0  bottom-0 -z-10 '  />   
                </div>
        
        </div>
    </div>
  )
}

export default Section