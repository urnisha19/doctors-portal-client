import React from 'react';
import fluorideTreatment from '../../../images/fluorideTreatment.png';
import cavityFilling from '../../../images/cavityFilling.png';
import teethWhitening from '../../../images/teethWhitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        title: 'Fluoride Treatment',
        img: fluorideTreatment
    },
    {
        title: 'Cavity Filling',
        img: cavityFilling
    },
    {
        title: 'Teeth Whitening',
        img: teethWhitening
    }
]

const Services = () => {
    
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color: '#16D2BD' }}>OUR SERVICES</h5>
                <h2 style={{ fontWeight: "650" }}>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceDetail service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;