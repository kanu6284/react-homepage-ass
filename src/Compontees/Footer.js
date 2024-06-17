import React from 'react';
import { IoIosListBox } from 'react-icons/io';
import { RxDashboard } from 'react-icons/rx';
import { RiPieChart2Fill } from 'react-icons/ri';
import { BsArrowRepeat } from 'react-icons/bs'; 
import './footer.css'; 

const Footer = () => {
    return (
        <footer className="footer bg-black text-white">
            <div className="footer-container">
                <div className="icon-group">
                    <IoIosListBox size={24} />
                    <RxDashboard size={24} />
                    <RiPieChart2Fill size={24} />
                    <BsArrowRepeat size={24} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
