import React,{useState} from 'react'

function Cards({cart, setCart, data}) {
let [toggle, setToggle] =useState(true)
   
    
  return  <div className="col mb-5">
   <div className="card h-100">
        {/* <!-- Sale badge--> */}
        <span className= {data.sale ? "badge bg-dark text-white position-absolute" : ""} style={{top: "0.5rem" , right: "0.5rem"}}>{data.sale ? "Sale" :null} </span>
      
        {/* <!-- Product image--> */}
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
            <div className="text-center">
                {/* <!-- Product name--> */}
                <h5 className="fw-bolder">{data.product}</h5>

                {/* <!-- Product reviews--> */}
                {data.rating?
                <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                </div> : null }



                 {/* <!-- Product price--> */}


        {data.offer ? (<><span className="text-muted text-decoration-line-through">${data.price}</span>
                     <span>${data.offer}</span></>) : 
                     (<span>${data.price}</span>)}
                </div>
              </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
                {toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                setCart(cart+1)
                setToggle(false)
                }} >
                Add to cart</button>:
                <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                setCart(cart-1)
                setToggle(true)
                }} >
                Remove from cart</button>
                }
                </div>


        </div>
        
    </div>
</div>
}

export default Cards