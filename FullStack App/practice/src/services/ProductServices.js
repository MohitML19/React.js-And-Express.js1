import axios from 'axios';
const baseUrl="http://localhost:3002";

class ProductService{
    getProducts(){
        return axios.get(baseUrl+"/products");
    }

    getProduct(id){
        return axios.get(baseUrl+"/products/product"+id);
    }

    addProduct(prod){
        return axios.post(baseUrl+"/products/product/"+prod.pid,prod);
    }

    updateProduct(prod){
        return axios.put(baseUrl+"/products/product/"+prod.pid,prod);
    }

    deleteById(id){
        return axios.delete(baseUrl+"/products/product/"+id);
    }
}
export default new ProductService();