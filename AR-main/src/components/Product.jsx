import React from 'react'
import "./Product.css"
import Products from '../data/Products'
import { useNavigate } from 'react-router'
const Product = () => {

    const navigate = useNavigate();

    const handleAR = (id,name) => {    
        navigate("/productAR",{state:{id:id,product:name}})
    }
    
  return (
    <div>
        <section id='Hero'>
        <div className="row second">
    {Products.map((item)=>{
                  return( <div className="sec col-lg-6 col-md-6 col-sm-12">
        <h4><b>{item.name}</b></h4><img src={item.image} className="ps4" alt="No image" /><ul>
            <br />
            <div className='btnStyle '>
            <button className="btn btn-warning btn-sm buy" onClick={()=>{handleAR(item.id,item.name)}}>AR</button>  
            </div>
            <br />
        </ul>
         </div>
    )})}
         </div>
         </section>
        
        </div>
  )
}

export default Product




