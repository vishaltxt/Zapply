import React from 'react'
import './applynow.css'
import { Link } from 'react-router-dom';
import person_search from '../images/person_search.png'
import arrow from '../images/Group.png'
import frame from '../images/Frame.png'
import group from '../images/Group 220.png'
import profile from '../images/Profile.png'

const Applynow = () => {
    return (
        <div id="main">
            <div className='container'>
                <div className='buttons'>
                    <button className='btn-1'><img src={person_search} alt=""></img><Link to="/">Top Matching</Link></button>
                    <button className='btn-2'><img src={person_search} alt=""></img><Link to="/recommended">Recommended</Link></button>
                </div>
                <div className='color'>
                    <div className='color-inside'>
                        <img className='arrow-img' src={arrow} alt=""></img>
                        <h2 className='h2'>🚀 Unlock Your Dream Tech Career with Zestire!</h2>
                        <p className='color-para'>Seize the opportunity now! Our powerful matching algorithm indicates an</p>
                        <p className='color-para'>incredible 90% profile match for you. Don't miss out— Apply now⚡</p>
                    </div>
                    <div>
                        <img className='frame-img' src={frame} alt=""></img>
                    </div>
                </div>
                <div className='apply-color'>
                    <h2>👉 Apply Now</h2>
                    <div className='two-containers'>
                        <div className='two-inside'>
                            <img className='group-1' src={group} alt=""></img>
                            <img className='profile-1' src={profile} alt=""></img>
                            <span className='apply221'>221 Applied</span>
                            <p className='full-time'>Full time</p>
                            <p className="react-native">React Native</p>
                            <p className='price'>$3500 / <span className='monthly'>Monthly</span></p>
                            <div>
                                <button className='apply-now'>Apply Now</button>
                                <button className='view-details'>View Details</button>
                            </div>
                        </div>
                        <div className='two-inside'>
                            <img className='group-2' src={group} alt=""></img>
                            <img className='profile-2' src={profile} alt=""></img>
                            <span className='apply222'>221 Applied</span>
                            <p className='full-time'>Full time</p>
                            <p className="react-native">Chief Information Officer</p>
                            <p className='price'>$3500 / <span className='monthly'>Monthly</span></p>
                            <div className='button-box'>
                                <button className='apply-now'>Apply Now</button>
                                <button className='view-details'>View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Applynow;
