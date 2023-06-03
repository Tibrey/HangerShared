
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';
import { getSingleProductApi, updateProductApi } from '../../../apis/Api';
import { toast } from 'react-toastify';


const AdminProductEdit = () => {

    const { id } = useParams();

    const [product, setProduct] = useState([])

    useEffect(() => {
        getSingleProductApi(id).then((res) => {
            setProduct(res.data)

            //add this field to the edit field
            setProductName(res.data.name);
            setProductPrice(res.data.price);
            setProductCategory(res.data.category);
            setProductDescription(res.data.description);
            setProductImage(res.data.image);

        }).catch((err) => {
            console.log(err);
        });
    }, [id]);

    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productImage, setProductImage] = useState("");

    // for image preview
    const [previewImage, setPreviewImage] = useState("");

    // for image setting and preview
    const handleImageUpload = (event) => {
        setProductImage(event.target.files[0]);

        // // Read the image file using FileReader
        const reader = new FileReader();
        reader.onload = () => {
            setPreviewImage(reader.result);
        };
        reader.readAsDataURL(event.target.files[0]);
    };

    //.......................................
    const handleUpdate = () => {
        const formData = new FormData();
        formData.append("productName", productName)
        formData.append("productPrice", productPrice)
        formData.append("productCategory", productCategory)
        formData.append("productDescription", productDescription)
        formData.append("productImage", productImage)

        //calling for api
        updateProductApi(id,formData)
            .then(res => {
                toast.success("Product updated!");
            })
            .catch(err => {
                console.log(err);
                toast.error("Product update failed!");
            });
    };

    return (
        <div className="container mt-2">
            <h3 className='text-danger'>Updating for {product.name} </h3>
            <form className='w-50'>
                <div class="mb-3">
                    <label for="formFile" class="form-label">
                        Product Name
                    </label>
                    <input
                        onChange={(e) => setProductName(e.target.value)}
                        type="text"
                        class="form-control"
                        id="formFile"
                        placeholder="Enter Product Name"
                        value={productName}
                    />

                    <label for="formFile" class="form-label mt-2">
                        Product Price
                    </label>
                    <input
                        onChange={(e) => setProductPrice(e.target.value)}
                        type="text"
                        class="form-control"
                        id="formFile"
                        placeholder="Enter Product Price"
                        value={productPrice}
                    />
                    <label for="formFile" class="form-label mt-2">
                        Product Category
                    </label>
                    <input
                        onChange={(e) => setProductCategory(e.target.value)}
                        type="text"
                        class="form-control"
                        id="formFile"
                        placeholder="Enter Product Category"
                        value={productCategory}
                    />
                    <label for="formFile" class="form-label mt-2">
                        Product Description
                    </label>
                    <textarea
                        onChange={(e) => setProductDescription(e.target.value)}
                        class="form-control"
                        id="textAreaExample"
                        rows="4"
                        value={productDescription}
                    ></textarea>

                    <label for="formFile" class="form-label mt-2">
                        Product Image
                    </label>
                    <input
                        onChange={handleImageUpload}
                        type="file"
                        class="form-control"
                        id="formFile"
                        placeholder="Enter Product Image"
                    />

                    <p>Old Product Image</p>
                    <img src={productImage} alt="" height={'250px'} width={'200px'} className='object-cover'/>
                    {
                        previewImage && <img src={previewImage} alt="" className="mt-2 object-cover rounded-3" height={200} width={'100%'} />
                    }
                </div>

                <button type="button" class="btn btn-primary w-100" onClick={handleUpdate}>
                    Update Product
                </button>

            </form>

        </div>
    )
}

export default AdminProductEdit