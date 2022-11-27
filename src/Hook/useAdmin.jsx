import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Pages/Context/AuthProvide";

const useAdmin = realUser => {
    const {user} = useContext(AuthContext)
    const [isAdmin, setIsAdmin] = useState(false);
    const [isSeller, setIsSeller] = useState(false);
    const [isBuyer, setIsBuyer] = useState(false);
    
    useEffect(() => {
        if (realUser) {
            if(realUser?.userStatus === 'admin'){
                setIsAdmin(true)
            }
            if(realUser?.userStatus === 'seller'){
                setIsSeller(true)
            }
            if(realUser?.userStatus === 'buyer'){
                setIsBuyer(true)
            }
            fetch(`http://localhost:5000/users/admin/email?email=${realUser?.email}`)
                .then(res => res.json())
                .then(data => {
                })
        }
    }, [user, realUser])
    return [isAdmin, isSeller, isBuyer]
}
// useEffect(()=>{
    
// },[user?.email])

export default useAdmin;