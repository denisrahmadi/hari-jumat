import React from 'react';
import { Link } from 'react-router-dom';


function About() {
    return (
        <div>
            <h1 className="font-bold text-xl">ini halaman About</h1>
            <Link to={"/about"}></Link>
        </div>
    );
}

export default About;