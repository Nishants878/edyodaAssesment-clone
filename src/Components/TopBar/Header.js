import React, { Component } from 'react';
import classes from './Header.module.css';
import {Link} from 'react-router-dom';
import EdyodaLogo from '../../Assets/EdyodaLogo.png';


export default class Header extends Component {
   render(){
      return (
         <div className={classes.NavigationContainer}>
            
             <div className={classes.NavigationContentLeft}>
  
                 <div className={classes.LogoContainer}>
                    <Link className={classes.NavLink} to="#">
                       <img className={classes.LogoImage} src={EdyodaLogo} alt="Logo"/>
                       
                    </Link>
                 </div>
  
                 <div className={classes.NavItem}>
                      <Link className={classes.NavLink} to="/HomePage">Practice Arena</Link>
                 </div>
  
                 <div className={classes.NavItem}>
                      <Link className={classes.NavLink} to="#">Classroom</Link>
                 </div>
  
                 <div className={classes.NavItem}>
                      <Link className={classes.NavLink} to="#">View Jobs</Link>
                 </div>
             </div>
  
             <div className={classes.NavigationContentRight}>
               <div className={classes.NavItemR}>
                  <i className={["far", "fa-bell", classes.Icons].join(' ')}></i> 
                </div>
  
                <div className={[classes.NavItemR, classes.Drop].join(' ')}>
                  User
                </div>
                <div className={classes.DropWrapper}>
               <i className={["fas", "fa-caret-down", classes.DropIcon].join(' ')}></i> 
                </div>
  
             </div>
  
  
         </div>
      );
   }
    
  }