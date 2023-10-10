'use client'
import type { NextPage } from "next";
import { usePathname } from 'next/navigation';

const Profile: NextPage = () =>{
    const pathname = usePathname()
    return(
        <div>
           <h1 className="text-xl font-bold">I am a Profile</h1>
           <p>Current pathname: <span className="font-bold">{pathname}</span></p>  
        </div>
    )
}

export default Profile;