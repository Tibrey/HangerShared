import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate()

  //get user from local storage
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("user");

  const Logout = () => {
    localStorage.clear();
    navigate("/homepage");
  }

  //get cart value from reducer
  const{cart} = useSelector((state)=>({
    cart : state.cart.cart
  }));

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <Link to={"/"} class="navbar-brand me-2">
            <img
              src="/assets/images/Hanger.svg"
              alt="Hanger"
              height="30"
              loading="lazy"
            />
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarButtonsExample">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link  class="nav-link" href="#">
                  Dashboard
                </Link>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#navbarButtonsExample"
                  aria-controls="navbarButtonsExample"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i class="fas fa-bars"></i>
                </button>
              </li>
            </ul>

            <Link to={'/cart'} className="m-4">
            <i className="fa fa-shopping-cart fa-lg"></i>
            <span className="badge rounded-pill badge-notification bg-danger">{cart.length}</span>
            </Link>

            <div class="d-flex align-items-center">
              {user ? (
                <div class="dropdown">
                  <button
                    class="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {user.fname}
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    {user.isAdmin ? (
                      <li>
                        <Link to={"/admin-dashboard"} className="dropdown-item">
                          Admin Dashboard
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <Link
                          to={"/UserProfile"} 
                          class="dropdown-item"
                          href="#"
                        >
                          Profile
                        </Link>
                      </li>
                    )}
                
                    <li>
                      <Link class="dropdown-item" onClick={Logout}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  <Link to={"/login"}>
                    <button type="button" class="btn btn-primary px-3 me-2">
                      Login
                    </button>
                  </Link>
                  <Link to={"/register"}>
                    <button type="button" class="btn btn-primary px-3 me-2">
                      Register
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        {/* <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.js"
        ></script> */}
      </nav>
    </>
  );

};

export default Navbar;
