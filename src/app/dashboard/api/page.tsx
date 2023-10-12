'use client'
import { usePathname } from 'next/navigation';

async function getUsers() {
    const query = await fetch('https://dummyjson.com/users');
    return await query.json();
}

const Apicall = async () => {
    const pathname = usePathname()
    const userData = await getUsers();
    // if we want some data
    //let sliceData = userData.users.slice(0, 10);
    //const allUsers = JSON.stringify(userData);
    //console.log("All Users", allUsers);
    return (
        <div>
            <h1 className="text-xl font-bold">I am a Json call</h1>
            <p>Current pathname: <span className="font-bold">{pathname}</span></p><br/>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Pic</th>
                </tr>
           
            {
                userData.users &&
                Array.isArray(userData.users) &&
                userData.users.map((user: any) => (
                    <tr className='user-container' key={user.id}>
                        <td>{user.firstName}</td>
                        <td>{user.maidenName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.age}</td>
                        <td>{user.gender}</td>
                        <td><img className='w-8' src={user.image}></img></td>
                        </tr>
                    
                ))
            }
            </table>
        </div>
    )
}
export default Apicall;