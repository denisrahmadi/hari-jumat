import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <>
          <div className=''>
            <h1 className="font-bold text-3xl">Raih Karir Impian. <br/> Walau Sesat di Jalan.</h1> 
            <div className="container">
                <p>Kuasai skill dan dapatkan pekerjaan impianmu. Sudah <span className='font-bold'>2380</span> alumni berhasil meraih <br/> karir impian mereka. Apabila setelah lulus kamu belum bekerja dalam 365 hari,<br/> kamu berhak mendapatkan refund up to <span className='font-bold'>110%</span> investasimu.</p>
            </div>
            <Link to={"/"}></Link>
          </div>
        </>
    );
}

export default Home;