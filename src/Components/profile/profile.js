import React from 'react';

const profile = () => {
    return (
        <div>
            <div>
                <img src={img} className='card-img-top rounded-circle w-25' alt="..." />
                <p>Poonam Tabassum</p>
            </div>
            <h2>Watched movies</h2>
            <div>
                <div className="row row-cols-3 p-2 bg-light">
                    <div>
                        <h2>38</h2>
                        <p>English movie</p>
                    </div>
                    <div>
                        <h2>80</h2>
                        <p>Hindi Movies</p>
                    </div>
                    <div>
                        <h2>13</h2>
                        <p>Bangali Short-Films</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default profile;