import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { ShopContextProvider } from './assets/components/pages/Products/ShoppingCart/ShopContext';
import { UserContext } from './assets/Context/UserContext';
import './App.css';

import Profile from './assets/components/pages/profile/profile';
import OneProduct from './assets/components/pages/oneProduct/oneProduct';
import Home from './assets/components/pages/home/home';
import NotFound from './assets/components/pages/notFound/notFound';
import RootLayout from './assets/components/layout/RootLayout';
import { CreatingCampaign } from './assets/components/pages/campaings/CreatingCampaign/CreatingCampaign';
import { Donation } from './assets/components/pages/Donation/Donation';
import { SignIn } from './assets/components/pages/signIn/signIn';
import { CampaignSupport } from './assets/components/pages/CampaignSupport/CampaignSupport';
import Campaings from './assets/components/pages/campaings/campaings/campaings';
import { Container } from 'react-bootstrap';
import { Shop } from './assets/components/pages/Products/Shop/Shop';

import { SociallyActiveProfile } from './assets/components/pages/profile/SociallyActiveProfile/SociallyActiveProfile';
import { UserMoneyTable } from './assets/components/tables/userMoneyTable';
import UserDetailsPage from './assets/components/pages/profile/UserUpdate/UserUpdate';
import { UsersTable } from './assets/components/pages/profile/UsersTable/UsersTable';
import { DonationByUser } from './assets/components/pages/profile/DonationByUser/DonationByUser';
import { useProfile } from './assets/services/apiProfile';
import { User } from './assets/components/interfaces/User';
import ShippingDetails from './assets/components/pages/ShippingDetails/ShippingDetails';
import Checkout from './assets/components/pages/Products/Checkout';
import Cart from './assets/components/pages/Products/Cart/Cart';
import { MyCampaigns } from './assets/components/pages/profile/MyCampaignsTable/MyCampaignsTable';



function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
           <Route path="/" element={<Home />} />
        <Route path="/," element={<UserDetailsPage userId={1} />} />
        <Route path="profile" element={<NotFound />} />
        <Route path="AddCampaing" element={<CreatingCampaign />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="Products" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
   
        <Route path="*" element={<NotFound />}>
          <Route path=":productsId" element={<OneProduct />} />
        </Route>
      
     
      </Route>
    )
  );

  const { data: user } = useProfile(3);
  const [userState, setUserState] = useState<User | null>(user || null); // Explicitly handle the case of `undefined`



  return (
    <UserContext.Provider value={{ user: userState, setUser: setUserState }}>
      <ShopContextProvider>
        <Container className="mb-4">
          <RouterProvider router={router} />
          
        </Container>
      </ShopContextProvider>
    </UserContext.Provider>
  );
}

export default App;
