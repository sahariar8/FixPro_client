import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AiOutlineGoogle,AiFillGithub} from 'react-icons/ai';
import { AuthContext } from '../provider/ContextProvider';
import axios from 'axios';
import { Helmet } from 'react-helmet';



const Login = () => {
    
    const {userSignIn,googleSign,githubSign,user} = useContext(AuthContext);
    const location = useLocation();
    console.log('location in the login',location )
    const navigate = useNavigate();
    const [error,setError] = useState();
        const handleSignIn = (e) =>{

            e.preventDefault()
            const email = e.target.email.value;
            const password = e.target.password.value;
            console.log(email,password)

            setError('');
            userSignIn(email,password)
            .then((result)=>{
              console.log(result.user);
              const user = { email }
                axios.post('https://fixpro-server.vercel.app/jwt',user,{ withCredentials:true })
                .then(res=>{
                  console.log(res.data);
                  if(res.data.success){
                    Swal.fire(
                      'Good job!',
                      'User LogIn Successfully',
                      'success'
                    )
                    navigate(location?.state ? location.state : '/');
                  }
                })
               
            })
            .catch((error)=>{
              console.log(error.message)
              Swal.fire(
                'error!',
                'Email or Password does not match.please Try Again',
                'error'
              )
                // setError("Email or Password does not match.please Try Again")
            })
            e.target.reset();
        }

        const googleLogin = () =>{

          googleSign()
          .then(result=>{
            console.log(result.user);
            const email= result.user.email;
            const user = { email }
            console.log(user)
            axios.post('https://fixpro-server.vercel.app/jwt',user,{ withCredentials:true })
            .then(res=>{
                console.log(res.data);
                if(res.data.success){
                  Swal.fire(
                    'Good job!',
                    'Google LogIn Successfully',
                    'success'
                  )
                  navigate(location?.state ? location.state : '/');
                }

            })
          
          })
          .catch(error=>{
            console.log(error.message)
          })
        }
        const githubLogin = () =>{

          githubSign()
          .then(result=>{
            console.log(result.user);
            Swal.fire(
              'Good job!',
              'Github LogIn Successfully',
              'success'
            )
            navigate(location?.state ? location.state : '/');
          })
          .catch(error=>{
            console.log(error.message)
          })
        }
       
    return (
        <div>
          <Helmet>
         <title>FixPro | Login</title>
        </Helmet>
        <div className="hero min-h-screen md:-mt-16 bg-base-200 font-rancho">
          <div className="md:w-1/3">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-emerald-400 mb-8">Login Now!</h1>
              
            </div>
            <div className="card shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleSignIn}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name='email'
                    placeholder="email"
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
                    name='password'
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <h1 className='text-red-600 font-bold'>{error}</h1>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                    <div>
                        <h1 className='label-text-alt'>Don't Have an Account? <Link to='/register' className='text-sm text-blue-600 font-semibold'>Register</Link></h1>
                    </div>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-emerald-400 text-white font-bold hover:bg-emerald-600">Login</button>
                </div>
              </form>
            </div>
            <div className='mt-10'>
                <h1 className='text-center font-bold text-slate-600'>Login with google or Github?</h1>
                <div className='grid md:grid-cols-2 mx-auto md:gap-6 gap-2  mt-2'>
                    <Link className='border text-center py-2 font-semibold flex items-center gap-1 text-emerald-400 rounded-lg bg-white' onClick={googleLogin}><AiOutlineGoogle className='text-sky-500 ml-6 text-2xl ' />Google</Link>
                    <Link className='border text-center py-2 font-semibold flex items-center gap-1 text-emerald-400 rounded-lg bg-white'  onClick={githubLogin}><AiFillGithub  className=' ml-6 text-pink-600'/>GitHub</Link>
                </div>
            </div>
           
            
          </div>
        </div>
      </div>
    );
};

export default Login;