import React from 'react';
import {Smallnav} from './Smallnav';
import './Rectangle.css';
import {Card} from './Card';


export const Rectangle = () => {
    return (
        <div>
        <div className="body_center">
      <div className="second_nav"><Smallnav/></div>
        <div className="cardinfo">  <Card/></div>  
        </div>
           
        </div>
    )
}
