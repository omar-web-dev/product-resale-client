import { useEffect, useState } from "react";
import BuyersCard from './BuyersCard';
import DeleteConfirm from '../DeleteConfirm/DeleteConfirm';
import { useQuery } from "@tanstack/react-query";
import Spanner from "../../../Spanner/Spainer";
import { ToastContainer, toast } from 'react-toastify';




const Buyers = () => {
    // const [buyers, setBuyers] = useState([])
    const notify = () => toast("Deleted!");
    const { data: buyer, isLoading, refetch } = useQuery({
        queryKey: ['buyer'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/rule?userStatus=buyer', {

                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });
    // console.log(buyer)
    
    const [deleteID, setDeleteID] = useState()
    

    let hidden = true
    console.log(hidden)

    const close = (hidden) => {
        console.log(hidden)
    }

    const ids =(deleteId)=>{
        close(false)
        setDeleteID(deleteId)
    } 

    if(isLoading){
        return <Spanner/>
    }
    
    return (
        <div>
            <ToastContainer />
            {buyer.length === 0 ?
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
                            {buyer.map((buyer, i) =>
                                <BuyersCard
                                    key={i}
                                    id={buyer._id}
                                    sl={i}
                                    ids={ids}
                                    buyer={buyer}
                                    // refetch={refetch}
                                    notify={notify}
                                />)}
                        </tbody>
                    </table>
                </div>
                } 
            {/* <DeleteConfirm
                close={close}
                hidden={hidden}
                deleteID={deleteID}
            /> */}
        </div>
    );
};

export default Buyers;