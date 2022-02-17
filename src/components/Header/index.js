import React from "react";
import './Header.css'

export default ({black}) => {

    return (
     <header className={black ? 'black' : ''}>
         <div className="header--logo">
             <a href="/">
                 {/* <img className="header--logo--img" /> */}
                 Logo Clone
             </a>
         </div>
         <div className="header--user">
             <a href="/">
                 <img className="header--avatar" />
             </a>
         </div>
     </header>
    );
}