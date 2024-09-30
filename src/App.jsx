import React,{useState} from 'react'
import Cards from './Components/Cards'
import TopBar from './Components/TopBar'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  let data = [
    {
      product:"Fancy product",
      price:"40.00-$80.00",
      isPrice:true,
      offer:"",
      isOffer:false,
      sale:false,
      rating:false
      
    },
    {
      product:"special Item",
      price:"20.00",
      isPrice:false,
      offer:"18",
      isOffer:true,
      sale:true,
      rating:true
    },
    {
      product:"Sale Item",
      price:"50.00",
      isPrice:false,
      offer:"25",
      isOffer:true,
      sale:true,
      rating:false
    },
    {
      product:"Popular item",
      price:"40.00",
      isPrice:true,
      offer:"",
      isOffer:false,
      sale:false,
      rating:true
    },
    {
      product:"Sale Item",
      price:"50.00",
      isPrice:false,
      offer:"25",
      isOffer:true,
      sale:true,
      rating:false
    },
    {
      product:"Fancy product",
      price:"120.00-$280.00",
      isPrice:true,
      offer:"",
      isOffer:false,
      sale:false,
      rating:false
    },
    {
      product:"Special Item",
      price:"20.00",
      isPrice:false,
      offer:"18",
      isOffer:true,
      sale:true,
      rating:true
    },
    {
      product:"Popular Item",
      price:"40.00",
      isPrice:true,
      offer:"",
      isOffer:false,
      sale:false,
      rating:true
    },
     ]
  
     let [cart, setCart] = useState(0)
     return <>
    <TopBar cart={cart} setCart={setCart}/>
    <Header cart={cart} setCart={setCart}/>

    <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
              data.map((e,i)=>{
                return <Cards data={e} cart={cart} setCart={setCart} key={i}/>
              })  
            }
            
              </div>
              </div>
              </section>
      <Footer/>

  </>

  
}

export default App