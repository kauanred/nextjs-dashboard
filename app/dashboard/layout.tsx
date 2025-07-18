import SideNav from "../ui/dashboard/sidenav";

export default function Layout({children}: {children: React.ReactNode}) {
    //dode typescrip
  return (//html
        <div className="flex h-screen flex-col md:flex-row 
        md:overflow-hidden">
       <div className="w-full flex-none md:w-64">
           <SideNav />
       </div>
       <div className="flex-grow p-6 md:overflow-y-auto d:p-12">{children}

         </div>
       </div>
  );
}