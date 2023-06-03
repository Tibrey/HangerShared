import React from 'react'
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar'
import { toast } from 'react-toastify'
import { loginApi } from '../../apis/Api'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/userSlice';

const Login = () => {
  

  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

  const navigate = useNavigate()
  const dispatch = useDispatch()



  // for submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( email, password);

        try {
        loginApi({
            email: email,
            password: password,
        }).then((res) => {
            console.log( res.data);

            //setting token and user in local storage
            localStorage.setItem("token",res.data.token)
            localStorage.setItem("user",JSON.stringify(res.data.user));

            navigate('/');

            toast.success('User login successfully');
        }).catch((err) => {
            toast.error('User login failed');
        });

    }
    catch (error) {
        toast.error('Login Failed');
    }
}


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(email, password);

  //   try {
  //     loginApi({
  //       email: email,
  //       password: password,
  //     })
  //       .then((res) => {
  //         console.log(res.data);

  //         //dispatch to store
  //         dispatch(addUser(res.data.user))

  //         navigate("/");

  //         toast.success("User login successfully");
  //       })
  //       .catch((err) => {
  //         toast.error("User login failed");
  //       });
  //   } catch (error) {
  //     toast.error("Login Failed");
  //   }
  // };

  return (
    <div>

      <form className="container1">

        {/* <!-- Email input --> */}
        <div class="form-outline mb-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="form1Example1"
            class="form-control"
          />
          <label class="form-label" for="form1Example1">
            Email address
          </label>
        </div>

        {/* <!-- Password input --> */}
        <div class="form-outline mb-4">
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="form1Example2"
            class="form-control"
          />
          <label class="form-label" for="form1Example2">
            Password
          </label>
        </div>

        {/* <!-- 2 column grid layout for inline styling --> */}
        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            {/* <!-- Checkbox --> */}
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form1Example3"
              />
              <label class="form-check-label" for="form1Example3">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div class="col">
            {/* <!-- Simple link --> */}
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        {/* <!-- Submit button --> */}
        <button
          type="submit"
          class="btn btn-primary btn-block"
          onClick={handleSubmit}
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login