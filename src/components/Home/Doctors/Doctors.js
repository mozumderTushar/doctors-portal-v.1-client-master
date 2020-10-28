import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctorInfo, setDoctorInfo] = useState([])

    useEffect(() => {
        fetch('https://quiet-shore-32489.herokuapp.com/doctors')
        .then(response => response.json())
        .then(result => setDoctorInfo(result))
    },[])

    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    {
                        doctorInfo.map(doctor => <Doctor key={doctor._id} doctor={doctor}></Doctor>)
                    }              
                </div>
            </div>
        </section>
    );
};

export default Doctors;