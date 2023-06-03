import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useState } from "react";
import { addProductApi, deleteProductApi, getAllProductsApi } from "../../../apis/Api";
import { Link } from "react-router-dom";

const AdminDashBoard = () => {
  const [productImage, setProductImage] = useState(null);
  const[previewImage,setPreviewImage] = useState(null);

  const handleImageUpload = (event) => {
    setProductImage(event.target.files[0])

    const reader = new FileReader()
    reader.onload = () =>{
      setPreviewImage(reader.result)
    }
    reader.readAsDataURL(event.target.files[0])
  };

  const [productPrice, setProductPrice] = useState("");
  const [productName, setProductName] = useState("");
  const [productCategory, setCategory] = useState("");
  const [productDescription, setDescription] = useState("");
  //  const [actDon, setAction] = useState("");

  //for response data
  const [products,setProducts] = useState([])

  const handleProductName = (e) => {
    setProductName(e.target.value);
  };

  const handleProductPrice = (e) => {
    setProductPrice(e.target.value);
  };

  const handleProductCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleProductDescription = (e) => {
    setDescription(e.target.value);
  };

  //   const handleAction = (e) => {
  //     setAction(e.target.value);
  //   };

  //  const toastR = (e) => {
  //    toast.success("User registration successfully");
  //  };

  //handle submit
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("productName", productName)
    formData.append("productPrice", productPrice)
    formData.append("productCategory", productCategory)
    formData.append("productDescription", productDescription)
    formData.append("productImage", productImage)

    //calling for api
      addProductApi(formData)
      .then(res => {
        toast.success("Product added successfully");
      })
      .catch(err => {
        console.log(err);
        toast.error("Product add failed");
      });
  };

  useEffect(()=>{
    getAllProductsApi().then(res=>{
      setProducts(res.data)
        }).catch(err => {
          console.log(err)
        })
  },[])

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this product');
    if(confirmDelete){
      deleteProductApi(id).then((res)=>{
        window.location.reload(true);
        toast.success("Product deleted successfully");    
      }).catch((err) => {
        toast.error("Failed to delete the product");
      });
    }
  }

  return (
    <>
      <div className="container mt-3">
        <div className="d-flex justify-content-between">
          <h3>Admin Dashboard</h3>

          <button
            type="button"
            class="btn btn-danger"
            data-mdb-toggle="modal"
            data-mdb-target="#exampleModal"
          >
            Add Product
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Add Product
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-mdb-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form action="">
                    <div className="mb-3">
                      <label htmlFor="">Product Name</label>
                      <input
                        onChange={handleProductName}
                        name="productName"
                        type="text"
                        class="form-control"
                        placeholder="Enter the product name"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="mt-2" htmlFor="">
                        Product Price
                      </label>
                      <input
                        onChange={handleProductPrice}
                        name="productPrice"
                        type="text"
                        class="form-control"
                        placeholder="Enter the product price"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="mt-2" htmlFor="">
                        Product Category
                      </label>
                      <input
                        onChange={handleProductCategory}
                        name="productCategory"
                        type="text"
                        class="form-control"
                        placeholder="Enter the product category"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="mt-2" htmlFor="">
                        Product Description
                      </label>
                      <textarea
                        onChange={handleProductDescription}
                        className="form-control"
                        name=""
                        id=""
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="mt-2" htmlFor="">
                        Product Image
                      </label>
                      <input
                        onChange={handleImageUpload}
                        type="file"
                        class="form-control"
                        placeholder="Enter the product image "
                      />
                      {previewImage ?  (
                        <img
                          src={previewImage}
                          className="img-fluid mt-2"
                          
                          alt="product"
                        />
                      ):(<img src={productImage} alt="" className="mt-2 object-cover rounded-3" height={200} width={'100%'} />)}
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-mdb-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <table className="table mt-3">
          <thead className="table-dark ">
            <tr>
              <th scope="col">Product Image</th>
              <th scope="col">Product Name </th>
              <th scope="col">Product Price</th>
              <th scope="col">Category</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
           {
            products.map(product =>{
              return (
                <tr>
                  <td>
                    <img src={product.image} alt="" height={40} />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.description}</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <Link
                        to={`/admin/product/edit/${product._id}`}
                        type="button"
                        class="btn btn-success"
                      >
                        Edit
                      </Link>
                      <button type="button" class="btn btn-danger" onClick={()=>handleDelete(product._id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })
           }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminDashBoard;
