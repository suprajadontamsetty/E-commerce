import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/shopcontext"
import Productitem from "./productitem";





const Relatedproducts = (category,subCategory) => {

    const {products} =  useContext(ShopContext)
    const [related,setRelated] = useState([]);

    useEffect(()=>{
        
        if(products.length >0 ) {
            let productsCopy = products.slice();

            productsCopy =  productsCopy.filter((item)=>category === item.category);

            
            console.log(category, subCategory)

            productsCopy = productsCopy.filter((item)=> subCategory === item.subCategory);

           

            setRelated(productsCopy.slice(0,5));

        }
    },[products])
  return (
    <div className="my-24">
        <div className="text-center text-3xl py-2">
            

        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {related.map((item,index)=>(
                <Productitem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
            ))}
        </div>

    </div>
  )
}

export default Relatedproducts