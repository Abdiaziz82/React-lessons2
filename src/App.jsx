
import './App.css'
import ControlledComponent from './components/ControlledComponent'
import Events from './components/Events'
import Hero from './components/Hero'
import Posts from './components/Posts'
import ProductList from './components/ProductList'


import Table from './components/Table'
import TasbeehApp from './components/TasbeehApp'

function App() {


  return (
    <>
      
      {/* <Hero />
      <Table />
      <ProductList /> */}
      <Posts />
    <ControlledComponent />
    <TasbeehApp  />
      <Events />
    </>
  )
}

export default App
