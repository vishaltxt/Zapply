import React from 'react'
import './recommended.css'
import { Link } from 'react-router-dom';
import arrow from '../images/Group.png'
import boatman from '../images/boatman.png'
import person_search from '../images/person_search.png'
import group220 from '../images/Group 220.png'
const Recommended = () => {
    return (
        <div id='main'>
            <div className='recommended-buttons'>
                <button className='recommended-btn-1'><img src={person_search} alt=""></img><Link to="/">Top Matching</Link></button>
                <button className='recommended-btn-2'><img src={person_search} alt=""></img>Recommended</button>
            </div>
            <div className='recom'>
                <div className='recom-h2'>
                    <h2>Apply Now and Transform Your Career Journey!</h2>
                </div>
                <div><img className='recom-arrow' src={arrow} alt=""></img></div>
                <div className='recom-mid'>
                    <p>⚡Why Zestire?</p>
                    <ul>
                        <li>AI-Powered Job Recommendations</li>
                        <li>Tailored Opportunities for Your Expertise</li>
                    </ul>
                </div>
                <div>
                    <img className='boatman' src={boatman} alt=""></img>
                </div>
            </div>
            <div className='xyz'>
                <div className='recomm-xyz'>
                    <h2 className='recom-heading'>👉Recommended Jobs</h2>
                    <p>Explore suggested job searches</p>
                </div>
                <div className='abc'>
                    <div>
                        <img className='recom-group-1' src={group220} alt=''></img>
                    </div>
                    <div className='recom-head'>
                        <p className='recom-fulltime'>Full time</p>
                        <p className='same-p'>UI/UX Developer (React.js)</p>
                    </div>
                    <div className='recom-lower-mid'>
                        <p>Mumbai, Maharashtra</p>
                        <p className='same-p'>$300/Month <span className='fresher'>Fresher</span></p>
                    </div>
                    <div className='recomm-lower-buttons'>
                        <button className='recommend-apply-now'>Apply Now</button>
                        <button className='recommend-view-details'>View Details</button>
                    </div>
                </div>
                <div className='abc'>
                    <div>
                        <img className='recom-group-1' src={group220} alt=''></img>
                    </div>
                    <div className='recom-head'>
                        <p className='recom-fulltime'>Full time</p>
                        <p className='same-p'>UI/UX Developer (React.js)</p>
                    </div>
                    <div className='recom-lower-mid'>
                        <p>Mumbai, Maharashtra</p>
                        <p className='same-p'>$300/Month <span className='fresher'>Fresher</span></p>
                    </div>
                    <div className='recomm-lower-buttons'>
                        <button className='recommend-apply-now'>Apply Now</button>
                        <button className='recommend-view-details'>View Details</button>
                    </div>
                </div>
                <div className='abc'>
                    <div>
                        <img className='recom-group-1' src={group220} alt=''></img>
                    </div>
                    <div className='recom-head'>
                        <p className='recom-fulltime'>Full time</p>
                        <p className='same-p'>UI/UX Developer (React.js)</p>
                    </div>
                    <div className='recom-lower-mid'>
                        <p>Mumbai, Maharashtra</p>
                        <p className='same-p'>$300/Month <span className='fresher'>Fresher</span></p>
                    </div>
                    <div className='recomm-lower-buttons'>
                        <button className='recommend-apply-now'>Apply Now</button>
                        <button className='recommend-view-details'>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Recommended;
