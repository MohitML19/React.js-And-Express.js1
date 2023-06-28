import { Fragment,useState } from "react";
import {useNavigate} from 'react-router-dom'
import ProductServices from "../services/ProductServices";

const ProductForm=(props)=>{
    let navigate =useNavigate()
    let [formdetails,setformdetails]=useState({pid:"",pname:"",price:""});
    let addprod=()=>{
        ProductServices.addProduct(formdetails).then((result)=>{
            console.log(result.data);
            navigate("/");
        }).catch(()=>{});
    }

    return(
        <div>
            <form>
            <label htmlFor="pid">Product id</label>
               <input type="text" id="pid" name="pid"
               value={formdetails.pid}
               onChange={(event)=>{setformdetails({...formdetails,pid:event.target.value})}}> 
               </input>
               <label htmlFor="pname">Product name</label>
               <input type="text" id="pname" name="pname"
               value={formdetails.pname}
               onChange={(event)=>{setformdetails({...formdetails,pname:event.target.value})}}> 
               </input>
               <label htmlFor="price">product price</label>
               <input type="text" id="price" name="price"
               value={formdetails.price}
               onChange={(event)=>{setformdetails({...formdetails,price:event.target.value})}}> 
               </input>

               <button type="button" id="btn" name="btn" onClick={addprod}>Add Product</button>
            </form>
        </div>
    )
}

export default ProductForm;