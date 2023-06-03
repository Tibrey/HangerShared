import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { getAllProductsApi } from '../../apis/Api'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  const [products,setProducts] = useState([])
  useEffect(() => {
    getAllProductsApi()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.js"
      ></script>
      <div className="container mt-5 ">
        <div
          id="carouselExampleCrossfade"
          class="carousel slide carousel-fade"
          data-mdb-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-mdb-target="#carouselExampleCrossfade"
              data-mdb-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-mdb-target="#carouselExampleCrossfade"
              data-mdb-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-mdb-target="#carouselExampleCrossfade"
              data-mdb-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                class="d-block w-100"
                alt="Wild Landscape"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                class="d-block w-100"
                alt="Camera"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                class="d-block w-100"
                alt="Exotic Fruits"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-mdb-target="#carouselExampleCrossfade"
            data-mdb-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-mdb-target="#carouselExampleCrossfade"
            data-mdb-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <img src="/assets/images/Hanger.svg" alt="" />
        <button type="button" class="btn btn-primary btn-rounded">
          Primary
        </button>
      </div>
   //add to cart template
      <div>
        <h1 className="mt-5 mb-4">Available products</h1>
        <div class="row row-cols-1 row-cols-md-4 g-4">
          {
            products.map((product) => {
              return (
                <Link to={`/product/details/${product._id}`} class="col">
                  <div class="card">
                    <img
                      src={product.image}
                      class="card-img-top object-cover"
                      alt="Hollywood Sign on The Hill"
                      width={"100px"}
                      height={"220px"}
                    />
                    <div class="card-body">
                      <div className="d-flex justify-content-between">
                        <h5 class="card-title text-black">{product.name}</h5>
                        <h5 class="card-title text-black">{product.price}</h5>
                      </div>
                      <hr />
                      <p className="text-black">
                        {product.description}
                      </p>
                      <button className="btn w-100 btn-outline-black">
                        View more
                      </button>
                    </div>
                  </div>
                </Link>   
              );
           })
          }
        </div>
      </div>
    </div>
  );
}

export default Homepage;