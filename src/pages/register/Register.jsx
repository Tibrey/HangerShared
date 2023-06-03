import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { registerApi } from '../../apis/Api'
 
const Register = () => {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [pass2, setPass2] = useState('');

    const handleFname = (e) => {
        setFname(e.target.value);
    }

    const handleLname = (e) => {
        setLname(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePass = (e) => {
        setPass(e.target.value);
    }

    const handlePass2 = (e) => {
        setPass2(e.target.value);
    }

    const toastR = (e) => {
        toast.success('User registration successfully');
    }

    //handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fname, lname, email, pass, pass2);

            try {
            registerApi({
                fname: fname,
                lname: lname,
                email: email,
                password: pass,
                password2: pass2,
            }).then((res) => {
                toast.success('User registration successfully');
            }).catch((err) => {
                toast.error('User registration failed');
            });

        }
        catch (error) {
            toast.error('Error in registration');
        }
    }

    //     try {
    //         axios.post('http://localhost:5000/api/user/register', {
    //             fname: fname,
    //             lname: lname,
    //             email: email,
    //             password: pass,
    //             password2: pass2,
    //         }).then((res) => {
    //             toast.success('User registration successfully');
    //         }).catch((err) => {
    //             toast.error('User registration failed');
    //         });

    //     }
    //     catch (error) {
    //         toast.error('Error in frontend');
    //     }
    // }

    return (
        <div>
            <h1 className='text-center mt-2'>Register a user</h1>
            <div className='container1 mt-n1'>
                <form action="#">
                    <div class="row mb-4">
                        <div class="col">
                            <div className="form-outline">
                                <input onChange={handleFname} type="text" name='name' id="form3Example1" class="form-control" />
                                <label class="form-label" for="form3Example1">First name</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-outline">
                                <input onChange={handleLname} type="text" name='name' id="form3Example2" class="form-control" />
                                <label class="form-label" for="form3Example2">Last name</label>
                            </div>
                        </div>
                    </div>

                    <div class="form-outline mb-4">
                        <input onChange={handleEmail} type="email" id="form3Example3" name='email' class="form-control" />
                        <label class="form-label" for="form3Example3">Email address</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input onChange={handlePass} type="password" id="form3Example4" name='password' class="form-control" />
                        <label class="form-label" for="form3Example4">Password</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input onChange={handlePass2} type="confirm_password" id="form3Example5" name='password' class="form-control" />
                        <label class="form-label" for="form3Example5">Confirm Password</label>
                    </div>

                    <Link to={'/login'}>
                        <button type="submit" class="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Sign up</button>
                    </Link>

                    <div class="text-center">
                        <p>or sign up with:</p>
                        <button type="button" class="btn btn-secondary btn-floating mx-1">
                            <i class="fab fa-facebook-f"></i>
                        </button>

                        <button type="button" class="btn btn-secondary btn-floating mx-1">
                            <i class="fab fa-google"></i>
                        </button>

                        <button type="button" class="btn btn-secondary btn-floating mx-1">
                            <i class="fab fa-twitter"></i>
                        </button>

                        <button type="button" class="btn btn-secondary btn-floating mx-1">
                            <i class="fab fa-github"></i>
                        </button>
                    </div>
                </form>
                <button onClick={toastR}>
                    toast
                </button>
                <div>
                    <p class="text-center mt-3">Already have an account? <a href="/login">Login</a></p>
                </div>

            </div>
        </div>
    )
}


export default Register