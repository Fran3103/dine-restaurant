import logo from '../../images/logo.svg'
const Footer = () => {
  return (
    <div className='bg-Cod-Gray w-full p-12' >
        <div className='max-w-[1440px] m-auto flex flex-col justify-center items-center gap-9 md:flex-row md:items-start md:gap-40   xl:gap-20 md:ml-20'>
            <img src={logo} alt="logo" />
            <div className='m-auto flex flex-col justify-center items-center gap-9  md:justify-start md:items-start xl:flex-row xl:justify-around w-full '>
                <div  className='text-center text-white uppercase tracking-[2px] font-thin md:text-left flex flex-col gap-3'>
                    <p className='text-center text-white uppercase tracking-[2px] font-thin md:text-left'>Marthwaite, Sedbergh </p>
                    <p className='text-center text-white uppercase tracking-[2px] font-thin md:text-left'>Cumbria </p>
                    <p className='text-center text-white uppercase tracking-[2px] font-thin md:text-left'>+00 44 123 4567</p>
                </div>
                <div className='text-center text-white uppercase tracking-[2px] font-thin md:text-left flex flex-col gap-3'>
                    <p>OPEN TIMES</p>
                    <p>MON - FRI: 09:00 AM - 10:00 PM</p>
                    <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
                </div>
            </div>
        </div>

        <div className='flex m-auto gap-4 justify-center mt-12 text-white'>
        <p>Proyecto de <a href='https://www.frontendmentor.io/' target='Blank_'  className='hover:text-Ebony-Clay'>FrontEnd Mentor  </a></p>
        <p>||</p>
        <p>Realizado por <a href="https://www.linkedin.com/in/franco-aguirre-24855012a" target='Blank_' className='hover:text-Ebony-Clay'>Franco Aguirre</a></p>
        </div>
    </div>
  )
}

export default Footer