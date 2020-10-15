import React from 'react';
import classes from './Footer.module.css';
import EmailIcon from '../../Assets/Email.svg';
import CallIcon from '../../Assets/Call.svg';
import TwitterIcon from '../../Assets/twitter.svg';
import FbIcon from '../../Assets/fbimage.png';
import LandMarkIcon from '../../Assets/landmark.png';
import LinkedinIcon from '../../Assets/linkden.png';


export default function Footer(){
    return(
        <div className={classes.FooterMainContainer}>
            <div className={classes.FooterItemContainer}>

               <div className={classes.FooterLinkSection}>
                   <div className={classes.FooterSectionHeading}>
                       EdYoda
                   </div>
                   <div className={classes.FooterItem}>
                       About Us
                   </div>
                   <div className={classes.FooterItem}>
                       Contact Us
                   </div>
                   <div className={classes.FooterItem}>
                       Terms Of Use
                   </div>
                   <div className={classes.FooterItem}>
                       Privacy Policy
                   </div>
                   </div> 

                   <div className={classes.FooterLinkSection}>
                   <div className={classes.FooterSectionHeading}>
                   RESOURCES
                   </div>
                   <div className={classes.FooterItem}>
                       Courses
                   </div>
                   <div className={classes.FooterItem}>
                       Learning Videos
                   </div>
                   <div className={classes.FooterItem}>
                       EdYoda Stories
                   </div>
                   <div className={classes.FooterItem}>
                       University
                   </div>
                   </div> 

                   <div className={classes.FooterLinkSection}>
                   <div className={classes.FooterSectionHeading}>
                   For Enterprises
                   </div>
                   <div className={classes.FooterItem}>
                       Hire Edyoda Graduates
                   </div>
                   <div className={classes.FooterSectionHeading}>
                   Quick Links
                   </div>
                   <div className={classes.FooterItem}>
                       Learn and Earn
                   </div>
                   <div className={classes.FooterItem}>
                       Become a Learning-Enabler
                   </div>
                   <div className={classes.FooterItem}>
                       Tips for Learning-Enabler
                   </div>
                   <div className={classes.FooterItem}>
                      Request New Topic
                   </div>
                   </div> 


                   <div className={classes.FooterLinkSection}>
                   <div className={classes.FooterSectionHeading}>
                   CONNECT
                   </div>
                   <div className={classes.FooterItem}>
                   2nd Floor #188, Survey No. - 123/1, Incubes Building Next to McDonalds, ITPL Main Rd, Brookefield, Bengaluru, Karnataka-560037, India
                   </div>
                   <div className={classes.FooterItemWithIcon}>
                    <img className={classes.ImageIcon} src={EmailIcon} alt="Email"/>
                      hello@edyoda.com
                   </div>
                   <div className={classes.FooterItemWithIcon}>
                    <img className={classes.ImageIcon} src={CallIcon} alt="CallIcon"/>
                    +91 8971554184
                   </div>
                   
                    <div className={classes.FooterSectionSocialLinks}>
                    <img className={classes.SocialIcon} src={LandMarkIcon} alt="LandMarkIcon"/>
                    <img className={classes.SocialIcon} src={TwitterIcon} alt="TwitterIcon"/>
                    <img className={classes.SocialIcon} src={FbIcon} alt="FbIcon"/>
                    <img className={classes.SocialIcon} src={LinkedinIcon} alt="LinkedinIcon"/>
                    </div>

                    <div className={classes.CopyrightSection}>
                    © 2020 <br/> zekeLabs Technologies Private Limited
                    </div>

                   </div> 

            </div>
        </div>
    )
}