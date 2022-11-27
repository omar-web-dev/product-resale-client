import { useEffect, useState } from "react";
import BuyersCard from './BuyersCard';


const Buyers = () => {
    const [buyers, setBuyers] = useState([])
    console.log(buyers)
    useEffect(()=>{
        fetch(`http://localhost:5000/rule?userStatus=buyer`)
        .then(res => res.json())
        .then(data => setBuyers(data))
    }, [])
    return (
        <div>
                <div className="modal z-50" id="deleteModel">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        <div className="modal-action">
                            <a href='#' className="btn btn-error">Delete</a>
                        </div>
                    </div>
                </div>
                {buyers.length === 0 ?
                    <>
                        <h4 className="text-4xl">No product added</h4>
                    </>
                    :
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th className='text-center'>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {buyers.map((buyer, i) => <BuyersCard key={i} id={buyer._id} sl={i} buyer={buyer} />)}
                            </tbody>
                        </table>
                    </div>
                }
            </div>
    );
};

export default Buyers;