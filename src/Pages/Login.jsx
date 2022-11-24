import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from './Context/AuthProvide';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');

    const handleLogin = data => {
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                // console.log(error.message)
                setLoginError(error.message);
            });
    }
    return (
        <div className='h-[800px] flex justify-center items-center bg-[#093444]'>
            <div className='w-96 p-7'>
                <h2 className='text-5xl text-center font-semibold font-[Lexend Deca] text-white'>Sign in</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="text-white label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input bg-[#224957] input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-400'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label "> <span className="text-white label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 8, message: 'Password must be 8 characters or longer' }
                            })}
                            className="input bg-[#224957]  input-bordered w-full max-w-xs" />
                        
                        {errors.password && <p className='text-red-400'>{errors.password?.message}</p>}
                    </div>
                    <div className="flex justify-between items-center my-3">
                        <div className='flex'>
                            <input type="checkbox"
                                {...register("remember", {
                                })}
                                className=" bg-[#224957]" />
                            <label className="label "> <span className="text-white label-text">Remember</span></label>
                        </div>
                        <p className='text-[#20DF7F]'>Forget password?</p>
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>

                
                <div className="divider text-white">OR</div>
                <button className='btn btn-outline bg-orange-500 text w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;