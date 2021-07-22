import React from 'react';
import './Header.css';
import icon from './imgs/whole.svg';
import search from './imgs/search.svg';

export const Header = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row header pt-3">
                    <div className="col-2 ps-5 header_left ">
                        <img src={icon} alt="icon here" />
                    </div>
                    <div className="col-8 header_middle  text-center">
                        <div className="search_box">
                            <img src={search} alt="icon here" />
                            <input type="text" placeholder="Search for your favorite groups in ATG" />

                        </div>

                    </div>
                    <div className="col-2  header_right">
                        Create Account. <span><a href="">It's free</a></span>
                    </div>
                </div>
            </div>

        </div>


    )
}
