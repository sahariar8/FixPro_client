import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/ContextProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import  { Helmet } from 'react-helmet';


const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [error,setError] = useState(null);
    const navigate = useNavigate();


    const handleRegistration = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name,email,password,image);

        setError('')

        if(password.length < 6){
            setError('Password should be 6 charecters or longer');
            return;
        }
        // else if(!/^(?=.*[A-Z])(?=.*[\W_]).*$/.test(password)){
        //     setError('Password should have at least one Uppercase and One Special Charecter');
        //     return;
        // }

        createUser(email,password)
        .then((result)=>{

          updateProfile(result.user,{
                  displayName : name,
                  photoURL:image
                })
                .then(result=>{
                  console.log(result)
                })
                .catch();

                Swal.fire(
                    'Good job!',
                    'Registration Successfully Completed',
                    'success'
                  )
                  navigate('/login');
        })
        .catch(error=>{
          const err = error.message;
          setError(err)
          console.log(typeof err)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
              })
        })

    }

    return (
        <div>
          <Helmet>
         <title>FixPro | Registration</title>
        </Helmet>
        <div className="hero min-h-screen md:-mt-16 font-rancho">
          <div className="md:w-1/3">
            <div className="text-center">
              <h1 className="text-2xl md:text-5xl font-bold text-emerald-400 mb-8 mt-10">Registration Form</h1>
              
            </div>
            <div className="card shadow-2xl bg-base-100 mb-10">
              <form className="card-body" onSubmit={handleRegistration}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name='name'
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="text"
                   name='image'
                   placeholder='Photo url'
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name='email'
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name='password'
                    className="input input-bordered"
                    required
                  />
                  <h1 className='text-red-800 font-bold'>{error}</h1>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                    <div>
                        <h1 className='label-text-alt md:text-xs font-semibold'>Already Have an Account? Please<Link to='/login' className='text-sm text-blue-600 font-semibold'> Login</Link></h1>
                    </div>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-emerald-400 text-white font-bold hover:bg-emerald-600">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;