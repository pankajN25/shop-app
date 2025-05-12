import { BrowserRouter, Routes, Route } from 'react-router-dom';




import ShopNavBar from './ShopNavBar';

import Electronic from '../electronic/Electronic';
import Clothing from '../clothing/Clothing';
import PageNotFound from '../PageNotFound';
import Home from '../Home';
import Mobile from '../electronic/mobile/Mobile';
import MobileGallary from '../electronic/mobile/MobileGallary';
import MobileDetail from '../electronic/mobile/MobileDetail';
import Laptop from '../electronic/laptop/Laptop';
import Men from '../clothing/men/Men';
import Ladies from '../clothing/ladies/Ladies';
import Kids from '../clothing/kids/Kids';
import LaptopGallary from '../electronic/laptop/LaptopGallary';
import LaptopDetails from '../electronic/laptop/LaptopDetails';
import LoginRegister from '../login_register/LoginRegister';
import ShoppingCart from '../shopping_cart/ShoppingCart';
import MenGallery from '../clothing/men/MenGallery';
import MenDetails from '../clothing/men/MenDetails';
import LadiesGallery from '../clothing/ladies/LadiesGallery';
import LadiesDetails from '../clothing/ladies/LadiesDetails';
import KidGallery from '../clothing/kids/KidGallery';
import KidDetails from '../clothing/kids/KidDetails';

import NewArrivals from '../homep/newarrivels/NewArrivals';
import DealsPage from '../homep/newarrivels/DealsPage';





const ShopRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ShopNavBar />}>
                    {/* Child route definition */}
                    <Route path='/' element={<Home/>} >
                        <Route path="electronics" element={<Electronic />} >
                            <Route path='elec/mobile' element={<Mobile/>} >
                            {/* {child route} */}
                                <Route index element={<MobileGallary/>} />
                                <Route path='mobiles/:mbl_id' element={<MobileDetail/>} />
                            </Route>
                           <Route path='laptop' element={<Laptop/>} >
                                <Route path="" element={<LaptopGallary/>}/> 
                                <Route path="detail/:id" element={<LaptopDetails />} />
                           </Route>                         
                        </Route>
                        <Route path="clothing" element={<Clothing/>}/>
                    </Route>
                    <Route path='elec' element={<Electronic/>} >
                        {/* {child route from electronic} */}
                        <Route path='/elec/mobile' element={<Mobile/>} >
                        {/* {child route} */}
                            <Route index element={<MobileGallary/>} />
                            <Route path='mobiles/:mbl_id' element={<MobileDetail/>} />
                        </Route>
                        <Route path ='laptop' element={<Laptop/>} >
                            <Route path="" element={<LaptopGallary/>}/> 
                            <Route path="detail/:id" element={<LaptopDetails />} />                        
                        </Route>

                    
                    </Route>
                    <Route path='cloths' element={<Clothing/>} >
                         <Route path='men' element={<Men/>}>
                            <Route index element={<MenGallery/>}/>
                            <Route path=':men_id' element={<MenDetails/>}/>
                            
                         </Route> 
                         <Route path='ladies' element={<Ladies/>}>
                            <Route index element={<LadiesGallery/>}/>
                            <Route path=':ladies_id' element={<LadiesDetails/>}/>    
                         </Route>
                            
                         <Route path='kid' element={<Kids/>}>
                             <Route index element={<KidGallery/>}/>
                             <Route path=':kid_id' element={<KidDetails/>}/>
                          </Route>                  
                    </Route>
                    <Route path='phon' element={<Mobile/>}>
                        <Route index element={<MobileGallary/>} />
                        <Route path='mobiles/:mbl_id' element={<MobileDetail/>} />
                    </Route>
                    <Route path='deals' element={<DealsPage/>}/>
                    <Route path='newarri' element={<NewArrivals/>}/>
                    <Route path='login_register' element={<LoginRegister/>}/>
                    <Route path='cart' element={<ShoppingCart/>}/>
                    <Route path='*' element={<PageNotFound/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default ShopRouter;

// import { Routes, Route } from "react-router-dom";
// import ShopNavBar from "./ShopNavBar";
// import Electronic from "../electronic/Electronic";
// import Clothing from "../clothing/Clothing";
// import PageNotFound from "../PageNotFound";
// import Home from "../Home";
// // import Mobile from "../electronic/mobile/Mobile";
// // import MobileGallary from "../electronic/mobile/MobileGallary";
// // import MobileDetail from "../electronic/mobile/MobileDetail";
// // import Laptop from "../electronic/laptop/Laptop";

// const ShopRouter = () => {
//   return (
//     <>
//       <ShopNavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="elec" element={<Electronic />}/>
//           {/* Child routes inside Electronic */}
//           {/* <Route path="mobile" element={<Mobile />}> */}
//             {/* <Route path="gallery" element={<MobileGallary />} /> */}
//             {/* <Route path="detail/:id" element={<MobileDetail />} /> */}
//           {/* </Route> */}
//           {/* <Route path="laptop" element={<Laptop />} /> */}
//         {/* </Route> */}
//         <Route path="cloths" element={<Clothing />} />
//         <Route path="*" element={<PageNotFound />} />
//       </Routes>
//     </>
//   );
// };

// export default ShopRouter;
