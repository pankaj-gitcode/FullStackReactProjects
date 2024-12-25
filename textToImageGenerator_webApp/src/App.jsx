import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';


const Home = lazy(()=>import('./pages/Home'));
const Result = lazy(()=>import('./pages/Result'));
const BuyCredit = lazy(()=>import('./pages/BuyCredit'));
const Navbar = lazy(()=>import('./components/Navbar'))


export default function App(){

  return(<>
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen
     bg-gradient-to-b from-teal-50 to-orange-50 '>

      <Suspense fallback={<p>Loading...</p>}>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/result' element={<Result/>}/>
            <Route path='/buy' element={<BuyCredit/>}/>
          </Routes>

      </Suspense>
    

    </div>
  </>)
}