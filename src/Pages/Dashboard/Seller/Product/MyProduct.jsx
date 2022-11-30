import { useContext } from "react";
import { useQuery } from '@tanstack/react-query';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvide";
import MyProductCard from "./MyProductCard";
import Spanner from "../../../Spanner/Spainer";

const MyProduct = () => {
    const { user } = useContext(AuthContext)


    const { data: products, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://apens-home.vercel.app/my-product?email=${user?.email}`)
                const data = await res.json();
                return data;
            }
            catch (error) {
            }
        }
    });


    if (isLoading) {
        return <Spanner/>
    }
    return (
        <div>
            <div className="modal z-50"  id="deleteModel">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <a href='#' className="btn btn-error">Delete</a>
                    </div>
                </div>
            </div>
            {products.length === 0 ?
                <>
                    <h4 className="text-4xl">No product added</h4>
                    <Link to={'/dashboard/add-product'} className="btn btn-sm btn-success mt-5">Add Product</Link>
                </>
                :
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Name</th>
                                <th>price</th>
                                <th>Advertise</th>
                                <th>Status</th>
                                <th className='text-center'>Edit</th>
                                <th className='text-center'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((pt, i) => <MyProductCard  key={pt._id} id={pt._id} sl={i} product={pt} />)}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default MyProduct;