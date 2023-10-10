'use client'
import { usePathname } from 'next/navigation';

async function getUsers(){
     const query = await fetch('https://dummyjson.com/users');
     return await query.json();
 }

const Apicall = async () =>{
    const pathname = usePathname()
    const userData = await getUsers();
    const allUsers = JSON.stringify(userData);
    //console.log("All Users", allUsers);
    return(
        <div>
           <h1 className="text-xl font-bold">I am a Apicall</h1>
           <p>Current pathname: <span className="font-bold">{pathname}</span></p> 
           <p className='my-5 apipara'><span className='font-bold my-5'>Users</span> {allUsers}</p> 
           
           {
                userData && 
                Array.isArray(userData) && 
                userData.map((user: any) => ( 
                <div key={user.users.id}>
                    <h4>{user.users.firstName}</h4>
                </div>
            ))
            }
        </div>
    )
}
export default Apicall;