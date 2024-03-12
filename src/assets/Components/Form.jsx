
import  { useState } from 'react';
import logo from '../images/logo.svg';
import curveRight from '../images/patterns/pattern-curve-bottom-right.svg';
import lines from '../images/patterns/pattern-lines.svg';
import { Link } from 'react-router-dom';

const Form = () => {
    const [contador, setContador] = useState(4);
    const [requerido, setRequerido] = useState(false)
    const [reserva, serReserva] = useState(false)
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
        if (!areAnyFieldsEmpty) {
            serReserva(true);
        }
        
    };
    
    const meses = [
        'January', 'February', 'March' , 'April', 'May', 'June',
         'July' ,'August' ,'September' ,'October' ,'November' ,'December'
    ];
    const mesReserva = meses[formData.mes - 1]
    

    const suma = () => setContador(contador + 1);

    const resta = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };
    //m-auto bg-bookingMb sm:bg-bookingTb xl:bg-bookingDt bg-no-repeat bg-contain'
    return (
        <div className='m-auto'>
            <div className='w-full bg-Cod-Gray m-auto '>
                <div className='max-w-[1440px] text-center w-full flex flex-col justify-start items-center gap-12 pt-20 xl:items-start bg-bookingMb sm:bg-bookingTb md:bg-bookingDt bg-no-repeat bg-cover  pb-40  xl:ml-70 xl:text-left xl:pb-60 m-auto xl:pl-20 '>
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
            </div>
            <div className='-mt-3 sm:-mt-4 md:mt-32 relative bg-white w-full xl:mt-0'>
                    <img src={curveRight} alt='fondo' className='hidden xl:flex relative top-0 h-full' />
                    <img src={lines} alt='lineas' className='hidden xl:flex absolute top-40 right-[50%]' />
                    <div className='w-full p-4 bg-white mb-20 md:-mt-32 top-0 xl:absolute xl:right-0 xl:bottom-60 xl:mt-0 xl:p-0'>
                        <form action='#' className={reserva ? 'hidden':'w-full flex flex-col shadow-2xl p-12 gap-4 -mt-32 bg-white max-w-[500px] m-auto xl:p-12 xl:bottom-56 xl:relative xl:left-56'}>

                            <input type='text' name='name' placeholder='Name' value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={requerido ?'p-3 border-b-[1px] text-xl border-red': 'p-3 border-b-[1px] text-xl border-ShuttleGray'}  />
                            <input type='email' name='email' placeholder='Email' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={requerido ?'p-3 border-b-[1px] text-xl border-red': 'p-3 border-b-[1px] text-xl border-ShuttleGray'} />

                            <div className='flex flex-col md:flex-row justify-between w-full items-center relative'>

                                <label className='w-60 text-bold text-xl'>Pick a date</label>
                                <p className={requerido ? 'text-Beaver md:absolute  mr-28 md:mt-12' : 'hidden'}>This field is required</p>

                                <div className='flex gap-2 items-center justify-between md:justify-end md:gap-7 w-full'>
                                    <input type='number'min="1" max="12" required name='mes' placeholder='MM' value={formData.mes} onChange={(e) => setFormData({ ...formData, mes: e.target.value })} className={requerido ?'text-xl text-red border-b-[1px]  text-center w-20 md:w-16 md:text-base border-red py-4 cursor-pointer' : 'text-xl w-20 text-center text-Beaver border-b-[1px]  md:w-16 md:text-base border-ShuttleGray py-4 cursor-pointer'  } />

                                    <input type='number' required name='dia' min="1" max="31" placeholder='DD' value={formData.dia} onChange={(e) => setFormData({ ...formData, dia: e.target.value })} className={requerido ?'text-xl text-red border-b-[1px] w-20  text-center md:w-16 md:text-base border-red py-4 cursor-pointer' : 'text-xl w-20 text-center text-Beaver border-b-[1px]  md:w-16 md:text-base border-ShuttleGray py-4 cursor-pointer'  } />

                                    <input type='number' required placeholder='YYYY'min="2024" max="2025"value={formData.año} onChange={(e) => setFormData({ ...formData, año: e.target.value })} className={requerido ?'text-xl text-red border-b-[1px] w-20 md:w-16 text-center md:text-base border-red py-4 cursor-pointer' : 'text-xl w-20 text-center text-Beaver border-b-[1px]  md:w-16 md:text-base border-ShuttleGray py-4 cursor-pointer'  }/>
                                </div>
                            </div> 
                            <div className='flex flex-col md:flex-row justify-between w-full items-center'>
                                <label className='w-60 text-bold text-xl'> Pick a time</label>
                                <p className={requerido ? 'text-Beaver md:absolute  mr-28 md:mt-12' : 'hidden'}>This field is required</p>
                                <div className='flex gap-2 w-full items-center justify-between md:justify-end md:gap-7 ' >
                                    <input required type='number' name='hora' min="09" max="23" placeholder='09' value={formData.hora} onChange={(e) => setFormData({ ...formData, hora: e.target.value })} className={requerido ?'text-xl text-red border-b-[1px] w-20 md:w-16 text-center md:text-base border-red py-4 cursor-pointer' : 'text-xl w-20 text-center text-Beaver border-b-[1px]   md:w-16 md:text-base border-ShuttleGray py-4 cursor-pointer'  }/>
                                    <input required type='number' min="0" max="59" name='minuto' placeholder='00' value={formData.minuto} onChange={(e) => setFormData({ ...formData, minuto: e.target.value })} className={requerido ?'text-xl text-red border-b-[1px] w-20 md:w-16 text-center md:text-base border-red py-4 cursor-pointer' : 'text-xl w-20 text-center text-Beaver border-b-[1px]   md:w-16 md:text-base border-ShuttleGray py-4 cursor-pointer'  } />
                                    <select name='horario'className={requerido ?'text-xl text-red border-b-[1px] w-20 md:w-16  text-center md:text-base border-red py-5 cursor-pointer' : 'text-xl w-20 text-center text-Beaver border-b-[1px]  md:w-16 md:text-base border-ShuttleGray py-5 cursor-pointer'  }>
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
                        <div className={reserva ? 'text-center text-3xl text-Cod-Gray w-full flex flex-col justify-center shadow-2xl p-12 gap-4 -mt-32 bg-white max-w-[500px] h-[500px] m-auto xl:p-12 xl:bottom-56 xl:relative xl:left-56 relative overflow-hidden' : 'hidden'}>
                            <img src={lines} alt="lines" className='absolute top-0 left-0' />
                            <h3 className='mt-12'>Reservation confirmed</h3>
                            <p>For the day  {formData.dia}  of {mesReserva} </p>
                            <p>Hour {formData.hora}:{formData.minuto} </p>
                            <p>Total number of people {contador}</p>
                            <img src={curveRight} alt="curver" className='absolute top-0 -left-20' />
                            <img src={lines} alt="lines" className='absolute bottom-0 right-0' />
                            <Link to='/'>
                                <button  className='border border-white hover:border-Cod-Gray py-4 mt-2 md:mt-7 bg-Cod-Gray w-full m-auto  text-white hover:text-Cod-Gray hover:bg-white tracking-[4px] lg:text-xl text-base xl:py-5  cursor-pointer uppercase '>finalize reservation</button>
                            </Link>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default Form;
