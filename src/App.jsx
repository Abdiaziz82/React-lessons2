
import './App.css'
import ControlledComponent from './components/ControlledComponent'
import Events from './components/Events'
import Hero from './components/Hero'
import Posts from './components/Posts'
import ProductList from './components/ProductList'

import { Routes , Route } from 'react-router'
import Table from './components/Table'
import TasbeehApp from './components/TasbeehApp'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {


  return (
    <>
      
    <Navbar />
<Routes>

<Route path='/' element={ <Hero />} />
<Route path='/table' element={ <Table />} />
<Route path='/products' element={ <ProductList />} />
<Route path='/posts' element={  <Posts />} />
<Route path='/about' element={   <TasbeehApp  /> } />
<Route path='/login' element={  <ControlledComponent /> } />
<Route path='/signup' element={  <Events /> } />

      </Routes>
<Footer />


      
      
    
     
    
   
      
       
    </>
  )
}

export default App