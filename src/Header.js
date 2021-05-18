import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';


function Header() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        });

    };

    return (
        <div className='header'>
            <div className='header__left'>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src='data:image/png;base64,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'></img>
            </div>
            <div className='header__middle'>
                <SearchIcon />
                <input placeholder="Search email" type="text" />
                <ArrowDropDownIcon className="header__inputCaret" />
            </div>
            <div className='header__right'>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl} />
            </div>
        </div>
    )
}

export default Header
