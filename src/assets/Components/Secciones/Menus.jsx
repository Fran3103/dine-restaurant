
import divide from '../../images/patterns/pattern-divide.svg'

import salmonMobile from '../../images/homepage/salmon-mobile.webp'
import salmonTablet from '../../images/homepage/salmon-desktop-tablet.webp'
import salmonDesktop from '../../images/homepage/salmon-desktop-tablet@2x.webp'

import filetMobile from '../../images/homepage/beef-mobile.webp'
import filetTablet from '../../images/homepage/beef-desktop-tablet.webp'
import filetDesktop from '../../images/homepage/beef-desktop-tablet@2x.webp'

import mousseMobile from '../../images/homepage/chocolate-mobile.webp'
import mousseTablet from '../../images/homepage/chocolate-desktop-tablet.webp'
import mousseDesktop from '../../images/homepage/chocolate-desktop-tablet@2x.webp'
const Menus = () => {
  return (
    <div className="bg-Cod-Gray m-auto ">
        <div className='flex flex-col justify-center items-center text-center max-w-[1440px] p-6 mb-12 pb-12 :flex-row'>
            <div className='flex flex-col items-center justify-center  gap-4 my-12'>
                <img src={divide} alt="divisor" />
                <h2 className='text-white text-2xl w-[240px] font-semibold'> A few highlights from our menu</h2>
                <p className='text-white font-light text-base mx-1 w-[445px] md:text-lg md:w-[370px]'>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
            </div>

            <div className='flex flex-col justify-center items-center gap-5 max-w-[1440px] w-full md:w-[640px]'>
                
                <div className='flex flex-col justify-center items-center  md:flex-row   md:justify-start w-full' >
                    <img src={salmonMobile} alt="salmon"  className=' md:hidden xl:flex'/>
                    <div className='relative'>
                        <img src={salmonTablet} alt="salmon"  className='hidden md:flex xl:hidden relative z-10 '/>
                        <img src={salmonDesktop} alt="salmon"  className='hidden  xl:flex relative z-10 w-72'/>
                        <img src={divide} alt="divisor" className='hidden md:flex absolute top-4 z-0 -right-10'/>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3 mt-5 md:items-start ml-28  md:text-left'>
                        <h3 className='text-white text-lg font-medium'>Seared Salmon Fillet</h3>
                        <p className='text-white font-light mx-12 text-xs leading-5  md:mx-0 md:mr-20'>Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
                    </div>
                </div>
                <hr className='hidden md:flex bg-white w-full h-[1px] '/>

                <div className='flex flex-col justify-center items-center  md:flex-row   md:justify-start w-full'>
                    <img src={filetMobile} alt="beef" className=' md:hidden xl:flex'/>
                    <div className='relative'>
                        <img src={filetTablet} alt="beef" className='hidden md:flex xl:hidden relative z-10 '/>
                        <img src={filetDesktop} alt="beef" className='hidden  xl:flex relative z-10 '/>
                        <img src={divide} alt="divisor"  className='hidden md:flex absolute top-4 z-0 -right-10'/>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3 mt-5 md:items-start ml-28   md:text-left'>
                        <h3 className='text-white text-lg font-medium'>Rosemary Filet Mignon</h3>
                        <p className='text-white font-light mx-12 text-xs leading-5  md:mx-0 md:mr-20'>Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center relative  md:flex-row   md:justify-start w-full'>
                    <hr className='hidden md:flex bg-white w-full h-[1px] absolute top-0'/>
                    <img src={mousseMobile} alt="chocolate" className=' md:hidden xl:flex' />
                    <div className='relative mt-3'>
                        <img src={mousseTablet} alt="chocolate" className='hidden md:flex xl:hidden relative z-10 '/>
                        <img src={mousseDesktop} alt="chocolate" className='hidden  xl:flex relative z-10'/>
                        <img src={divide} alt="divisor"  className='hidden md:flex absolute top-4 z-0 -right-10'/>
                    </div>
                   <div className='flex flex-col justify-center items-center gap-3 mt-5 md:items-start ml-28 md:text-left'>
                        <h3 className='text-white text-lg font-medium'>Summer Fruit Chocolate Mousse</h3>
                        <p className='text-white font-light mx-12 text-xs  leading-5 md:mx-0 md:mr-20'>Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
                   </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Menus