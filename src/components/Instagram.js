import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import '../assets/style.css';
// import { FontAwesomeIcon } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Instagram = () => {
    return (
        <>
            <div className="instagram">
                <h2 className='inst-title'>
                    INSTAGRAM
                </h2>
                <div className="inst-list">
                <div className="inst-item" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}assets/images/insta-1.jpg)` }}>
                    <Link to="images/insta-1.jpg" className="inst-link">
                        <FontAwesomeIcon icon="fa-solid fa-camera" />
                    </Link>

                </div>
                <div className="inst-item" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/insta-2.jpg)` }}>
                    <Link to="images/insta-2.jpg" className="inst-link">
                        <FontAwesomeIcon icon="fa-solid fa-camera" />
                    </Link>
                </div>
                <div className="inst-item" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/insta-3.jpg)` }}>
                    <Link to="images/insta-3.jpg" className="inst-link">
                        <FontAwesomeIcon icon="fa-solid fa-camera" />
                    </Link>
                </div>
                <div className="inst-item" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/insta-4.jpg)` }}>
                    <Link to="images/insta-4.jpg" className="inst-link">
                        <FontAwesomeIcon icon="fa-solid fa-camera" />
                    </Link>
                </div>
                <div className="inst-item" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/insta-5.jpg)` }}>
                    <Link to="images/insta-5.jpg" className="inst-link">
                        <FontAwesomeIcon icon="fa-solid fa-camera" />
                    </Link>
                </div>
                </div>
            </div>
        </>

    )
}

export default Instagram;