import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../Context/AuthProvide';


const Registration = () => {
    const { user } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const { createUser, googleLongIn, updateUserInfo } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [checkCondition, setCheckCondition] = useState(false);
    const [userEmail, setUserEmail] = useState('')
    // const [token] = useToken(userEmail);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageKey = process.env.REACT_APP_image_key;
    const verified = false

    if(user?.uid){
        return <Navigate to='/'></Navigate>
    }

    const handleSignUp = (data) => {
        setCheckCondition(data?.checkCondition)
        setError('');


        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=6a56f720ef5af169c2b3789d5fb3086f`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    createUser(data.email, data.password)
                        .then(result => {
                            const user = result.user;
                            const userInfo = {
                                displayName: data.name,
                                photoURL: imgData.data.url

                            }
                            updateUserInfo(userInfo)
                                .then(() => {
                                    saveUser(
                                        data.name,
                                        data.email,
                                        data.phone,
                                        data.location,
                                        data.userStatus,
                                        data.password,
                                        { photoURL: imgData?.data?.url }
                                    );
                                })
                                .catch(err => console.log(err));
                        })
                        .catch(error => {
                            setError(error.message)
                        });
                }

            })
    }
    const handelGoogleLogIn = (email) => {
        const loginTost = () => toast("Sign In Successful!");
        googleLongIn(googleProvider)
            .then((result) => {
                loginTost()
                setUserEmail(email);
                const user = result.user;
                saveUser(
                    user.displayName,
                    user.email,
                    "buyer",
                );
                setError('')
                console.log(user)
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }


    const saveUser = (name, email, phone, location, userStatus, password) => {
        const notify = () => toast("Registration Successful!");
        const user = { name, email, phone, location, userStatus, password, verified };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setUserEmail(email);
                notify()
                return <Navigate to="/"></Navigate >;
            })
    }

    return (
        <div className='py-20 flex justify-center bg-[#093444] '>
            <ToastContainer />
            <div className='w-96 p-7'>
                <h2 className='text-5xl text-center font-semibold font-[Lexend Deca] text-white'>Registration</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="text-white label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is required",
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="text-white label-text">Phone</span></label>
                        <input type="text" {...register("phone", {
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="text-white label-text">Location</span></label>
                        <input type="text" {...register("location", {
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="text-white label-text">Email</span></label>
                        <input type="email" {...register("email", {
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <select selected name="userStatus" {...register("userStatus")} className='input input-bordered w-full max-w-xs mt-3'>
                            <option value='buyer' >Buyer</option>
                            <option value='seller' >Seller</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="text-white label-text">Image</span></label>
                        <input type="file" {...register("image", {
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="text-white label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 8, message: "Password must be 8 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <div className="flex justify-between items-center mt-2 max-w-xs">
                        <div className='flex'>
                            <input name='checkCondition' type="checkbox"
                                {...register("checkCondition", {
                                })}
                                className=" bg-[#224957]" />
                            <label className="label "> <span className=" text-white label-text">Accept our Tram & Condition</span></label>
                        </div>
                        <p className='text-[#20DF7F]'>see now</p>
                    </div>
                    <input className={`btn btn-accent w-full mt-4`}
                        value="Sign Up" type="submit" />
                    {error && <p className='text-red-600'>{error}</p>}
                </form>
                <p className='text-white'>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider text-white">OR</div>
                <button onClick={handelGoogleLogIn} className='btn btn-outline w-full bg-orange-500'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Registration;