import React from 'react';

const Testimonial = (props) => {
    const { quote, name, from, img } = props.testimonial;

    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <p className="card-text text-center">{quote}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img src={img} className="mx-3" alt="" width="60" />
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{from}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;