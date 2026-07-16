import React, { useState } from 'react';
import Header from '../Header';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../Footer';
import { X } from 'lucide-react';

const Dashboard = () => {
      const [open, setOpen] = useState(false);
    const menu =[
        {
        name:"Dashboard",
        path:'/dashboard'
        },
        {
        name:"Profile",
        path:'/dashboard/profile'
        },
        {
          name:'Jobs You applied',
          path:'/dashboard/jobs'
        },
        {
           name:'Basic-info',
           path:'/dashboard/basic-info'
        }
        

]
    return (
        <div className='container mx-auto'>
            <Header/>
          <div className='flex gap-2'>
              <aside
        className={`fixed lg:static top-0 left-0 z-50 h-full w-64 bg-slate-900 text-white transition-all duration-300
        ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="flex items-center justify-between p-5 border-b border-slate-700">
          <h1 className="text-2xl font-bold text-cyan-400">
            JobPortal
          </h1>

          <button
            className="lg:hidden"
            onClick={() => setOpen(false)}
          >
            <X />
          </button>
        </div>

        <nav className="mt-5 flex flex-col gap-2 px-4">

          {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 transition
                ${
                  isActive
                    ? "bg-cyan-500 text-white"
                    : "hover:bg-slate-800"
                }`
              }
            >
              {item.icon} {item.name}
            </NavLink>
          ))}

        </nav>
      </aside>
           <div className='flex-1'>
             <Outlet/>
           </div>
          
          </div>
           <Footer/>
        </div>
    );
};

export default Dashboard;