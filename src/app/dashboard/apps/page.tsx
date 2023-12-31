'use client'
import type { NextPage } from "next";
import { usePathname } from 'next/navigation';

const Apps: NextPage = () =>{
    const pathname = usePathname()
    return(
        <div>
           <h1 className="text-xl font-bold">I am an App</h1>
           <p>Current pathname: <span className="font-bold">{pathname}</span></p>  
        </div>
    )
}

export default Apps;