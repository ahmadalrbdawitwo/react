import './App.css';
import Bodyy from './body/Bodyy';
import Featers from './body/Featers';
import Footer from './shared files/Footer';
import Join from './body/Join';
import Cartitem from './contentpage/Cartitem';
import { useState, useEffect } from 'react';
import { Route, Routes , BrowserRouter } from 'react-router-dom';
import Cart from './Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData , fetchDisebar, fetchdesebar ,fetchmaintype , fetchcart} from './data/dataSlice';
import Navbar, { Nav } from './shared files/Navbar';
import Carticon from './Cart/Carticon';


function App() {

  const dispatch = useDispatch();
  const {  data } = useSelector((state) => state.data);
  const disebarData = useSelector((state) => state.data.disebarData);
  const maintype = useSelector((state) => state.data.maintype);
  const desebar = useSelector((state)=> state.data.desebar); 
  const cartdata = useSelector((state)=> state.data.cartdata)
  const isloding = useSelector((state)=> state.data.loading)

// dispatch the all data in api 
  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchDisebar());
    dispatch(fetchmaintype())
    dispatch(fetchdesebar())
    dispatch(fetchcart())


  }, [dispatch]);








 




  return ( 
   
    <div>
      {   isloding == true ? "pleas one secand ":
       <>
       <Nav/>
       
       <BrowserRouter> 
        <Routes>
 
         {/* route of the home  page */}
         <Route path='/' element={
           <>
         <Bodyy/>
 {maintype !== undefined ?<Featers maintype={maintype}/>:"'" }
     <Join/>
 
           
           
           </>
         } />
 
 <Route path='/content' element={
           <div className=''>
             
     <Cartitem isloding={isloding}   content={data}  sidebarbtn={desebar} />
     <Carticon/>
           
           </div>
         } />
 
 
 <Route path='/cart' element={
           <div className=''>
             <Cart contentcart={cartdata}  />
             
             <Carticon/>
           </div>
         } />
 
        
 
 
 
 
        </Routes>
        
        
        </BrowserRouter>
        <Footer/>
       
       </>
    
    }
     
  
  
       

 

   




  
    </div>
  );
}



export default App;
