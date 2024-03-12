
//import { useState } from 'react'
//import logo from '../images/logo.svg'
//import curveRight from '../images/patterns/pattern-curve-bottom-right.svg'
//import lines from '../images/patterns/pattern-lines.svg'
//import { Link } from 'react-router-dom'

//const Form = () => {


//    const [contador, setContador] = useState(4)
//    const [requerido, setRequerido] = useState(false)
//    const [formData, setFormData] = useState({
//        name: '',
//        email: '',
//        dia:'',
//        mes:'',
//        año: '',
//        hora: '',
//        minuto:''
//      });
    
//    //  const handleChange = (e) => {
//    //    setFormData({
//    //      ...formData,
//    //      [e.target.name]: e.target.value
//    //    });
//    //  };
    
//      const handleSubmit = (e) => {
//        e.preventDefault();
//        // Aquí podrías enviar los datos del formulario
      
//        console.log(formData)
       
//      };

//    const suma = ()=> setContador( contador + 1)

//    const resta = () => {
//        if (contador  > 1 ){
//            setContador(contador -1)
//        }
//    }

//  return (
//    <div className=' m-auto '>
//            <div className='max-w-[1440px] m-auto bg-bookingMb sm:bg-bookingTb xl:bg-bookingDt bg-no-repeat  bg-contain  '>
//                <div className='   text-center flex flex-col justify-start items-center gap-12 pt-20 xl:items-start xl:ml-20  xl:text-left xl:pb-60 '>
//                <Link to='/' >
//                        <img src={logo} alt="logo" />
//                    </Link>

//                    <div className='flex flex-col gap-4 text-white max-w-[700px]'>
//                        <h1 className='text-4xl font-thin md:text-5xl xl:text-6xl '>Reservations</h1>
//                        <p className='font-thin px-4 tracking-wider  md:w-[600px] md:text-xl xl:text-2xl xl:px-0'>
//                            We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.
//                        </p>

//                        <button className='border border-white py-4 mt-2 md:mt-7 md:mb-12 w-60 m-auto text-white hover:text-Cod-Gray hover:bg-white tracking-[4px] lg:text-xl  xl:py-5  cursor-pointer uppercase md:hidden'>reserve place</button>
//                    </div>
//                </div>
//                <div className='mt-40 sm:mt-80 relative bg-white w-full xl:mt-0'>
//                    <img src={curveRight} alt="fondo"  className='hidden xl:flex relative  top-0 h-full'/>
//                    <img src={lines} alt="lineas" className='hidden xl:flex absolute top-40 right-[50%] ' />
//                    <div className='w-full p-4  bg-white  mb-20 md:-mt-32 top-0  xl:absolute xl:right-0 xl:bottom-60 xl:mt-0 xl:p-0'>
//                        <form action="#" className='w-full  flex flex-col shadow-2xl p-12 gap-4 -mt-32 bg-white max-w-[500px] m-auto xl:p-12 xl:bottom-56 xl:relative xl:left-56'>
                    
//                            <input type="text" name="name" id=""  placeholder='Name' value={formData.name} className='p-3 border-b-[1px] text-xl border-ShuttleGray' />
//                            <input type="email" name="Email" id="" placeholder='Email' value={formData.email} className='p-3 border-b-[1px] text-xl border-ShuttleGray'/>
//                            <div className='flex flex-col md:flex-row justify-between w-full items-center'>
//                                <label className='w-60 text-bold text-xl'>Pick a date</label>
//                                <p className={requerido ? 'flex text-red ' : 'hidden'}>This field is required</p>
//                                <div className='flex gap-2 w-full items-center justify-between md:justify-end md:gap-7 '>
//                                <input type="text" required name="" id=""placeholder='MM' value={formData.mes} className='w-20  md:w-16 p-3 border-b-[1px]  border-ShuttleGray'/>
                                
//                                <input type="text"  required name="" id=""  placeholder='DD' value={formData.dia} className='w-20  md:w-16 p-3 border-b-[1px]  border-ShuttleGray'/>
                                
//                                <input type="text" required placeholder='YYYY' value={formData.año} className='w-20 md:w-16  p-3 border-b-[1px]  border-ShuttleGray' />

//                                </div>
//                            </div>
//                            <div className='flex flex-col md:flex-row justify-between w-full items-center'>
//                                <label className='w-60 text-bold text-xl'> Pick a time</label>
//                                <p>This field is required</p>
//                                <div className='flex gap-2 w-full items-center justify-between md:justify-end md:gap-7 ' >
//                                    <input required type="text" name="hora" id="" placeholder='09' value={formData.hora} className='w-20 md:w-16   p-3 border-b-[1px]  border-ShuttleGray'/>
//                                    <input required type="text" name="hora" id="" placeholder='00' value={formData.minuto} className='w-20 md:w-16   p-3 border-b-[1px]  border-ShuttleGray'/>
//                                    <select name="" id="" className='text-xl text-Beaver border-b-[1px]  md:w-16 md:text-base border-ShuttleGray py-4 cursor-pointer'>
//                                        <option value="AM">AM</option>
//                                        <option value="PM">PM</option>
//                                    </select>
                                    
//                                </div>
//                            </div>
//                            <div className='flex items-center justify-around mt-2 border-b-[1px]  border-ShuttleGray p-2 '>
//                                <p type='buttom' onClick={resta} className='text-Beaver font-bold text-lg cursor-pointer'>-</p>
//                                <p className='font-bold text-lg'>{contador} peopel</p>
//                                <p onClick={suma} className='text-Beaver font-bold text-lg cursor-pointer'>+</p>
//                            </div>
//                            <button type='submit' onClick={handleSubmit} className='border border-white hover:border-Cod-Gray py-4 mt-2 md:mt-7 bg-Cod-Gray w-full m-auto  text-white hover:text-Cod-Gray hover:bg-white tracking-[4px] lg:text-xl  xl:py-5  cursor-pointer uppercase '>make reservation</button>
//                        </form>
//                    </div>
//            </div>
        
//            </div>
//    </div>
//  )
//}

//export default Form


import  { useState } from 'react';
import logo from '../images/logo.svg';
import curveRight from '../images/patterns/pattern-curve-bottom-right.svg';
import lines from '../images/patterns/pattern-lines.svg';
import { Link } from 'react-router-dom';

const Form = () => {
    const [contador, setContador] = useState(4);
    const [requerido, setRequerido] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dia: '',
        mes: '',
        año: '',
        hora: '',
        minuto: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías enviar los datos del formulario
        const requiredFields = ['name', 'email', 'dia', 'mes', 'año', 'hora'];
        const areAnyFieldsEmpty = requiredFields.some(field => formData[field] === '');
        setRequerido(areAnyFieldsEmpty);

    };

    const suma = () => setContador(contador + 1);

    const resta = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };

    return (
        <div className='m-auto'>
            <div className='max-w-[1440px] m-auto bg-bookingMb sm:bg-bookingTb xl:bg-bookingDt bg-no-repeat bg-contain'>
                <div className='text-center flex flex-col justify-start items-center gap-12 pt-20 xl:items-start xl:ml-20 xl:text-left xl:pb-60'>
                    <Link to='/'>
                        <img src={logo} alt='logo' />
                    </Link>

                    <div className='flex flex-col gap-4 text-white max-w-[700px]'>
                        <h1 className='text-4xl font-thin md:text-5xl xl:text-6xl '>Reservations</h1>
                        <p className='font-thin px-4 tracking-wider md:w-[600px] md:text-xl xl:text-2xl xl:px-0'>
                            We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.
                        </p>

                        <button className='border border-white py-4 mt-2 md:mt-7 md:mb-12 w-60 m-auto text-white hover:text-Cod-Gray hover:bg-white tracking-[4px] lg:text-xl xl:py-5 cursor-pointer uppercase md:hidden'>reserve place</button>
                    </div>
                </div>
                <div className='mt-40 sm:mt-80 relative bg-white w-full xl:mt-0'>
                    <img src={curveRight} alt='fondo' className='hidden xl:flex relative top-0 h-full' />
                    <img src={lines} alt='lineas' className='hidden xl:flex absolute top-40 right-[50%]' />
                    <div className='w-full p-4 bg-white mb-20 md:-mt-32 top-0 xl:absolute xl:right-0 xl:bottom-60 xl:mt-0 xl:p-0'>
                        <form action='#' className='w-full flex flex-col shadow-2xl p-12 gap-4 -mt-32 bg-white max-w-[500px] m-auto xl:p-12 xl:bottom-56 xl:relative xl:left-56'>

                            <input type='text' name='name' placeholder='Name' value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={requerido ?'p-3 border-b-[1px] text-xl border-red': 'p-3 border-b-[1px] text-xl border-ShuttleGray'}  />
                            <input type='email' name='email' placeholder='Email' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={requerido ?'p-3 border-b-[1px] text-xl border-red': 'p-3 border-b-[1px] text-xl border-ShuttleGray'} />

                            <div className='flex flex-col md:flex-row justify-between w-full items-center relative'>

                                <label className='w-60 text-bold text-xl'>Pick a date</label>
                                <p className={requerido ? 'text-Beaver md:absolute  mr-28 md:mt-12' : 'hidden'}>This field is required</p>

                                <div className='flex gap-2 items-center justify-between md:justify-end md:gap-7 w-full'>
                                    <input type='text' required name='mes' placeholder='MM' value={formData.mes} onChange={(e) => setFormData({ ...formData, mes: e.target.value })} className={requerido ?'text-xl text-red border-b-[1px]  text-center w-20 md:w-16 md:text-base border-red py-4 cursor-pointer' : 'text-xl w-20 text-center text-Beaver border-b-[1px]  md:w-16 md:text-base border-ShuttleGray py-4 cursor-pointer'  } />

                                    <input type='text' required name='dia' placeholder='DD' value={formData.dia} onChange={(e) => setFormData({ ...formData, dia: e.target.value })} className={requerido ?'text-xl text-red border-b-[1px] w-20  text-center md:w-16 md:text-base border-red py-4 cursor-pointer' : 'text-xl w-20 text-center text-Beaver border-b-[1px]  md:w-16 md:text-base border-ShuttleGray py-4 cursor-pointer'  } />

                                    <input type='text' required placeholder='YYYY' value={formData.año} onChange={(e) => setFormData({ ...formData, año: e.target.value })} className={requerido ?'text-xl text-red border-b-[1px] w-20 md:w-16 text-center md:text-base border-red py-4 cursor-pointer' : 'text-xl w-20 text-center text-Beaver border-b-[1px]  md:w-16 md:text-base border-ShuttleGray py-4 cursor-pointer'  }/>
                                </div>
                            </div> 
                            <div className='flex flex-col md:flex-row justify-between w-full items-center'>
                                <label className='w-60 text-bold text-xl'> Pick a time</label>
                                <p className={requerido ? 'text-Beaver md:absolute  mr-28 md:mt-12' : 'hidden'}>This field is required</p>
                                <div className='flex gap-2 w-full items-center justify-between md:justify-end md:gap-7 ' >
                                    <input required type='text' name='hora' placeholder='09' value={formData.hora} onChange={(e) => setFormData({ ...formData, hora: e.target.value })} className={requerido ?'text-xl text-red border-b-[1px] w-20 md:w-16 text-center md:text-base border-red py-4 cursor-pointer' : 'text-xl w-20 text-center text-Beaver border-b-[1px]   md:w-16 md:text-base border-ShuttleGray py-4 cursor-pointer'  }/>
                                    <input required type='text' name='minuto' placeholder='00' value={formData.minuto} onChange={(e) => setFormData({ ...formData, minuto: e.target.value })} className={requerido ?'text-xl text-red border-b-[1px] w-20 md:w-16 text-center md:text-base border-red py-4 cursor-pointer' : 'text-xl w-20 text-center text-Beaver border-b-[1px]   md:w-16 md:text-base border-ShuttleGray py-4 cursor-pointer'  } />
                                    <select name=''className={requerido ?'text-xl text-red border-b-[1px] w-20 md:w-16  text-center md:text-base border-red py-5 cursor-pointer' : 'text-xl w-20 text-center text-Beaver border-b-[1px]  md:w-16 md:text-base border-ShuttleGray py-5 cursor-pointer'  }>
                                        <option value='AM'>AM</option>
                                        <option value='PM'>PM</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex items-center justify-around mt-2 border-b-[1px]  border-ShuttleGray p-2 '>
                                <p type='button' onClick={resta} className='text-Beaver font-bold text-lg cursor-pointer'>-</p>
                                <p className='font-bold text-lg'>{contador} people</p>
                                <p onClick={suma} className='text-Beaver font-bold text-lg cursor-pointer'>+</p>
                            </div>
                            <button type='submit' onClick={handleSubmit} className='border border-white hover:border-Cod-Gray py-4 mt-2 md:mt-7 bg-Cod-Gray w-full m-auto  text-white hover:text-Cod-Gray hover:bg-white tracking-[4px] lg:text-xl  xl:py-5  cursor-pointer uppercase '>make reservation</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
