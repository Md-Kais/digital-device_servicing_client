import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TechnicianContext, UserContext } from '../../../App';
import Blog from '../../Blog/Blog/Blog';
import BlogCard from '../../Blog/BlogCard/BlogCard';
import Contact from '../../Contact/Contact';
import Services from '../../Servcies/Services';
import ServiceReputations from '../../ServiceReputations/ServiceReputations';
import AppNavbar from '../../Shared/AppNavbar/AppNavbar';
import Footer from '../../Shared/Footer/Footer/Footer';
import Testimonial from '../../Testimonial/Testimonial/Testimonial';
import TestimonialCard from '../../Testimonial/TestimonialCard/TestimonialCard';

import BusinessCardInfo from '../Header/BusinessCard/BusinessCardInfo/BusinessCardInfo';
import HeaderMidArticle from '../Header/HeaderMid/HeaderMid';

const Home = () => {

   
    return (
        <div>
            <AppNavbar></AppNavbar>
            <HeaderMidArticle></HeaderMidArticle>
            <BusinessCardInfo></BusinessCardInfo>
            <Services></Services>
            <ServiceReputations></ServiceReputations>

            <Testimonial></Testimonial>
            <TestimonialCard></TestimonialCard>
            <Blog></Blog>
            <BlogCard></BlogCard>
            <Contact></Contact>
            <Footer></Footer>
            {/* <button><Link to="/addReview">hi</Link></button> */}
        </div>
    );
};

export default Home;