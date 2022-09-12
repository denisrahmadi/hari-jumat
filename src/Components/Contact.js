import React from 'react';
import { Link } from 'react-router-dom';


function Contact(props) {
    return (
        <div>
            <h1 className="font-bold text-xl">ini halaman Contact</h1>
            <Link to={'/contact'}></Link>
        </div>
    );
}

export default Contact;