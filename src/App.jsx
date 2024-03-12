import { Route,  Routes } from "react-router-dom"
import Form from "./assets/Components/Form"
import Home from "./assets/Components/Home"
import Footer from "./assets/Components/Secciones/Footer"


function App() {


  return (
    <>
      
               
            <Routes >
                <Route path='/' element={<Home/>}/>
                <Route path='/reservation' element={<Form/>}/>

            </Routes>
    
     

      <Footer/>
    </>
  )
}

export default App
