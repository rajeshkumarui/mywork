'use client'
import React from "react";
import Link from "next/link";
import "./style.css";

interface DashboardLayoutProps{
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = (props)=>{
    return(
        <div>
            <nav className="flex py-4 px-5 justify-between text-white items-center bg-black">
                <h3 className="text-xl">Logo</h3>
                <ul className="flex items-center gap-4">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">About</Link></li>
                    <li><Link href="/">Contact</Link></li>
                    <li><Link href="/">Signup</Link></li>
                </ul>
            </nav>
            <div className="flex">
                <div className="bg-black">
                    <ul className="flex flex-col gap-4 px-5 py-5 text-white w-[15vw] h-screen">
                        <li><Link href="/dashboard">Dashboard</Link></li>
                        <li><Link href="/dashboard/apps">Apps</Link></li>
                        <li><Link href="/dashboard/profile">Profile</Link></li>
                        <li><Link href="/dashboard/api">Api</Link></li>

                    </ul>
                </div>
                <div className="p-5">{props.children}</div>
            </div>
        </div>
    )
}

export default DashboardLayout;