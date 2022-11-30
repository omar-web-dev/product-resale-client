import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../../../Context/AuthProvide";
import moment from "moment";



const AddProduct = () => {
    const notify = () => toast("Wow Product added!");
    const [categorize, setCategorize] = useState([])
    const navigate = useNavigate();
    const currentDate = moment().format("DD-MM-YYYY hh:mm")
    const productStatus = true


    useEffect(() => {
        fetch(`https://apens-home.vercel.app/categorize`)
            .then(res => res.json())
            .then(data => setCategorize(data))
    }, [])


    const { user } = useContext(AuthContext)
    const sellerEmail = user?.email
    const sellerName = user?.displayName

    const { register, handleSubmit } = useForm();
    const [error, setError] = useState()

    const handleAddProduct = (data) => {
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
                    setError('');
                    saveUser(
                        data.productTitle,
                        data.price,
                        data.oldPrice,
                        data.usedYear,
                        data.condition,
                        data.category,
                        data.city,
                        data.state,
                        data.zip,
                        data.phone,
                        { photo: imgData?.data?.url }
                    );


                }
            })

    }

    const saveUser = (productTitle, price, oldPrice, usedYear, condition, category, city, state, zip, phone, productImage) => {
        const user = { productTitle, price, oldPrice, usedYear, condition, city, state, zip, email: sellerEmail, name: sellerName, category, phone, productImage, currentDate, productStatus };

        fetch('https://apens-home.vercel.app/add-product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged) {
                    notify()
                    navigate('../my-product');
                }
                if (!data?.acknowledged) {
                    navigate('../../')
                }
                console.log(data)
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                setError(errorMessage)
            });


    }

    return (
        <section className="p-6 bg-gray-100 text-gray-800">
            <ToastContainer />
            <form onSubmit={handleSubmit(handleAddProduct)} className="container w-max-68 flex  mx-auto space-y-12 ">
                <fieldset className=" gap-6 p-6 rounded-md shadow-sm ">
                    <div className="justify-center grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full  ">
                            <label htmlFor="productTitle" className="">Product Title</label>
                            <input id="productTitle" name='productTitle' type="text"
                                {...register("productTitle", {
                                    required: "product title is required",
                                })}
                                placeholder="bed" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full  sm:col-span-3">
                            <label htmlFor="price" className="text-sm">Price</label>
                            <input id="price" type="text"
                                {...register("price", {
                                    required: "price is required",
                                })}
                                placeholder="$000" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full  sm:col-span-3">
                            <label htmlFor="oldPrice" className="text-sm">Old Price</label>
                            <input id="oldPrice" type="text"
                                {...register("oldPrice")}
                                placeholder="$000" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900" />
                        </div>

                        <div className="col-span-full ">
                            <label htmlFor="category" className="text-sm">Category</label>
                            <select selected required id='category' {...register("category")
                        } className='w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900" '>
                                {categorize.map(ct => <option
                                    key={ct?._id}
                                    value={ct?.category
                                    }>
                                    {ct?.category}
                                </option>)}
                            </select>
                        </div>

                        <div className="col-span-full ">
                            <label htmlFor="condition" className="text-sm">Condition</label>
                            <select selected id='condition' {...register("condition")} className='w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900" '>
                                <option value='excellent'>Excellent</option>
                                <option value='good' >Good</option>
                                <option value='fair' >Fair</option>
                            </select>
                        </div>
                        <div className="col-span-full ">
                            <label htmlFor="usedYear" className="">Used Year</label>
                            <input id="usedYear" type="text"
                                {...register("usedYear", {
                                    required: "used year is required",
                                })}
                                placeholder="5" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full ">
                            <label htmlFor="image" className="">Real Image</label>
                            <input id="image" type="file"
                                {...register("image", {
                                    required: "image is required",
                                })}
                                className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="phone" className="text-sm">Phone</label>
                            <input id="city" type="text"
                                {...register("phone", {
                                    required: "you phone is required",
                                })}
                                placeholder="Chittagong" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full  sm:col-span-2">
                            <label htmlFor="city" className="text-sm">City</label>
                            <input id="city" type="text"
                                {...register("city", {
                                    required: "you location is required",
                                })}
                                placeholder="Chittagong" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full  sm:col-span-2">
                            <label htmlFor="state" className="text-sm">State / Province</label>
                            <input id="state" type="text"
                                {...register("state")}
                                placeholder="Noakhali" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full  sm:col-span-2">
                            <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
                            <input id="zip" type="text"
                                {...register("zip")}
                                placeholder="3812 (optional)" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900" />
                        </div>
                        <input className={`btn btn-accent mt-4`}
                            value="Add Product" type="submit" />
                        {error && <p className='text-red-600'>{error}</p>}
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default AddProduct;