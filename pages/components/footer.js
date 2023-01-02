import React from 'react';
import foooter from '../../styles/footer.module.css'

const Footer = () => {
    return (
        <div className={`${foooter.main} `}>
            <div className={foooter.container}>
                <div className={foooter.one}>
                    <h4 className={foooter.h4}>About</h4>

                    <p>
                        <b> Travel Gear </b> is dedicated to Tourism Industry in Bangladesh focusing on Tour Information, Tourism related Content Making, Market Research, Online Booking, Travel Magazine, and E-Tourism. We are working to develop a sustainable e-Tourism Platform in Bangladesh. More About <b>Travel Gear</b>.
                        <br />
                        <br />
                        Travel Gear is registered as a business entity under Dhaka North City Corporation (DNCC). DNCC Trade License No. 1234567. Issue Date: 02-03-2021

                        Travel Mate is member of e-CAB.
                        <br /><br />
                        eCAB Membership ID – 1697
                        <br /><br />
                        Travel Mate is a Speedhost Bangladesh  Compnay.
                        <br /><br />
                        We are hiring
                    </p>
                </div>
                <div className={foooter.two}>
                    <h4 className={foooter.h4}>Bank Account Info</h4>

                    <p>
                        Account Name: Travel Mate Bangladesh
                        Account Number: 1549 204 816 995001
                        <br /><br />
                        Routing Number: 060260727
                        <br /><br />
                        Bank Name: Brac Bank Ltd.
                        <br /><br />
                        Branch: Banasree Branch
                        <br /><br />
                        Account Name: Travel Mate Bangladesh
                        <br /><br />
                        Account Number: 109 107 0242102
                        <br /><br />
                        Bank Name: Eastern Bank Ltd.
                        <br /><br />
                        Branch: Banasree Branch
                        <br /><br />
                        bKash Merchant: 01766990725
                        <br /><br />
                        bKash Online Payment: Click here
                    </p>
                </div>
                <div className={foooter.three}>
                    <h4 className={foooter.h4}>Contact Us</h4>

                    <p>
                        Kha 215, Arma Majeda Malik Tower, Level-4, Merul Badda, Dhaka 1212
                        <br /><br />
                        09 678 388 388
                        <br /><br />
                        info@travelmate.com.bd
                        <br /><br />
                        live:78eda4793fc7ffa9
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;