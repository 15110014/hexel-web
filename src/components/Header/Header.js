import React, { Component } from 'react';
import{Route,Link} from 'react-router-dom';

const menus =[
    {
        name : 'Home',
        to : '/',
        exact : true
    },
    {
        name : 'About',
        to : '/about',
        exact : false
    },
    {
        name : 'Services',
        to : '/services',
        exact : false
    },
    {
        name : 'Projects',
        to : '/projects',
        exact : false
    },
    {
        name : 'Contact',
        to : '/contact',
        exact : false
    }
];

const MenuLink = ({lable,to,activeOnlyWhenExact}) =>{
    return(
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({match})=>{
                var active = match ? 'nav-item active' : 'nav-item';
                return(
                    <li className={active}>
                        <Link to={to}>
                            {lable}
                        </Link>
                    </li>
                );
            }}
        />
    );
};
class Menu extends Component {
  render() {
    return (
        <div className="navbar navbar-default">
            <a className="navbar-brand">HEXEL Solutions</a>
            <ul className="nav navbar-nav">
                {this.showMenus(menus)}
            </ul>
        </div>
    );
  }
  showMenus=(menus)=>{
    var result = null;
    if(menus.length > 0){
        result = menus.map((menu,index)=>{
            return(
                <MenuLink
                    key={index}
                    lable={menu.name}
                    to={menu.to}
                    activeOnlyWhenExact={menu.exact}
                />
            );
        });
    }
    return result;
  }
}

export default Menu;
