import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Services from '../../Servcies/Services';
import AppNavbar from '../../Shared/AppNavbar/AppNavbar';
import Footer from '../../Shared/Footer/Footer/Footer';

import BusinessCardInfo from '../Header/BusinessCard/BusinessCardInfo/BusinessCardInfo';
import HeaderMidArticle from '../Header/HeaderMid/HeaderMid';

const Home = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <AppNavbar></AppNavbar>
            <HeaderMidArticle></HeaderMidArticle>
            <BusinessCardInfo></BusinessCardInfo>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;