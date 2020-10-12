import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    return (
        <main className="row d-flex align-items-center" style={{height:'600px'}}>
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3a4256'}}>Your New Smile <br/> Starts Here</h1>
                <div className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci atque aliquam, tenetur optio error recusandae?</div>
                <Link to="/appointment"><button className="btn btn-brand my-3">GET APPOINTMENT</button></Link>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src={chair} alt="" />
            </div>
        </main>
    );
};

export default HeaderMain;