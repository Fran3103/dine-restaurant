
import logo from '../../images/logo.svg'
//className='mt-[-480px] xxs:mt-[-340px] xs:mt-[-90%] flex z-10 relative flex-col gap-7 xs:gap-4 md:gap-6 text-center p-4 justify-center items-center lg:items-start max-w-[680px] m-auto bg-Cod-Gray pb-12 lg:mt-[-400px] lg:text-left lg:mx-0  lg:absolute  lg:bg-opacity-0'
const Header = () => {
  return (
    <div className='relative w-screen bg-Cod-Gray m-auto flex items-center justify-center lg:justify-start  '>
        <div className='max-w-[1440px] m-auto  w-full h-[748px] lg:h-[840px] bg-mobile md:bg-tablet xl:bg-desktop bg-cover  flex flex-col gap-6 justify-center items-center text-center xl:items-start xl:text-left '>
            {/*<div className=''>
                <img src={imgMobile} alt="principal movil"  className=' relative xxs:hidden '/>
                <img src={imgTablet} alt="principal movil"  className='hidden xxs:flex lg:hidden relative '/>
                <img src={imgDesktop} alt="principal movil" className='hidden lg:flex relative ' />
            </div>*/}
            
        <img src={logo} alt="logo"  className=' w-20  mt-[25%] sm:mt-72 md:mt-[350px] lg:mt-[450px] xl:mt-[-50px] xl:ml-20 xl:w-28  '/>
        <div className='flex flex-col gap-4 items-center xl:items-start xl:ml-20 xl:w-[500px] xl:mt-32'>
            <h1 className='text-white  font-light text-4xl sm:text-5xl mx-12 leading-tight sm:mx-40 md:mx-64 xl:mx-0 xl:text-7xl '>Exiquisite dining since 1989</h1>        
            <p className='text-white mx-6 leading-relaxed sm:text-xl  md:mx-40 xl:mx-0 xl:text-2xl font-light'>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
            <button className='border border-white py-4 mt-12 px-6 text-white hover:text-Cod-Gray hover:bg-white font-bold tracking-widest lg:ml-12 lg:text-xl xl:ml-0 xl:px-16 xl:py-5 cursor-pointer'>BOOK A TABLE</button>
        </div>
            
        </div>
    </div>
  )
}

export default Header