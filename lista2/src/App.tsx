import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from "react-router-dom"
import './App.css';
import { ToastContainer } from 'react-toastify';

function App() {
  const [pageTitle, setPageTitle] = useState('')
  const rota = useLocation()
  const {id} = useParams()

  useEffect(()=>{
    document.title = pageTitle;
    switch(rota.pathname){
      case '/':
        setPageTitle('Home')
        break
    }
  },[pageTitle, rota, id])
  
  return (
    <>
    <ToastContainer/>
    <Outlet />
    </>
  );
}

export default App;
