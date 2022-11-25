import React, { useContext, useState } from 'react';
import { AuthContext } from './Context/AuthProvide';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import useToken from '../CostomHooks/useToken';

const Registration = () => {
    const googleProvider = new GoogleAuthProvider();
    const { createUser, googleLongIn, updateUserInfo} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [checkCondition, setCheckCondition] = useState(false);
    const [userEmail, setUserEmail] = useState('')
    const [token] = useToken(userEmail);
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const handleSignUp = (data) => {
        setCheckCondition(data?.checkCondition)
        setError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                const userInfo = {
                    displayName: data.name,
                }
                updateUserInfo(userInfo)
                    .then(() => {
                        saveUser(
                            data.name, 
                            data.email,
                            data.userStatus,
                            data.password
                            );
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                setError(error.message)
            });
    }
    const handelGoogleLogIn = (email) => {
        googleLongIn(googleProvider)
            .then((result) => {
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
        const saveUser = (name, email, userStatus, password) =>{
            const user ={name, email, userStatus, password};
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data =>{
                setUserEmail(email);
            })
        }
    
    return (
        <div className='h-[800px] flex justify-center bg-[#093444] items-center'>
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
                        <select selected name="userStatus" {...register("userStatus")} className='input input-bordered w-full max-w-xs mt-3'>
                            <option  value='buyer' >Buyer</option>
                            <option  value='seller' >Seller</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="text-white label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
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