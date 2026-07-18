import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import { BrowserRouter, Route, Routes } from 'react-router-dom'


import AuthLayOut from './Components/AuthLayOut'
import HomeLayOut from './Layout/HomeLayOut'
import Register from './Components/Registration/Registration'
import Dashboard from './Components/DashBoard/Dashboard'
import BasicInfo from './Components/Basic-info/Basic-info'
import Job from './Components/DashBoard/Job'
import JobLayou from './Components/JobLayOut/JobLayou'
import CreateJob from './Components/CreateJobform/CreateJob'
import Login from './Components/LoginForm'
import Home from './Components/Home'
import JobInfo from './Components/Job-info/JobInfo'
import ProtectedRouted from './Components/ProtectedRoute/ProtectedRouted'
import { useStrore } from './store/useStore'

function App() {
  const [count, setCount] = useState(0);
 

 

  return (
   <>
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<HomeLayOut/>}>

       <Route path='/' element={<Home/>}/>
      

     </Route>
     <Route path='/job' element={<JobLayou/>}>

      <Route path='/job/create-job' element={<ProtectedRouted><CreateJob/></ProtectedRouted>}/>
      <Route path='/job/jobinfo/:id' element={<JobInfo/>}/>

      

      

     </Route>
     <Route path='/auth' element={<AuthLayOut/>}>
     
     <Route path='/auth/login' element={<Login/>}/>
     <Route path='/auth/register' element={<Register/>}/>
       
     </Route>
     <Route path='/dashboard' element={<Dashboard/>}>
      <Route path='/dashboard/basic-info' element={<ProtectedRouted><BasicInfo/></ProtectedRouted>}/>
      <Route path='/dashboard/jobs' element={<Job/>}/>

      
     </Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
