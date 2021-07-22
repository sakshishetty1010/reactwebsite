import React from 'react';
import './SmallNav.css';
import arrow from './imgs/Vector.png';
import people from './imgs/joinGrp.png';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export const Smallnav = () => {
    return (
        <div>
            <div className="conatiner">
                <div className="row">
                    <div className="col-10">
                        <div className="nav_left">

                            <div className="nav_option nav_option_active">All Posts(32)</div>
                            <div className="nav_option">Article</div>
                            <div className="nav_option">Education</div>
                            <div className="nav_option">Job</div>
                        </div>
                    </div>
                    <div className="col-8">   <div className="nav_right">
                <button className="post">Write a Post <img src={arrow} alt="" /> </button>
                <button className="joingrp"><img src={people} alt="" />Join Group</button>
            </div>
</div>
                </div>
            </div>

         


        </div>




    )
}
