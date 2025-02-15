import AnalyticsChart from "@/components/Analytics";
import Card from "@/components/Card";
import {  ListCollapse, LucideListOrdered, User, Wallet } from "lucide-react";

export default function Home() {
  return (
   <div className=" ml-[300px]">
      <div className='flex flex-col  justify-around gap-5 mb-5 md:flex-row'>
        <Card title="Orders" count={20} icon={<LucideListOrdered size={50} className="text-[#E97171]"/>}/>
        <Card title="Producs" count={24} icon={<ListCollapse size={50} className="text-[#2EC1AC]"/>}/>
        <Card title="Revenu!" count={1000} icon={<Wallet size={50} className="text-[#E97171]"/>}/>
        <Card title="Visitors" count={748} icon={<User size={50} className="text-[#2EC1AC]"/>}/>
      </div>
      <AnalyticsChart/>
   </div>
  );
}
