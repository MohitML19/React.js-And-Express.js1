import React,{Component,Fragment} from 'react';
import ProductService from '../services/ProductServices'
import {Link} from 'react-router-dom'
class ProductTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            parr:[],
            searcharr:[],
            searchtext:""
        }

    }
    fetchData=()=>{
        ProductService.getProducts().then((result)=>{
            console.log(result.data);
            this.setState({...this.state,parr:result.data,searcharr:result.data})
        }).catch(()=>{});
    }
    componentDidMount(){
        console.log("hii")
        this.fetchData();
    }

    
    deleteProd=(id)=>{
        ProductService.deleteById(id).then(()=>{
            this.fetchData()
        }).catch();

    }


    render(){
        return(
            <div>
                <Link to="/form">
                <button type="button" name="btn" id="btn" >Add New Product</button></Link>
                <br></br>
                <br></br>
                <input type="text" name="nm" id="nm" 
                value={this.state.searchtext}
                onChange={(event)=>{this.setState({...this.state,searchtext:event.target.value})}}></input>
                <table className="table" border={2}>
  <thead>
    <tr>
      <th scope="col">Product id</th>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {this.state.searcharr.map((prod)=><tr key={prod.pid}>
    <td>{prod.pid}</td>
      <td>{prod.pname}</td>
      <td>{prod.price}</td>
      <td>
      <button type="button" onClick={()=>this.deleteProd(prod.pid)}>delete</button>
      <Link to={`/edit/:${prod.pid}`} state={{prod:prod}}>
      <button type="button" >Edit</button>
      </Link>
      </td>
    </tr>)}
    
      
    
   
  </tbody>
</table>

            </div>
        )
    }


}
export default ProductTable;