import { Link } from "react-router-dom";

const Booking = () => {
    return (
      <div className="bg-bookingMb md:bg-bookingTb xl:bg-bookingDt bg-cover bg-no-repeat h-[328px] md:h-[272px] w-full m-auto flex flex-col justify-center items-center    xl:flex-row  ">
        <div className="max-w-[1440px] m-auto flex flex-col justify-center items-center w-full h-full mt-10 gap-5 ">
            <h2 className='text-4xl text-center font-semibold text-white md:text-5xl  xl:pb-2'>Ready to make a reservation?</h2>
            <Link to='reservation'>
            
                <button className='border border-white py-4 mt-2 md:mt-7 md:mb-12 w-60 m-auto text-white hover:text-Cod-Gray hover:bg-white tracking-[4px] lg:text-xl  xl:py-5  cursor-pointer uppercase'>book a table</button>
            </Link>
        </div>
      </div>
    );
  };
  
  export default Booking;