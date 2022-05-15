import React from 'react'
import"./css/sidebar.css"
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {

  const user = useSelector(selectUser);
  return (

    
    <div className="sidebar">
        <div className="sidebar__profile">
            <img src="https://media.istockphoto.com/vectors/abstract-blurred-colorful-background-vector-id1248542684?k=20&m=1248542684&s=612x612&w=0&h=1yKiRrtPhiqUJXS_yJDwMGVHVkYRk2pJX4PG3TT4ZYM="/>

            <div className="profile__details"> 
            <Avatar/>
            <h4>{user.displayName}</h4>
            <p>Dancer</p>  
            </div>

            <div className="profile__stats">
                <span>Who viewed your profile </span>
                <span className="stat__number">20</span>
                </div>  
                <div className="profile__stats">
                    <span>Connection<br/><b>Grow Your Networks</b></span>
                    <span className="stat__number">150</span>
                </div>
        </div>
    <div className="sidebar__recent">
        <p>Trending</p>
        <p className="hash"><span>#</span> Movies production company</p>
        <p className="hash"><span>#</span> Webseries production company</p>
        <p className="hash"><span>#</span>Movies Director </p>
        <p className="hash"><span>#</span>Music Industry</p>
        <p className="hash"><span>#</span>Television Industry </p>
        <p className="hash"><span>#</span>Comedy Industry</p>
        <p className="hash"><span>#</span>Daily vlogs Industry</p>
        <p className="hash"><span>#</span>Dance Industry </p>
        <p className="hash"><span>#</span>Advertising Industry</p>
        <p className="hash"><span>#</span>Radio Industry</p>



    </div>
    </div>
  )
}

export default Sidebar