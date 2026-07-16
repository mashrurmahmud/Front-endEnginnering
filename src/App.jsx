import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayOut from './Layout/HomeLayOut'
import JobLayou from '../Components/JobLayOut/JobLayou'
import CreateJob from '../Components/CreateJobform/CreateJob'
import AuthLayOut from '../Components/AuthLayOut'
import Login from '../Components/LoginForm'
import Register from '../Components/Registration/Registration'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<HomeLayOut/>}>
      

     </Route>
     <Route path='/job/create-job' element={<JobLayou/>}>

      <Route path='/job/create-job' element={<CreateJob/>}/>

      

     </Route>
     <Route path='/auth' element={<AuthLayOut/>}>
     <Route path='/auth/login' element={<Login/>}/>
     <Route path='/auth/register' element={<Register/>}/>
       
     </Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
