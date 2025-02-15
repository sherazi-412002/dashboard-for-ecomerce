import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <Navbar/>
        <div className="flex">
        <div className="border bg-[#C9A857] fixed h-[100vh] w-[300px]">
           <Sidebar/>
        </div>
        <div className="p-8 bg-[#FDFBF2] mt-[80px] w-full">
        {children}
        </div>
        </div>
    </>
  );
};

export default MainLayout;