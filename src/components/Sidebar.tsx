"use client"
import {ArrowDownToDotIcon, LayoutDashboard, ListOrdered, ListTodoIcon} from 'lucide-react'  
import Link from "next/link"
import { usePathname } from 'next/navigation';

function Sidebar() {

 const pathName = usePathname();

  return (
<>
 <ul className="space-y-4 mt-24">
    <li className={`flex gap-2 text-xl pl-4 hover:text-black hover:bg-white  transition-all ${
      pathName === "/" ? "" : "text-white"} `}>
      <LayoutDashboard className="h-5 mt-1 w-5" />
       <Link href={'/'}>Dashboard</Link>
    </li>

    <li className={`flex gap-2 text-xl pl-4 hover:text-black hover:bg-white transition-all ${
         pathName === "/orders" ? "text-black bg-white" : "text-white"}`}>
      <ListOrdered className="h-5 mt-1 w-5" />
       <Link href={'/orders/orderslogin'}>Manage Orders</Link>
    </li>

    <li className={`flex gap-2 text-xl pl-4 hover:text-black hover:bg-white transition-all ${
         pathName === "/all-products" ? "text-black bg-white" : "text-white"}`}>
      <ListTodoIcon className="h-5 mt-1 w-5" />
       <Link href={'/all-products'}>All Products</Link>
    </li>

    <li className={`flex gap-2 text-xl pl-4 hover:text-black hover:bg-white transition-all ${
         pathName === "/add-products" ? "text-black bg-white" : "text-white"}`}>
      <ArrowDownToDotIcon className="h-5 mt-1 w-5" />
       <Link href={'/add-products'}>Add Products</Link>
    </li>

 </ul>
</>

  )
}

export default Sidebar