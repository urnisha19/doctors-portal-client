import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';

const infoCard = ({ info }) => {
    return (
        <div className="info-card col-md-4 text-white">
            <div className={`info-container d-flex justify-content-center info-${info.background}`}>
                <div className="ms-3">
                    <FontAwesomeIcon className="info-icon" icon={info.icon} />
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default infoCard;