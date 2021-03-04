import React, { Component } from 'react';
import './SideBar.css';
import SideNav from '../sidenav/SideNav'

class SideBar extends Component {
    render() {
        return (
            <div className="side">
                <p>This will be the side bar</p>
                <SideNav />
            </div>
        )
    }
}

export default SideBar