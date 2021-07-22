
import React from 'react'
import img from './imgs/article1image.png';
import './Article.css';
import link from './imgs/link.svg';
import pp from './imgs/profilePic2.png';

export const Education = ({ headline, content }) => {
    return (
        <div>
            <div className="bg">
                <div className="row"><img src={img} alt="" /></div>
                <div className="row">
                    <div className="category m-3 "><span> 🔬️ Education</span></div>
                </div>

                <div className="row head">
                    <div className="col-10 heading">
                        {headline}
                    </div>
                    <div className="col-2 ">
                        <div class="dropdown">
                            <button class="dropbtn">...</button>
                            <div class="dropdown-content">
                                <a href="#">Edit</a>
                                <a href="#">Report</a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ms-3 mt-2 content">
                    {content}
                </div>
                <div className="row bottom ms-3 mt-4 ">
                    <div className="col-8 profile">
                        <div className="profilePic"><img src={pp} alt="" /></div>
                        <div className="userName">Sarah West</div>
                    </div>
                    <div className="col-2 views pt-2">  1.4k views<span className="link"> </span></div>
                    <div className="col-2 link pt-2"><a href="#"><img src={link} alt="" /></a></div>
                </div>
            </div>

        </div>


    )
}



