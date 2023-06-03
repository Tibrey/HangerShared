import axios from "axios";

const Api = axios.create({
    baseURL : 'http://localhost:5000',
    withCredentials : true,
    headers : {
        'Content-Type' : 'multipart/form-data',
    },
});

const config = {
    headers : {
        'authorization': `Bearer ${localStorage.getItem('token')}`,
}
}

//creating route
export const testApi = () => Api.get('/'); 


//register route
export const registerApi = (data) => Api.post('api/user/register', data);

//login route
export const loginApi = (data) => Api.post('api/user/login', data);

//add product route
export const addProductApi = (data) => Api.post('api/product/add', data,config);

//get all products route

export const getAllProductsApi = () => Api.get('/api/product/get_products');

//get single product route
export const getSingleProductApi = (id) => Api.get(`/api/product/get_product/${id}`);

//update product route
export const updateProductApi = ( id,data) => Api.put(`/api/product/update_product/${id}`,data,config);


//delete product route
export const deleteProductApi = (id) => Api.delete(`/api/product/delete_product/${id}`,config);