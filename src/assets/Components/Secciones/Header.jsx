
import logo from '../../images/logo.svg'

const Header = () => {
  return (
    <div className='relative w-screen bg-Cod-Gray m-auto flex items-center justify-center lg:justify-start md:pb-20 '>
        <div className='max-w-[1440px] m-auto  w-full h-[748px] lg:h-[840px] bg-mobile md:bg-tablet xl:bg-desktop bg-cover  flex flex-col gap-6 justify-center items-center text-center xl:items-start xl:text-left '>
            
        <img src={logo} alt="logo"  className=' w-20  mt-[25%] sm:mt-72 md:mt-[350px] lg:mt-[450px] xl:mt-[-50px] xl:ml-20 xl:w-28  '/>
        <div className='flex flex-col gap-4 items-center xl:items-start xl:ml-20 xl:w-[500px] xl:mt-32'>
            <h1 className='text-white  font-light text-4xl sm:text-5xl mx-12 leading-tight sm:mx-40 md:mx-64 xl:mx-0 xl:text-7xl '>Exiquisite dining since 1989</h1>        
            <p className='text-white mx-6 leading-relaxed sm:text-xl  md:mx-40 xl:mx-0 xl:text-2xl font-light'>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
            <button className='border border-white py-4 mt-12 md:mt-7 md:mb-12 px-6 text-white hover:text-Cod-Gray hover:bg-white font-bold tracking-widest lg:ml-12 lg:text-xl xl:ml-0 xl:px-16 xl:py-5 cursor-pointer'>BOOK A TABLE</button>
        </div>
            
        </div>
    </div>
  )
}

export default Header