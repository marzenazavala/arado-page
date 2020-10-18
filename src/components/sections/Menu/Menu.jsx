import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './Sidebar';
import {Link, animateScroll} from 'react-scroll';
import './menu.scss';

class Menu extends Component {
    
    state = {
        drawerOpen: false,
        headerShow: false
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if(window.scrollY > 0) {
            this.setState({
                headerShow: true
            })
        } else {
            this.setState({
                headerShow: false
            })
        }
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }

    render() {
        return (
            <AppBar 
            position="fixed"
            style={{
                backgroundColor: this.state.headerShow ? '#333333' : 'transparent',
                boxShadow: 'none',
                padding: '10px 0px',

            }}
            
            >
                <Toolbar>
                    <div className="menu-items">

                        <div className='logo-small' onClick={()=>animateScroll.scrollToTop()}/>
                        {/* <Link to='aktualnosci' smooth={true} duration={1500} offset={-80}>Aktualności</Link>
                        <Link to='partnerzy' smooth={true} duration={1500}>Partnerzy</Link>
                        <Link to='galeria' smooth={true} duration={1500}>Galeria</Link>
                        <Link to='kontakt' smooth={true} duration={1500}>Kontakt</Link> */}

                        
                    </div>
                
                <div onClick={() => this.toggleDrawer(true)}>
                    <MenuIcon className='menu-items'/>
                </div>
                <SideDrawer
                    open={this.state.drawerOpen}
                    onClose={(value) => this.toggleDrawer(value)}
                />

                
                </Toolbar>
            </AppBar>
        );
    }
}

export default Menu;