import {  Route, Routes } from 'react-router-dom'
import Men from '../component/product_details/Men'
import Women from '../component/product_details/Women'
import Kids from '../component/product_details/Kids'
import Beauty from '../component/product_details/Beauty'
import Home_Kitchen from '../component/product_details/Home_Kitchen'
import Wishlist from '../pages/Wishlist'
import Auth from '../pages/Auth'
import ProductFeatures from '../pages/ProductFeatures'
import Home from '../pages/Home';
import ProductInfo from '../pages/ProductInfo'
import Navbar from '../component/nav/Navbar'
import Footer from '../pages/Footer'
import Contact from '../Footerundercomponent/Contact'
import TrackOrder from '../Footerundercomponent/TrackOrder'
import Cart from '../component/nav/Cart'
import PageNotFound from '../pages/PageNotFound'


const MainRoutes = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/men' element= {<Men/>}/>
        <Route path='/women' element={<Women/>} />
        <Route path='/kids' element= {<Kids/>}/>
        <Route path='/beauty' element= {<Beauty/>}/>
        <Route path='/home&kitchen' element= {<Home_Kitchen/>}/>
        <Route path='/wishlist' element= {<Wishlist/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/productFeatures' element={<ProductFeatures/>}/>
        <Route path='/productInfo' element={<ProductInfo/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/trackOrder' element={<TrackOrder/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
    </>
  )
}


export default MainRoutes