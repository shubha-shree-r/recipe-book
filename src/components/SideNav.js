import React from 'react';
import "../css/sidenav.css"


function SideNav() {


    return (
        <div className='sidebar'>
            <button className="sidebar-toggle" >
                Menu
            </button>
            <nav className="sidebar-nav">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideNav;