import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center mt-5 pt-5">
            <img style={{height:'50px'}} src={service.img} alt="" />
            <h5 className="my-3" style={{color:'#3a4256'}}>{service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, explicabo?</p>
        </div>
    );
};

export default ServiceDetail;