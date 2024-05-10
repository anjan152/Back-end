import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../services/allApi'
import { useNavigate } from 'react-router-dom';
function Auth({ register }) {
    // state to store data
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    console.log(userData);
    const RegisterForm = register ? true : false
    //function to register user
    const handleRegister = async (e) => {
        e.preventDefault()
        const { username, email, password } = userData
        if (!username || !email || !password) {
            toast.info('fill the form completely')
        }
        else {
            const result = await registerAPI(userData)
            console.log(result);
            // toast.success('proceed')
            if (response.status == 200) {
                toast.success('Registration successful')
                setUserData({
                    username: "",
                    email: "",
                    password: ""
                })
                navigate('/login')
            }
            else {
                toast.error(result.response.data)
            }
        }
    }
    const handlelogin = async (e) => {
        e.preventDefault()
        const { email, password } = userData
        if (!email || !password) {
            toast.info('please fill the form completely')
        }
        else {
            const result = await loginAPI(userData)
            console.log(result);
            if (result.status == 200) {
                sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
                sessionStorage.setItem("token",result.data.token)
                toast.success('login successful')
                setUserData({
                    username: "",
                    email: "",
                    password: ""

                })
                setTimeout(() => {
                    navigate('/')
                }, 2000)
            }
        }

    }
    return (
        <>
            <div className='w-100 d-flex justify-content-center align-items center' style={{ height: '100vh' }}>
                <div className='w-50 container' >
                    <h5><Link to={'/'}>Back</Link></h5>
                    <div className='p-5 rounded' style={{ backgroundColor: 'green' }}>

                        <div className='col-md-6 f-flex justify-content-center align-item-center'>
                            <h2><FontAwesomeIcon icon={faStackOverflow} />Project Pool</h2>
                            <h5 className='mt-3'>
                                {
                                    RegisterForm ? 'Sign Up' : 'sign In'
                                }


                            </h5>
                            <form className='mt-5'>
                                {RegisterForm && <input type="text" placeholder="Enter Username" value={userData.username} className='form-contol' onChange={(e) => setUserData({ ...userData, username: e.target.value })} />}
                                <input type="text" placeholder="Email Id" value={userData.email} className='form-contol mt-3' onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                                <input type="text" placeholder="Password" value={userData.password} className='form-contol mt-3' onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                                {RegisterForm ?
                                    <div><button onClick={handleRegister} className='btn btn-warning mt-5 w-100'>Register</button>
                                        <p>Already a user ? <Link to={'/login'}>Login</Link></p>
                                    </div> :
                                    <div><button onClick={handlelogin} className='btn btn-warning mt-5 w-100'>Login</button>
                                        <p>New user ?<Link to={'/register'}> Register</Link></p></div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer theme='colored' position='top-center' autoClose={2000} />
        </>
    )
}

export default Auth