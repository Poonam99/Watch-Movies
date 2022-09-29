import React from 'react';
import "./Content.css"

const Content = (props) => {

    const { name, time, picture } = props.content;
    return (

        <div>
            <div className="col g-5">

                <div className="card pb-2">
                    <img src={picture} className="card-img-top" alt="..." />
                    <div className="card-body">

                        <h6 className="card-title">Name: {name}</h6>
                        <p className="card-text">Time: {time}m</p>
                    </div>

                    <div className='d-flex justify-content-center align-items-center'>
                        <button onClick={() => props.addToShow(time)} className='btn btn-primary btn-sm w-50 '>Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;