import { Card, CardContent } from "./ui/card"
import { LucideIcon } from 'lucide-react';


interface DashboardCardProps {
   title: string;
   count: number;
   icon: React.ReactElement<LucideIcon>;
 }

function TopCard({title,icon, count}:DashboardCardProps) {

   function renderCount(){
      if(title == "Revenu!"){
         return `${count}+$`
      }

      return count
   }


  return (
    <>
    <Card className='p-4 pb-0 rounded-r-xl hover:scale-105 transition-all cursor-pointer active:scale-95 bg-[#E9D8A7]'>
      <CardContent>
        <h3 className='text-3xl text-center mb-4 font-bold text-text2'>
          {title}
        </h3>
        <div className='flex gap-5 justify-center items-center'>
          {icon}
          <h3 className='text-4xl font-semibold text-text2'>
            {renderCount()}
          </h3>
        </div>
      </CardContent>
    </Card>

    </>
  )
}

export default TopCard







