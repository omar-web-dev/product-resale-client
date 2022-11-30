import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvide';

const BookModel = ({ booking, toggle, setToggle }) => {
    const notify = () => toast("Booking!");
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { user } = useContext(AuthContext)
    const { productTitle, city, state, zip, price,  phone , productImage} = booking
    // cosnt productImage = 
    const sellerLocation = city + state + zip



    const myInfo = () => {

    }
    const handleBooking = data => {

        myInfo(sellerLocation)
        bookingItems(
            data.userLocation,
            data.userPhone
        );

    }

    const bookingItems = (userLocation, userPhone) => {
        const booked = {
            userLocation,
            userPhone,
            userName: user?.displayName,
            userEmail: user?.email,
            productName: productTitle,
            productPrice: price,
            productImage : productImage?.photo,
            sellerLocation
        };

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booked)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged) {
                    setToggle(true)
                    notify()
                }
            })

    }

    return (
        <>
            <ToastContainer />

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className={`${!toggle ? 'modal' : "hidden"}`}>
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className={`btn btn-sm btn-circle  right-2 top-2 $`}>✕</label>
                    <form className='gap-3 grid' onSubmit={handleSubmit(handleBooking)}>
                        <div className="form-control w-full">
                            <input defaultValue={productTitle} type="text" required
                                {...register("productName")}
                                className="input input-bordered w-full focus:outline-none" />
                        </div>
                        <div className="form-control w-full">
                            <input defaultValue={user?.displayName} type="text"
                                {...register("userName")}
                                className="input input-bordered w-full focus:outline-none" />
                        </div>
                        <div className="form-control w-full">
                            <input defaultValue={user?.email} type="email"
                                {...register("userEmail")}
                                className="input input-bordered w-full focus:outline-none" />
                        </div>
                        <div className="form-control w-full">
                            <input placeholder='My Phone Number' type="text" required
                                {...register("userPhone")}
                                className="input input-bordered w-full focus:outline-none" />
                        </div>
                        <div className="form-control w-full">
                            <input type="text" placeholder='My Location'
                                {...register("userLocation")}
                                className="input input-bordered w-full focus:outline-none" />
                        </div>

                        <div className="form-control w-full">
                            <input defaultValue={"$" + price} type="text"
                                {...register("productPrice")}
                                className="input input-bordered w-full focus:outline-none" />
                        </div>
                        <div className="form-control w-full">
                            <p className='border rounded-md p-3'>Seller location <br /> {city} <br /> {state} </p>
                        </div>
                        <div className="form-control w-full">
                            <p className='border rounded-md p-3'>Seller Phone <br /> {phone} </p>
                        </div>
                        <input className='btn btn-accent w-full' type="submit" />
                    </form>
                </div>
            </div>
        </>

    );
};

export default BookModel;