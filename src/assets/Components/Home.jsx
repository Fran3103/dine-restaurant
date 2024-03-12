import Booking from "./Secciones/Booking"
import Events from "./Secciones/Events"
import Header from "./Secciones/Header"
import Menus from "./Secciones/Menus"
import Section from "./Secciones/Section"


const Home = () => {
  return (
    <div className="overflow-hidden">
        <Header/>
        <Section/>
        <Menus/>
        <Events/>
        <Booking/>
     
    </div>
  )
}

export default Home